import { ImageStructure, Meta, PageMeta, Query, SortParam, SortParamsStructure, ThumbDimensions } from './index';
import { SeoPatternByResponse } from './content';
import { TSettingsShop } from './settings';

export type Point = number[];
export type Polygon = Point[];
export type MultiPolygon = [Polygon, Polygon?];
export type GeoPosition = {
    address: string;
    coords: Point | null;
};
export type OnlyProductQuery = {
    category?: number[];
    withAggregations?: boolean;
    thumbDimensions?: ThumbDimensions;
    attributes?: AttrQuery;
    area?: MultiPolygon;
    fromPrice?: number;
    toPrice?: number;
    q?: string;
    ids?: number[];
    offerIds?: number[];
};
export type AttrQuery = { attrId: number; value: number }[];
export type ProductOffer = Query & {
    ids?: number[];
};
export type ProductQuery = Query & OnlyProductQuery;
export type OfferByResponse = {
    id: number;
    code: string;
    name: string;
    tags: any[];
    ingredients: {
        products: IngredientByProductOffer[];
        categories: {
            id: number;
            maxQuantity: number | null;
            minQuantity: number | null;
            name: string;
        }[];
    };
    price: number;
    priceWithIngredients: number;
    specialWithIngredients: number | null;
    quantity: number | null;
    attributes: {
        id: number;
        name: string;
        value: {
            id: number;
            value: string;
        };
        group: {
            id: number;
            name: string;
        };
        sortOrder: number;
    }[];
    options: {
        id: number;
        name: string;
        value: {
            id: number;
            value: string;
        };
        sortOrder: number;
    }[];
    image: ImageStructure;
    thumb: string;
    thumb2x: string;
    images: ImageStructure[];
};
export type OfferAttribute = {
    id: number;
    name: string;
    value: {
        id: number;
        value: string;
    };
    group: {
        id: number;
        name: string;
    };
    sortOrder: number;
};
export type DetailOffer = {
    id: number;
    code: string;
    name: string;
    tags: any[];
    ingredients: {
        products: DetailIngredient[];
        categories: IngredientCategory[];
    };
    priceWithIngredients: number;
    specialWithIngredients: number | null;
    quantity: number | null;
    attributes: OfferAttribute[];
    options: {
        id: number;
        name: string;
        value: {
            id: number;
            value: string;
        };
        sortOrder: number;
    }[];
    image: ImageStructure;
    thumb: string;
    thumb2x: string;
    images: ImageStructure[];
};
export type IngredientCategory = {
    id: number;
    maxQuantity: number | null;
    minQuantity: number | null;
    name: string;
    sortOrder: number;
};

