import { ImageStructure, SortParam } from './index';
import {
    CategoryAttributes,
    DetailIngredient,
    DetailOffer,
    DetailProduct,
    OfferAttribute,
} from './catalog';
import { CommonAttribute } from './settings';
import { Meta } from './index';
import { Aggregations, AttrQuery } from './catalog';
import { DetailForm, FormLayoutElement, TFormElement } from './content';

export type TBackground = {
    color: null | string;
    gradientColors: {
        color: string;
        percent: number;
    }[];
    images: {
        desktop: ImageStructure | [];
        tablet: ImageStructure | [];
        mobile: ImageStructure | [];
    };
};

export type TExternalLink = {
    openInNewTab: boolean;
    text: string | null;
    url: string | null;
};

export type TMenu = {
    id: number;
    list: TMenuItem[];
    name: string;
    params: TMenuParams;
    status: boolean;
};

export type TMenuItem = {
    componentName: null | string;
    id: string;
    list: TMenuItem[] | null;
    params: TMenuParams & {
        image: null | ImageStructure;
        targetBlank: boolean;
        text: null | string;
        url: null | string;
    };
    status: boolean;
};

export type TMenuParams = {
    color: null | string;
    activeColor: null | string;
};

export type TPhone = {
    description: string | null;
    isExternalLink: boolean;
    phone: string | null;
    thumb: null | ImageStructure;
    url: string | null;
};

export type TWorkDay = {
    end: null | string;
    start: null | string;
};
export type FrontendAggregations = Omit<
    Aggregations,
    'minPrice' & 'maxPrice'
> & {
    toPrice: number;
    fromPrice: number;
};
export type TSetAggregations = {
    aggregations: Aggregations;
    attributesQuery: {
        attributes?: AttrQuery;
        priceLimit?: {
            toPrice: number;
            fromPrice: number;
            minPrice: number;
            maxPrice: number;
        };
    };
};
export type TFetchCategoryProps = {
    slug: string;
    options?: {
        requestUrl?: string;
        meta?: Meta;
        attributes?: AttrQuery;
        priceLimit?: {
            toPrice: number;
            fromPrice: number;
        };
        sortParams?: SortParam[];
    };
};

export type TFetchSearchProps = {
    q: string;
    meta: Meta;
};

export type TSliderOptionsByResponse = {
    loop?: boolean;
    autoLoop?: boolean;
    autoplaySpeed?: number;
    speed?: number;
    watchOverflow?: boolean;
    slidesPerView?: {
        quantity: number;
    };
    allowTouchMove?: boolean;
    spaceBetween?: number;
    centeredSlides?: boolean;
    centerInsufficientSlides?: boolean;
    threshold?: number;
    touchRatio?: number;
    lazy?: boolean;
    watchSlidesVisibility?: boolean;
    breakpoints?: {
        [width: number]: TSliderOptions;
    };
};

export type TSliderOptions = {
    loop?: boolean;
    autoLoop?: boolean;
    autoplaySpeed?: number;
    speed?: number;
    watchOverflow?: boolean;
    slidesPerView?: number | 'auto';
    allowTouchMove?: boolean;
    spaceBetween?: number;
    centeredSlides?: boolean;
    centerInsufficientSlides?: boolean;
    threshold?: number;
    touchRatio?: number;
    lazy?: boolean;
    watchSlidesVisibility?: boolean;
    breakpoints?: {
        [width: number]: TSliderOptions;
    };
};
export type TPriceObject = {
    maxPrice: number;
    minPrice?: number;
};
export type TUseAttributesProps = {
    categoryAttrs: CategoryAttributes;
    offerAttrs: OfferAttribute[];
    settingsAttrs: CommonAttribute[];
};
export type TOutputAttrs = {
    listAttributes: TListAttrs;
};
export type TlistAttr = {
    id: number;
    name: string;
    code: string;
    sortOrder: number;
    value: {
        id: number;
        value: string;
    };
};
export type TListAttrs = TlistAttr[];
export type TProductOption = {
    id: number;
    name: string;
    values: {
        id: number;
        value: string;
        isActive?: boolean;
    }[];
};

