import { ImageStructure, Meta, PageMeta, Query } from './index';
import { BlocksStructure, DetailIngredient } from './catalog';
import { TBackground, TextOptions } from './frontend';

export type PromotionListModelData = {
    promotions: {
        items: DetailPromotion[];
        meta: Meta;
    };
    blocks: BlocksStructure;
    pageMeta: PageMeta;
    lasUpdatedAt: string;
};
export type DetailPromotionModelData = {
    promotion: DetailPromotion;
};
export type PromotionListResourceGetParams = {};
export type PromotionControllerQuery = Query & {
    offset?: number;
    limit?: number;
};
export type PromotionListResourceData = {
    items: PromotionByResponse[];
    meta: Meta;
    pageMeta?: PageMeta;
};
export type PromotionResourceData = PromotionByResponse;
export type OnlyPromotionsQuery = {
    ids?: number[];
};
export type PromotionsQuery = Query & OnlyPromotionsQuery;
export type PromotionList = {
    items: PromotionByResponse[];
    meta: Meta;
};
export type PromotionByResponse = {
    id: number;
    slug: string;
    blocks: BlocksStructure;
    name: string;
    short: string;
    text: string;
    image: ImageStructure;
    images: { image: ImageStructure }[];
    h1: string;
    title: string;
    ogTitle: string;
    metaDescription: string;
    ogDescription: string;
    ogImage: ImageStructure;
    sortOrder: number;
    publishedAt: string;
    updatedAt: string;
    mainPageParams: MainPageParams;
};
export type MainPageParams = {
    alignment: string | null;
    heading: string | null;
    subHeading: string;
    buttonLink: string;
    button: string | null;
    banners: {
        big: BannerImageStructure;
        small: BannerImageStructure;
    };
};
export type BannerImageStructure = {
    image_1: string;
    image_2: string;
    image_3: string;
    image_1_thumb: string;
    image_1_thumb2x: string;
    image_2_thumb: string;
    image_2_thumb2x: string;
    image_3_thumb: string;
    image_3_thumb2x: string;
};
export type DetailPromotion = {
    id: number;
    pageMeta: PageMeta;
    image: ImageStructure;
    images: { image: ImageStructure }[];
    sortOrder: number;
    mainPageParams: MainPageParams;
    blocks: BlocksStructure;
};
export type OnlyNewsCategoriesQuery = {
    ids?: number[];
    hasNews?: boolean;
};
export type NewsCategoriesQuery = Query & OnlyNewsCategoriesQuery;
export type NewsCategoryByResponse = {
    id: number;
    name: string;
    short: string;
    slug: string;
    text: string;
    updatedAt: string;
    blocks: BlocksStructure;
    tags: { id: number }[];
    newsCount: number;
    mobileImage: ImageStructure;
    tabletImage: ImageStructure;
    desktopImage: ImageStructure;
    h1: string;
    title: string;
    ogTitle: string;
    ogImage: ImageStructure;
    metaDescription: string;
    ogDescription: string;
    sortOrder: number;
};
export type DetailNewsCategory = {
    id: number;
    pageMeta: PageMeta;
    sortOrder: number;
};
export type NewsCategoriesList = {
    items: NewsCategoryByResponse[];
    meta: Meta;
};
export type AllNewsQuery = {
    categoryIds?: number[];
    ids?: number[];
    tags?: number[];
};
export type NewsQuery = Query & AllNewsQuery;
export type NewsByResponse = {
    id: number;
    slug: string;
    blocks: BlocksStructure;
    categories: { id: number }[];
    category: { id: number };
    name: string;
    short: string;
    text: string;
    thumb: string;
    thumb2x: string;
    desktopImage: ImageStructure;
    tabletImage: ImageStructure;
    mobileImage: ImageStructure;
    tags: { id: number }[];
    images: ImageStructure[];
    h1: string;
    title: string;
    ogTitle: string;
    metaDescription: string;
    ogDescription: string;
    ogImage: ImageStructure;
    publishedAt: string;
    updatedAt: string;
    sortOrder: number;
};
export type DetailNews = {
    id: number;
    pageMeta: PageMeta;
    categories: DetailNewsCategory[];
    category: DetailNewsCategory;
    desktopImage: ImageStructure;
    tabletImage: ImageStructure;
    mobileImage: ImageStructure;
    tags: DetailNewsTag[];
    images: ImageStructure[];
    sortOrder: number;
};
export type NewsList = {
    items: NewsByResponse[];
    meta: Meta;
};
export type TagsList = {
    items: NewsTagByResponse[];
    meta: Meta;
};
export type NewsTagByResponse = {
    id: number;
    name: string;
    categories: { id: number }[];
};
export type DetailNewsTag = {
    id: number;
    name: string;
    categories: DetailNewsCategory[];
};
export type AllNewsTagsQuery = {
    ids?: number[];
};
export type NewsTagsQuery = Query & AllNewsTagsQuery;
export type NewsCategoryModelGetParams = {
    offset?: number;
    limit?: number;
};
export type NewsListModelGetParams = {
    offset?: number;
    limit?: number;
    slug: string;
};
export type NewsCategoryModelData = {
    categories: {
        items: DetailNewsCategory[];
        meta: Meta;
    };
    news: DetailNews[];
    pageMeta: PageMeta;
};
export type NewsListCategoryModelData = {
    category: DetailNewsCategory;
    news: {
        items: DetailNews[];
        meta: Meta;
    };
};
export type NewsModelResourceData = {
    news: DetailNews;
};
export type PageByResponse = {
    id: number;
    slug: string;
    name: string;
    short: string;
    text: string;
    image: ImageStructure;
    h1: string;
    title: string;
    ogTitle: string;
    metaDescription: string;
    ogDescription: string;
    ogImage: ImageStructure;
    sortOrder: number;
    updatedAt: string;
    blocks: BlocksStructure;
};
export type DetailPage = {
    id: number;
    pageMeta: PageMeta;
    blocks: BlocksStructure;
};
export type PageQuery = Query & {
    ids?: number[];
};
export type PageList = {
    items: PageByResponse[];
    meta: Meta;
};
export type FormByResponse = {
    id: number;
    text: string;
    code: string;
    formType: {
        code: string;
    } | null;
    elementList: TFormElement[];
    layout: {
        mobile: FormLayoutElements;
        tablet: FormLayoutElements;
        desktop: FormLayoutElements;
    };
    title: string;
    steps: {
        desktop: FormStepElement[];
        tablet: FormStepElement[];
        mobile: FormStepElement[];
    } | null;
    rules: null | any;
    sortOrder: number;
    createdAt: string;
    updatedAt: string;
};
export type FormQuery = Query & {
    ids?: number[];
};
export type FormList = {
    items: FormByResponse[];
    meta: Meta;
};
export type FormLayoutElement = {
    id: string;
    columns: {
        id: string;
        name: string;
        value: number;
        gridRows?: FormLayoutElements;
    }[];
};
export type FormStepElement = {
    id: string;
    image: ImageStructure;
    name: string | null;
    text: string | null;
    rowList: {
        id: string;
        columns: {
            id: string;
            name: string;
            value: number;
        }[];
    }[];
};

