import { RootStore, TRootStoreInstance } from './RootStore';
import { applySnapshot } from 'mobx-state-tree';

export type TInitStoreOptions = {
    apiUrl: string;
};

let index: TRootStoreInstance | undefined;

export function initStore(apiUrl: string, snapshot?: TRootStoreInstance) {
    const _store =
        index ??
        RootStore.create({
            // settingsStore: {},
            // pageStore: {},
            // catalogStore: {},
            // productStore: {},
            // configStore: {},
            // promotionListStore: {},
            // promotionStore: {},
            // newsCategoriesStore: {},
            // newsCategoryStore: {},
            // newsStore: {},
            // newsTagStore: {},
            // cartStore: {},
            // searchStore: {}
            apiUrl,
            authStore: {},
            // favoriteStore: {},
        });

    // If your page has Next.js data fetching methods that use a Mobx index, it will
    // get hydrated here, check `pages/ssg.tsx` and `pages/ssr.tsx` for more details
    if (snapshot) {
        applySnapshot(_store, snapshot);
    }
    // For SSG and SSR always create a new index
    if (typeof window === 'undefined') {
        return _store;
    } else {
        //prepare initial productList
    }
    // Create the index once in the client
    if (!index) {
        index = _store;
    }

    return index;
}
