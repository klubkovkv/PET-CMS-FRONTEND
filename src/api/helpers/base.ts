import { PageMeta } from '../../types';
import get from 'lodash.get';
import {
    AttrQuery,
    CategoryBySlug,
    CategoryPathStructure,
    EmbedCategory,
    OutputCatalogQuery,
} from '../../types/catalog';
import { TAvailability } from '../../types/settings';
import { ServerResponse } from 'http';
import config from '../../config/default.json';
import { ParsedUrlQuery } from 'querystring';

export const preparePageMeta = (item: any): PageMeta => {
    return {
        h1: item?.h1 || '',
        metaDescription: item?.metaDescription || '',
        name: item?.name || '',
        ogDescription: item?.ogDescription || '',
        ogTitle: item?.ogTitle || '',
        short: item?.short || '',
        slug: item?.slug || '',
        text: item?.text || '',
        title: item?.title || '',
        updatedAt: item?.updatedAt || '',
        ogImage: {
            image: item?.ogImage?.image || '',
            thumb: item?.ogImage?.thumb || '',
            thumb2x: item?.ogImage?.thumb2x || '',
        },
        publishedAt: item?.publishedAt || '',
    };
};

export const generateStringFromPattern = (
    pattern: any,
    data: any,
    field: string,
    variables: any
): string => {
    if (((pattern || {}).matches || {})[field]) {
        const string = pattern.matches[field];

        const replacer = (match: any, group1: any) => {
            const field = variables[group1];
            if (field && data) {
                return field === 'priceWithIngredients'
                    ? get(data, 'specialWithIngredients', '') ||
                          get(data, field, '')
                    : get(data, field, '');
            } else {
                return '';
            }
        };

        return string.replace(/{(.+?)}/g, replacer);
    } else {
        return '';
    }
};

export const uniqArray = (array: any[], field = ''): any[] => {
    return array.filter((v, i, a) => {
        const vField = field ? get(v, field, null) : v;
        return (
            a.findIndex(item => {
                const itemField = field ? get(item, field, null) : item;
                return vField === itemField;
            }) === i
        );
    });
};

export const prepareRelatedCategory = (
    id: number,
    categories: CategoryBySlug[]
): EmbedCategory => {
    const category = categories.find(cat => cat.id === id);
    return {
        id: category?.id || -1,
        slug: category?.slug || '',
        name: category?.name || category?.title || category?.h1 || '',
        attributes: category?.attributes || [],
    };
};

export const isCurrentTimeMatches = (
    time: string,
    timeZone: string,
    availability: TAvailability
): boolean => {
    const [serverTime] = time.split(' ').reverse();
    const [hours] = serverTime.split(':');
    const updatedHours: number = parseInt(hours) + parseInt(timeZone);
    const { to, from } = availability;
    const [toHours] = to.split(':');
    const [fromHours] = from.split(':');
    return (
        parseInt(fromHours) <= updatedHours && parseInt(toHours) >= updatedHours
    );
};

export const respondError = (
    response: ServerResponse,
    statusCode?: number
): void => {
    response.statusCode = statusCode ?? 404;
};

export const isValidCategoryPath = (
    requestUrl: string,
    categoryPath: CategoryPathStructure
): boolean => {
    const mappedPath = categoryPath.map(category => category.slug).join('/');
    const [withoutQuery] = requestUrl.split('?');
    let path = withoutQuery
        .split('/')
        .filter(slug => !/product-|landing-/gm.test(slug))
        .map(slug => slug.replace(/category-/gm, ''))
        .filter(v => v)
        .join('/');
    // При переходе по Next Link , next подменяет url на свой типа "_next/.../" Костыль, чтобы его обработать
    if (/_next/.test(requestUrl)) {
        const [, queryStr] = requestUrl.split('?');

        path = queryStr
            .split('&')
            .reduce((accum, value) => {
                const [param, paramValue] = value.split('=');
                return ['slug', 'category'].includes(param) &&
                    !/product-|landing-/gm.test(paramValue)
                    ? `${accum}/${paramValue.replace(/category-/gm, '')}`
                    : accum;
            }, '')
            .slice(1);
    }
    path = path.replace(/%2C/g, '/');

    return path === mappedPath;
};

export const prepareCatalogQuery = (
    query: ParsedUrlQuery
): OutputCatalogQuery => {
    const offset = parseInt(
        typeof query.offset === 'string' ? query.offset : '0'
    );
    const limit = parseInt(
        typeof query.limit === 'string'
            ? query.limit
            : '' + config.api.defaultLimit
    );
    const attributes: AttrQuery = [];
    Object.keys(query).forEach(key => {
        if (/attributes/.test(key)) {
            const values: string = query[key] as string;
            const vals: number[] = values.split(',').map(v => parseInt(v));
            vals.forEach(value =>
                attributes.push({
                    attrId: parseInt(key.replace(/attributes/, '')),
                    value,
                })
            );
        }
    });
    const fromPrice: number | undefined =
        typeof query.fromPrice === 'string'
            ? parseFloat(query.fromPrice)
            : undefined;
    const toPrice: number | undefined =
        typeof query.toPrice === 'string'
            ? parseFloat(query.toPrice)
            : undefined;
    let priceLimit: { toPrice: number; fromPrice: number } | undefined;
    if (typeof fromPrice === 'number' && typeof toPrice === 'number') {
        priceLimit = {
            toPrice,
            fromPrice,
        };
    }
    const offerId =
        typeof query.offerId === 'string' ? parseInt(query.offerId) : undefined;

    const sortParam = {
        field: typeof query.sort === 'string' ? query.sort : '',
        direction: typeof query.order === 'string' ? query.order : '',
    };
    return {
        offset,
        limit,
        attributes,
        priceLimit,
        offerId,
        sortParam,
    };
};

export const getCurrentDate = (time: string) => {
    const date = new Date();
    const year = date.getFullYear();
    const month =
        date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

    let hours = '00';
    let minutes = '00';
    if (time) {
        hours = time.split(':')[0];
        minutes = time.split(':')[1];
    } else {
        hours =
            date.getHours() < 10
                ? '0' + `${date.getHours()}`
                : `${date.getHours()}`;
        minutes =
            date.getMinutes() < 10
                ? '0' + `${date.getMinutes()}`
                : `${date.getMinutes()}`;
    }

    return `${year}/${month}/${day} ${hours}:${minutes}`;
};

export const getGreenwichTime = (): string => {
    const date = new Date();
    const hours =
        date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes =
        date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return getCurrentDate(hours + ':' + minutes);
};