export type FormLayoutElements = FormLayoutElement[];
export type TFormElement = {
    id: string;
    name: string; // --
    params: {
        accept: string | null;
        checked: boolean;
        code: string;
        colors: {
            error: string | null;
            success: string | null;
        };
        eventCode: string | number;
        eventName: string | null;
        formMatches: string | null;
        isExternalLink: boolean;
        mask: string | null;
        max: number;
        minHeight: number;
        maxHeight: number;
        maxLength: number;
        min: number;
        options: { id: number; value: string }[];
        placeholder: string | null;
        postfix: { id: string; value: string; options?: string[] } | null;
        dateOptions?: {
            dateOnly: boolean;
            defaultValue: string;
            defaultTime: string | null;
            minimalDateOffset: string | null;
            minimalTimeOffset: string | null;
            minutesStep: number;
            timeOnly: boolean;
            timeRange: string[];
        };
        step: number;
        url: string | null;
        value: string | boolean | null; // ++
        type: string;
    };
    validationRule: {
        accept: null | string;
        fileSize: number | null;
        mask: null | string;
        maxLength: number;
        message: string;
        mimeTypes: string | null;
        minLength: number;
        required: boolean;
        type: string;
    };
};
export type DetailForm = {
    id: number;
    text: string;
    code: string;
    formType: {
        id: number;
        code: string;
    };
    elementList: TFormElement[];
    title: string;
    layout: {
        mobile: FormLayoutElements;
        tablet: FormLayoutElements;
        desktop: FormLayoutElements;
    };
    steps: number | null;
    sortOrder: number;
    createdAt: string;
    updatedAt: string;
};
export type FormByRequest = {
    elementList: TFormElement[];
    id: number;
    orientation: string;
};
export type MenuList = MenuListElement[];
export type MenuListElement = {
    id: string;
    status: boolean;
    componentName: string;
    params: {
        image: ImageStructure | null;
        text: string;
        url: string;
        color: string | null;
        activeColor: string | null;
        targetBlank: boolean;
        entity: {
            type: string;
            parentId: number | null;
            id: number | null;
            offerID: null | number;
            name: null | string;
        };
        visibleQuantity: {
            desktopVisibleQuantity: number | null;
            tabletVisibleQuantity: number | null;
            mobileVisibleQuantity: number | null;
        };
        list: MenuList | null;
    };
};
export type MenuByResponse = {
    id: number;
    name: string;
    sortOrder: number;
    status: boolean;
    createdAt: string;
    updatedAt: string;
    params: {
        color: string | null;
        activeColor: string | null;
        visibleQuantity: {
            desktopVisibleQuantity: number | null;
            tabletVisibleQuantity: number | null;
            mobileVisibleQuantity: number | null;
        };
    };
    list: MenuList;
};
export type MenuQuery = Query & {
    ids?: number[];
};
export type MenuListStructure = {
    items: MenuByResponse[];
    meta: Meta;
};
export type SeoPatternQuery = Query & {
    entityAlias?: string[];
};
export type SeoPatternByResponse = {
    id: number;
    name: string;
    matches: {
        title: string | null;
        h1: string | null;
        metaDescription: string | null;
        ogDescription: string | null;
        ogTitle: string | null;
        short: string | null;
        text: string | null;
    };
    entity: {
        id: number;
        alias: string;
    };
    updatedAt: string;
};
export type SeoPatternList = {
    items: SeoPatternByResponse[];
    meta: Meta;
};