export type TOptionCombinations = TProductOption[];
export type OnOptionValueClick = (optionId: number, valueId: number) => void;
export type TOrientation = 'desktop' | 'tablet' | 'mobile';
export type TForm = {
    form: DetailForm;
    orientation: TOrientation;
    globalReadonly?: boolean;
};
export type TLayoutElement = Omit<FormLayoutElement, 'columns' & 'gridRows'> & {
    columns: {
        id: string;
        name: string;
        value: number;
        item: TFormElement;
    }[];
    gridRows?: TLayoutElement[];
};
export type TFormOrientationGrid = TLayoutElement[];
export type TFormActions = {
    setHiddenFields: (ids: string[]) => void;
    setUnrequiredFields: (ids: string[]) => void;
};

export type TFormItem = {
    item: TFormElement;
    globalReadonly?: boolean;
    onSubmitForm?: () => Promise<void>;
    validateElement?: (element: TFormElement) => string;
};

export type TBannerColumnElement = {
    id: string;
    name: string;
    value?: unknown;
    params: unknown;
    validationRule?: unknown;
};

export type TextOptions = {
    bg: string | null;
    color: string | null;
    fontSize: number;
    maxWidth: number;
    textBgColor: string | null;
    x: string;
    y: string;
};

export type TBannerItem = {
    id: string;
    value: number;
    params: {
        button: string | null;
        image: ImageStructure;
        isExternalLink: boolean;
        link: string | null;
        opacity: string | null;
        text: string;
        textOptions: TextOptions;
    };
};

export type TFlashItem = {
    id: string;
    value: number;
    params: {
        hoverImage: ImageStructure;
        backgroundImage: ImageStructure;
        isExternalLink: boolean;
        link: string | null;
        opacity: string | null;
        title: string | null;
        text: string | null;
        textOptions: TextOptions;
    };
};

export type TBannerColumnItem = {
    item: TBannerColumnElement;
    globalReadonly?: boolean;
    onSubmitForm?: () => Promise<void>;
    validateElement?: (element: TFormElement) => string;
    orientation?: string;
};

export type TTileItem = {
    item: TTileElement;
    orientation: TOrientation;
};

export type TTileElementByResponse = {
    id: string;
    value: number;
    params: {
        button: string | null;
        image: ImageStructure;
        isExternalLink: boolean;
        link: string | null;
        opacity: string | null;
        subtitle: string | null;
        title: string | null;
        textOptions: TextOptions;
        form?: {
            formId: number;
        };
    };
};

export type TTileElement = {
    id: string;
    value: number;
    params: {
        button: string | null;
        image: ImageStructure;
        isExternalLink: boolean;
        link: string | null;
        opacity: string | null;
        subtitle: string | null;
        title: string | null;
        textOptions: TextOptions;
        form?: DetailForm;
        modalId?: string;
    };
};

export type TOutputProduct = {
    currentOffer: DetailOffer;
    currentOfferId: number;
    priceObject: TPriceObject;
    listAttributes: TListAttrs;
    detailAttributes: TListAttrs;
    weightAttribute?: TlistAttr;
    volumeAttribute?: TlistAttr;
    attributeValue: string;
    optionCombinations: TOptionCombinations;
    onOptionValueClick: OnOptionValueClick;
    cartQuantity: number;
    setCartQuantity: (num: number) => void;
    isInFavoriteList: boolean;
    onFavoriteClick: () => void;
    productIngredientsState: TProductIngredients;
    updateIngredientsList: TUpdateIngredientList;
    ingredientsView: TIngredientCategory[];
    clearCategoryIngredients: TClearCategoryIngredients;
    selectedIngredientsView: TIngredientCategory[];
    removeSelectedIngredient: TRemoveSelectedIngredient;
    ingredientKey: boolean;
    isViewTradable: boolean;
};

export type TUpdateIngredientList = (
    quantity: number,
    categoryId: number,
    ingredientId: number
) => void;

export type TClearCategoryIngredients = (categoryId: number) => void;

export type TRemoveSelectedIngredient = (
    categoryId: number,
    ingredientId: number
) => void;

export type TIngredientCategory = {
    id: number;
    name: string;
    maxQuantity: number | null;
    minQuantity: number | null;
    productList: DetailIngredient[];
};

export type TProductIngredients = {
    [offerId: string]: TIngredientCategory[];
};