export type EmbedCategory = {
    id: number;
    name: string;
    slug: string;
    attributes: CategoryAttribute[];
};
export type ProductBySlug = {
    id: number;
    blocks: BlocksStructure;
    slug: string;
    geoPosition: GeoPosition;
    category: {
        id: number;
    };
    categoryPath: { id: number }[];
    priceWithIngredients: number;
    specialWithIngredients: number | null;
    name: string;
    short: string;
    text: string;
    h1: string;
    title: string;
    metaDescription: string;
    ogTitle: string;
    ogDescription: string;
    currentOffer: {
        id: number;
    };
    offer: {
        id: number;
    };
    offers: OfferByResponse[];
    images: ImageStructure[];
    image: ImageStructure;
    thumb: string;
    thumb2x: string;
    ogImage: ImageStructure;
    ogThumb: string;
    ogThumb2x: string;
    isTradable: boolean;
    sortOrder: number;
    status: boolean;
    updatedAt: string;
    price: number;
    special: number;
    additionalData?: {
        ingredientLabel: string;
    };
};
export type ProductList = {
    items: ProductBySlug[];
    meta?: Meta;
    aggregations?: Aggregations;
};
export type CategoryQuery = {
    categoryIds?: number[];
    ids?: number[];
    depth?: number;
    thumbDimensions?: [number, number];
};
export type AllCategoryQuery = Query & CategoryQuery;
export type CategoryAttribute = {
    id: number;
    name: string;
    isRequired: boolean;
    showInList: boolean;
    showInDetail: boolean;
    useForFilter: boolean;
};
export type BundleGroupQuery = {
    date?: string;
    ids?: number[];
};
export type AllBundleGroupQuery = Query & BundleGroupQuery;
export type BundleQuery = {
    date?: string;
    ids?: number[];
    groupIds?: number[];
};
export type AllBundleQuery = Query & BundleQuery;
export type CategoryAttributes = CategoryAttribute[];
export type BlocksStructure = {
    mergeWithGlobal: boolean;
    list: any[];
};
export type CategoryPathItem = {
    id: number;
    slug: string;
    name: string;
};
export type CategoryPathStructure = CategoryPathItem[];
export type CategoryBySlug = {
    attributes: CategoryAttributes;
    blocks: BlocksStructure;
    categoryPath: { id: number }[];
    h1: string | null;
    id: number;
    image: ImageStructure;
    menuImage: ImageStructure;
    icon: ImageStructure;
    metaDescription: string;
    name: string;
    ogDescription: string;
    ogImage: ImageStructure;
    ogTitle: string;
    parent: CategoryPathItem | null;
    short: string;
    slug: string;
    sortParams: SortParamsStructure;
    styleParam: string | null;
    text: string;
    thumb: string;
    thumb2x: string;
    title: string;
    updatedAt: string | null;
};
export type CategoryList = {
    items: CategoryBySlug[];
    meta: Meta;
    aggregations: Aggregations;
};
export type IngredientQuery = {
    offerIds?: number[];
    ids?: number[];
};
export type AllIngredientQuery = IngredientQuery & Query;
export type IngredientByProductOffer = {
    id: number;
    offer: {
        id: number;
    };
    category: EmbedCategory;
    name: string;
    image: ImageStructure;
    minQuantity: number;
    maxQuantity: number;
    quantity: number;
    freeQuantity: number;
    price: number;
    special: number | null;
    status: boolean;
    sortOrder: number;
};
export type IngredientByResponse = {
    id: number;
    blocks: BlocksStructure;
    slug: string;
    geoPosition: GeoPosition;
    category: { id: number };
    categoryPath: { id: number }[];
    price: number;
    special: number | null;
    name: string;
    short: string;
    text: string;
    h1: string;
    title: string;
    metaDescription: string;
    ogTitle: string;
    ogDescription: string;
    currentOffer: {
        id: number;
    };
    offers: OfferByResponse[];
    images: ImageStructure[];
    image: ImageStructure;
    thumb: string;
    thumb2x: string;
    ogImage: ImageStructure;
    ogThumb: string;
    ogThumb2x: string;
    isTradable: boolean;
    sortOrder: number;
    status: boolean;
    updatedAt: string;
};
export type DetailIngredient = {
    id: number;
    blocks: BlocksStructure;
    pageMeta: PageMeta;
    geoPosition: GeoPosition;
    category: { id: number };
    categoryPath: { id: number }[];
    price: number;
    special: number | null;
    name?: string;
    currentOffer: {
        id: number;
    };
    offers: OfferByResponse[];
    images: ImageStructure[];
    image: ImageStructure;
    thumb: string;
    thumb2x: string;
    isTradable: boolean;
    sortOrder: number;
    status: boolean;
    minQuantity?: number;
    maxQuantity?: number;
    freeQuantity?: number;
    quantity?: number;
};
export type IngredientList = {
    items: IngredientByResponse[];
    meta: Meta;
    aggregations: Aggregations;
};
export type LandingQuery = {
    categoryIds?: number[];
    thumbDimensions?: ThumbDimensions;
};
export type AllLandingQuery = LandingQuery & Query;
export type LandingBySlug = {
    id: number;
    slug: string;
    blocks: BlocksStructure;
    category: { id: number };
    categoryPath: { id: number }[];
    name: string;
    text: string;
    image: ImageStructure;
    h1: string;
    title: string;
    short: string;
    ogTitle: string;
    metaDescription: string;
    ogDescription: string;
    ogImage: ImageStructure;
    sortParams: SortParamsStructure;
    productFilter: {
        attributes: {
            [key: string]: number[];
        };
    };
    sortOrder: number;
    updatedAt: string;
};
export type LandingList = {
    items: LandingBySlug[];
    meta: Meta;
    aggregations: Aggregations;
};
export type AggregationAttribute = {
    id: number;
    name: string;
    values: {
        value: {
            id: number;
            value: string;
        };
        status?: boolean;
        productCount: number;
    }[];
};
export type Aggregations = {
    attributes: AggregationAttribute[];
    minPrice?: number;
    maxPrice?: number;
};
export type CategoryResourceGetParams = {
    mainCategory: {
        slug: string;
        query: AllCategoryQuery;
    };
    nestedCategories: AllCategoryQuery;
    neighboringCategories: AllCategoryQuery;
    productList: ProductQuery;
    landingList: AllLandingQuery;
};
export type CategoryModelData = {
    category: {
        category: CategoryBySlug;
        relatedCategories: CategoryList;
    };
    nestedCategories: {
        categoryList: CategoryList;
        relatedCategories: CategoryList;
    };
    neighboringCategories: {
        categoryList: CategoryList;
        relatedCategories: CategoryList;
    };
    productData: {
        productList: ProductList;
        categories: CategoryList;
        ingredients: { ingredients: ProductList; relatedCategories: CategoryList };
    };
    landingList: {
        landings: LandingList;
        categories: CategoryList;
    };
    ingredientList?: IngredientList;
    seoPattern?: SeoPatternByResponse;
    shopSettings: TSettingsShop;
    blocks: BlocksStructure;
};
export type CategoryResourceData = {
    category: DetailCategory | null;
    nestedCategories: DetailCategory[];
    neighboringCategories: DetailCategory[];
    productList: {
        items: DetailProduct[];
        meta?: Meta;
        aggregations?: Aggregations;
    };
    landingList: DetailLanding[];
    blocks: BlocksStructure;
};
export type ProductResourceGetParams = {
    slug: string;
    offer?: number;
};
export type ProductModelData = {
    product: ProductBySlug;
    relatedCategories: CategoryList;
    relatedCategoriesOfIngredients: CategoryList;
    ingredientList: ProductList;
    seoPattern?: SeoPatternByResponse;
    shopSettings: TSettingsShop;
    blocks: BlocksStructure;
};
export type ProductResourceData = {
    product: DetailProduct;
    blocks: BlocksStructure;
};
export type LandingResourceGetParams = {
    mainLanding: {
        slug: string;
        query: AllLandingQuery;
    };
    productQuery: ProductQuery;
    landingQuery: AllLandingQuery;
};
export type LandingModelData = {
    landing: {
        landing: LandingBySlug;
        relatedCategories: CategoryList;
    };
    productList: {
        productList: ProductList;
        relatedCategories: CategoryList;
        ingredients: { ingredients: ProductList; relatedCategories: CategoryList };
    };
    landingList: {
        landings: LandingList;
        relatedCategories: CategoryList;
    };
    ingredientList?: IngredientList;
    seoPattern?: SeoPatternByResponse;
    shopSettings: TSettingsShop;
    blocks: BlocksStructure;
};
export type LandingResourceData = {
    landing: DetailLanding;
    productList: {
        items: DetailProduct[];
        meta?: Meta;
        aggregations?: Aggregations;
    };
    neighboringLandings: DetailLanding[];
    blocks: BlocksStructure;
};
export type DetailLanding = {
    id: number;
    category: EmbedCategory;
    categoryPath: CategoryPathStructure;
    pageMeta: PageMeta;
    productFilter: {
        attributes: {
            [key: string]: number[];
        };
    };
    sortParams: SortParamsStructure;
    sortOrder: number;
};
export type DetailProduct = {
    id: number;
    pageMeta: PageMeta;
    category: EmbedCategory;
    categoryPath: CategoryPathStructure;
    priceWithIngredients: number;
    specialWithIngredients: number | null;
    price: number;
    special: number;
    currentOffer: {
        id: number;
    };
    offer?: {
        id: number;
    };
    offers: DetailOffer[];
    images: ImageStructure[];
    image: ImageStructure;
    thumb: string;
    thumb2x: string;
    isTradable: boolean;
    sortOrder: number;
    status: boolean;
    additionalData?: {
        ingredientLabel?: string;
    };
};
export type DetailCategory = {
    id: number;
    attributes: CategoryAttributes;
    categoryPath: CategoryPathStructure;
    pageMeta: PageMeta;
    image: ImageStructure;
    menuImage: ImageStructure;
    icon: ImageStructure;
    parent: CategoryPathItem | null;
    sortParams: SortParamsStructure;
    styleParam: string | null;
    thumb: string;
    thumb2x: string;
};
export type CategoryControllerQuery = Query & {
    offset?: number;
    limit?: number;
    toPrice?: number;
    fromPrice?: number;
    attributes?: { attrId: number; value: number }[];
};
export type BundleGroupControllerQuery = Query & {
    date?: string;
};
export type BundleGroupByResponse = {
    id: number;
    slug: string;
    name: string;
    text: string;
    h1: string;
    title: string;
    ogTitle: string;
    metaDescription: string;
    ogDescription: string;
    updatedAt: string;
    sortOrder: number;
    bundles: { id: number }[];
    mobileImage: ImageStructure;
    tabletImage: ImageStructure;
    desktopImage: ImageStructure;
};
export type BundleGroupsList = {
    items: BundleGroupByResponse[];
    meta: Meta;
};
export type BundleGroupsModelData = {
    relatedBundles: {
        bundles: BundleList;
        relatedBundleGroups: BundleGroupsList;
        relatedSets: SetList;
        relatedBundlesOfSets: BundleList;
        relatedBundleProducts: ProductList;
    };
    groups: BundleGroupByResponse[];
    meta: Meta;
    pageMeta: PageMeta;
};
export type BundleGroupModelData = {
    relatedBundles: {
        bundles: BundleList;
        relatedBundleGroups: BundleGroupsList;
        relatedSets: SetList;
        relatedBundlesOfSets: BundleList;
        relatedBundleProducts: ProductList;
    };
    group: BundleGroupByResponse;
};
export type BundleModelData = {
    bundle: BundleByResponse;
    relatedData: {
        relatedBundleGroups: BundleGroupsList;
        relatedSets: SetList;
        relatedBundlesOfSets: BundleList;
        relatedBundleProducts: ProductList;
    };
    seoPattern?: SeoPatternByResponse;
};
export type DetailBundleGroup = {
    id: number;
    bundles: DetailBundle[];
    desktopImage: ImageStructure;
    tabletImage: ImageStructure;
    mobileImage: ImageStructure;
    pageMeta: PageMeta;
};
export type BundleGroupsResourceData = {
    bundleGroups: {
        groups: DetailBundleGroup[];
        meta: Meta;
        pageMeta: PageMeta;
    };
};
export type BundleGroupResourceData = {
    bundleGroup: DetailBundleGroup;
    pageMeta: PageMeta;
};
export type BundleResourceData = {
    bundle: DetailBundle;
};
export type BundleResourceGetParams = Query & {
    slug?: string;
    date?: string;
};
export type BundleByResponse = {
    dayOffset: number;
    desktopImage: ImageStructure;
    mobileImage: ImageStructure;
    tabletImage: ImageStructure;
    endsAt: string;
    groups: { id: number }[];
    id: number;
    name: string;
    sets: { id: number; day: number }[];
    slug: string;
    sortOrder: number;
    startsAt: string;
    timeOffset: string | null;
    updatedAt: string;
};
export type BundleList = {
    items: BundleByResponse[];
    meta: Meta;
};
export type DetailBundle = {
    id: number;
    dayOffset: number;
    desktopImage: ImageStructure;
    mobileImage: ImageStructure;
    tabletImage: ImageStructure;
    activeSet?: DetailSet;
    pageMeta: PageMeta;
    endsAt: string;
    groups: { id: number; slug: string }[];
};
export type AllSetQuery = Query & SetQuery;
export type SetQuery = {
    ids?: number[];
};
export type SetByResponse = {
    id: number;
    name: string;
    price: number | null;
    bundles: { id: number }[];
    categories: {
        id: number;
        name: string;
        icon: ImageStructure;
        productCount: number;
        sortOrder: number;
        productList: {
            offer: { id: number };
            id: number;
            currentOffer: { id: number };
        }[];
    }[];
    sortOrder: number;
    type: {
        id: number;
        code: string;
        name: string;
    };
    updatedAt: string;
};
export type DetailSet = {
    bundles: { id: number; name: string; slug: string }[];
    categories: {
        id: number;
        name: string;
        icon: ImageStructure;
        productCount: number;
        sortOrder: number;
        productList: DetailProduct[];
    }[];
    day?: number;
    id: number;
    pageMeta: PageMeta;
    price: number | null;
    sortOrder: number;
    type: {
        id: number;
        code: string;
        name: string;
    };
};
export type SetList = {
    sets: SetByResponse[];
    meta: Meta;
};
export type AllBundleProductQuery = Query & unknown;
export type BundleProductList = {
    products: ProductBySlug[];
    meta: PageMeta;
};
export type OutputCatalogQuery = {
    offset?: number;
    limit?: number;
    priceLimit?: { toPrice: number; fromPrice: number } | undefined;
    offerId?: number;
    attributes?: AttrQuery;
    sortParam?: SortParam;
};

export type SearchResourceData = {
    products: DetailProduct[];
    meta: Meta;
};
