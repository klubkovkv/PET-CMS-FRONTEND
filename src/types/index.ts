// import { TBlockList } from '../components/blockList/BlockList';

export type Query = {
    sortParams?: SortParam[];
    offset?: number;
    limit?: number;
    fields?: string[];
    page?: number;
};
export type ImageStructure = {
    image: string;
    thumb: string;
    thumb2x: string;
    alt?: string;
};
export type SortParamsStructure = SortParam[];
export type SortParam = {
    text?: string;
    type?: string;
    field: string | null;
    direction: string | null;
    clientOnly?: boolean;
    allowClientChoice?: boolean;
};
export type PageMeta = {
    h1: string;
    name: string;
    metaDescription: string;
    ogDescription: string;
    ogTitle: string;
    short: string;
    slug: string;
    text: string;
    title: string;
    updatedAt: string;
    ogImage: ImageStructure;
    publishedAt?: string;
    blocks?: any;
};
export type ThumbDimensions = [number, number];
export type Meta = {
    total: number;
    limit: number;
    offset: number;
};