export type CouponQuery = Query & {
    coupon: string;
};

export type daDataQuery = Query & {
    q: string;
    fromBound: string;
    toBound: string;
};

export type TBannerGrid = {
    title?: string | null;
    background?: TBackground;
    grid: {
        desktop: BannerGridRow[];
        tablet: BannerGridRow[];
        mobile: BannerGridRow[];
    };
};

export type BannerGridRow = {
    id: string;
    columns: BannerGridColumn[];
};

export type BannerGridColumn = {
    id: string;
    params: {
        button: string | null;
        image: ImageStructure;
        isExternalLink: boolean;
        link: string | null;
        opacity: string;
        text: string | null;
        textOptions: TextOptions;
    };
    value: number;
};

export type BannerListElement = {
    id: string;
    columns: {
        id: string;
        params?: unknown;
        name?: string;
        value: number;
    }[];
};

export type OrderForm = {
    id: number;
    elementList: { id: string; params: { value: string | boolean } }[];
    orientation: string;
};

export type OrderData = {
    customer: {
        form: OrderForm;
    };
    delivery: {
        comment: string | null;
        method: {
            id: number;
            form: OrderForm;
            deliveryArea: { id: number; deliveryArea: { id: number } } | null;
            pickupPoint: { id: number; pickupPoint: { id: number } } | null;
        };
    };
    payment: {
        method: {
            id: number;
            form: OrderForm;
        };
    };
    persons: number;
    productList: {
        currentOffer: { id: number };
        id: number;
        priceWithIngredients: number;
        specialWithIngredients: number;
        quantity: number;
        ingredientList: DetailIngredient[];
    }[];
};

export type Base64Query = Query & {
    string: string;
};

export type EntityThumbDimensions = {
    height: number;
    width: number;
    value: string;
    id: string;
};
