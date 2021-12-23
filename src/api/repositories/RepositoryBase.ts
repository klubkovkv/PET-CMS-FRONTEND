import axios, { AxiosRequestHeaders } from 'axios';
import defaultConfig from '../../config/default.json';
import { ServerError } from '../entities/ServerError';
import { Query, SortParam } from '../../types';

export abstract class RepositoryBase {
    protected readonly requestUrl: string;
    private readonly defaultLimit: number;
    protected readonly apiUrl: string;

    protected constructor(apiUrl: string, url: string, limit?: number) {
        this.requestUrl = url;
        this.apiUrl = apiUrl;
        this.defaultLimit = limit || defaultConfig.api.defaultLimit;
    }

    protected prepareServerSortParams(sortParams: SortParam[]): SortParam[] {
        return sortParams.filter(item => {
            return !!(!item.clientOnly && item.field && item.direction);
        });
    }

    protected prepareDefaultQueryObject(query: Query): Query {
        return {
            offset:
                typeof query.offset !== 'undefined' ? query.offset : undefined,
            limit: typeof query.limit === 'number' ? query.limit : undefined,
            sortParams: query.sortParams || undefined,
            fields: query.fields || undefined,
        };
    }

    protected getBaseQueryString(query: Query): string {
        let queryStr = '';

        if (query.sortParams) {
            query.sortParams.forEach(
                param =>
                    (queryStr += !['', null].includes(param.field)
                        ? `sort[]=${param.field}&order[]=${param.direction}&`
                        : '')
            );
        }

        if (query.fields) {
            queryStr += 'fields=';
            query.fields.forEach(
                (field, index) =>
                    (queryStr += field
                        ? `${field}${
                              index !== (query.fields?.length || 0) - 1
                                  ? ','
                                  : ''
                          }`
                        : '')
            );
            queryStr += '&';
        }

        if (
            ![NaN, undefined].includes(query.limit) &&
            ![NaN, undefined].includes(query.offset)
        ) {
            queryStr += `limit=${query.limit ?? this.defaultLimit}&`;
            queryStr += `offset=${query.offset ?? 0}&`;
        }

        return queryStr;
    }

    protected getQueryString(query: Query): string {
        const str = this.getBaseQueryString(query);
        return str.slice(0, -1);
    }

    protected throwError(error?: any) {
        throw new ServerError({
            message: `Some backend error was happened! Error: ${
                error?.response?.statusText
            } + ${JSON.stringify(error?.response?.data)}`,
            name: 'Backend Error',
            status: error?.response?.status,
            data: error?.response?.data,
        });
    }

    async getMethod(
        query?: Query,
        urlParams?: string,
        headers?: AxiosRequestHeaders
    ): Promise<unknown | undefined> {
        let result = null;
        let error = null;
        const queryString = this.getQueryString(query || {});
        const requestUrl = `${this.apiUrl}${this.requestUrl}${
            urlParams || ''
        }?${queryString}`;

        await axios
            .get(requestUrl, {
                headers,
            })
            .then(response => (result = response.data))
            .catch(err => (error = err));

        if (result) {
            return result;
        } else {
            this.throwError(error);
        }
    }

    async getById(id: number | string): Promise<unknown | undefined> {
        let result = null;
        let error = null;
        const requestUrl = `${this.apiUrl}${this.requestUrl}?id[]=${id}`;

        await axios
            .get(requestUrl)
            .then(response => (result = response.data))
            .catch(err => (error = err));

        if (result) {
            return result;
        } else {
            this.throwError(error);
        }
    }

    async getList(query: Query): Promise<any> {
        let result = null;
        let error = null;
        const queryString = this.getQueryString(query);
        const requestUrl = `${this.apiUrl}${this.requestUrl}?${queryString}`;
        await axios
            .get(requestUrl)
            .then(response => (result = response.data))
            .catch(err => (error = err));

        if (error) {
            this.throwError(error);
        }

        return result || {};
    }

    async getBySlug(slug: string, query: Query): Promise<unknown | null> {
        let result = null;
        let error = null;
        const queryString = this.getQueryString(query);
        const requestUrl = `${this.apiUrl}${this.requestUrl}/${slug}?${queryString}`;

        await axios
            .get(requestUrl)
            .then(response => (result = response.data))
            .catch(err => (error = err));

        if (error) {
            this.throwError(error);
        }

        return result;
    }

    async postMethod(
        data: unknown,
        urlParams?: string,
        headers?: AxiosRequestHeaders
    ): Promise<unknown | null> {
        let result = null;
        let error = null;
        const requestUrl = `${this.apiUrl}${this.requestUrl}${urlParams || ''}`;

        await axios
            .post(requestUrl, data, {
                headers: headers ?? {},
            })
            .then(response => (result = response.data))
            .catch(err => (error = err));

        if (error) {
            this.throwError(error);
        }

        return result;
    }

    async putMethod(
        data: unknown,
        urlParams?: string,
        headers?: AxiosRequestHeaders
    ): Promise<unknown | null> {
        let result = null;
        let error = null;
        const requestUrl = `${this.apiUrl}${this.requestUrl}${urlParams || ''}`;
        //   console.log(requestUrl);

        await axios
            .put(requestUrl, data, {
                headers: headers ?? {},
            })
            .then(response => (result = response.data))
            .catch(e => {
                error = e;
            });

        if (error) {
            this.throwError(error);
        }

        return result;
    }

    async deleteMethod(
        data: unknown,
        urlParams?: string,
        headers?: AxiosRequestHeaders
    ): Promise<unknown | null> {
        let result = null;
        let error = null;
        const requestUrl = `${this.apiUrl}${this.requestUrl}${urlParams || ''}`;
        // console.log(requestUrl);

        await axios
            .delete(requestUrl, {
                data,
                headers: headers ?? {},
            })
            .then(response => (result = response.data))
            .catch(e => (error = e));

        if (error) {
            this.throwError(error);
        }

        return result;
    }
}
