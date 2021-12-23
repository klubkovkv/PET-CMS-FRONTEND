import { ImageStructure } from './index';

export type SettingsStructure = {
    entityBlocks: SettingsEntityBlocks;
    cloudPayments: SettingsCloudPayments;
    recaptcha: SettingsRecaptcha;
    popupForms: SettingsPopupForms;
    system: SettingsSystem;
    orders: SettingsOrders;
    custom: SettingsCustom;
    analytics: SettingsAnalytics;
    thirdParty: SettingsThirdParty;
    header: SettingsHeader;
    contacts: SettingsContacts;
    seo: SettingsSeo;
    socialNetworks: SettingsSocialNetworks;
    footer: SettingsFooter;
    shop: SettingsShop;
};
export type SettingsEntityBlocks = {
    entities: {
        name: string;
        entity: string;
        blockList: any[];
    }[];
};
export type SettingsCloudPayments = {
    ApplePayVerificationFile: boolean;
};
export type SettingsRecaptcha = {
    publicKey: string;
};
export type SettingsPopupForms = {
    callback: string;
    quiz: string;
    consult: string;
};
export type SettingsSystem = {
    locale: string;
    phoneMask: string;
};
export type SettingsOrders = {
    popupSuccessNotification: {
        title: string;
        text: string;
    };
};
export type SettingsCustom = {
    seo: any[];
    blockList: { id: string; status: boolean }[];
};
export type SettingsAnalytics = {
    gtm: string;
};
export type SettingsThirdParty = {
    services: { code: string; url: string; image: ImageStructure }[];
};
export type SettingsHeader = {
    block: any;
    stickyHeaderBlock: any;
    mobileMenuBlock: any;
};
export type SettingsContacts = {
    schedule: string;
    email: string;
    workingHours: {
        timeZone: string;
        schedule: any;
    };
    addresses: {
        address: string;
        addressValue: string[];
        coordinates: string[];
    }[];
    companyName: string;
    phones: {
        phone: string;
        description: string;
        isExternalLink: boolean;
        url: string;
        thumb: ImageStructure;
    }[];
    mapIcon: ImageStructure;
    mapIconSize: {
        width: string;
        height: string;
    };
    mapIconOffset: {
        x: string;
        y: string;
    };
};
export type SettingsSeo = {
    items: any[];
};
export type SettingsSocialNetworks = {
    vk: string;
    ok: string;
    fb: string;
    instagram: string;
    telegram: string;
    tripadvisor: string;
    whatsApp: string;
    viber: string;
};
export type SettingsFooter = {
    block: any;
};
export type TAvailability = {
    from: string;
    to: string;
};
export type TAvailabilityPeriod = {
    id: string;
    categoryId?: number;
    offerId?: number;
    bundleId?: number;
    type: 'category' | 'product' | 'bundle';
    name: string;
    availabilityPeriod: TAvailability;
};
export type CommonAttribute = {
    code: string;
    name: string;
    attribute: {
        id: number;
        name: string;
    } | null;
    sortOrder: number;
};
export type SettingsShop = {
    commonAttributes: CommonAttribute[];
    cartFormId: string;
    availabilityPeriods: TAvailabilityPeriod[];
    allowOrderWithoutAuthentication: boolean;
    timezone: string;
};
export type TSettingsShop = {
    shop: SettingsShop;
    time: SettingsTime;
};
export type LayoutStructure = {
    footer: SettingsFooter;
    header: SettingsHeader;
    popupForms: SettingsPopupForms;
};
export type DefaultSettingsStructure = {
    cloudPayments: SettingsCloudPayments;
    recaptcha: SettingsRecaptcha;
    system: SettingsSystem;
    orders: SettingsOrders;
    custom: SettingsCustom;
    analytics: SettingsAnalytics;
    thirdParty: SettingsThirdParty;
    contacts: SettingsContacts;
    socialNetworks: SettingsSocialNetworks;
    shop: SettingsShop;
};
export type SettingsCache = {
    clearedAt: string;
    createdAt: string;
};
export type SettingsTime = {
    time: string;
};
