import { createContext, FC, useContext } from 'react';
import { TRootStoreInstance } from './RootStore';

export const RootStoreContext = createContext<null | TRootStoreInstance>(null);

export const useStore = (): TRootStoreInstance => {
    const store = useContext(RootStoreContext);
    if (store === null) {
        throw new Error('Store cannot be null, please add a context provider');
    }
    return store;
};

type TStoreProvider = {
    store: TRootStoreInstance;
};

export const StoreProvider: FC<TStoreProvider> = ({ children, store }) => {
    return (
        <RootStoreContext.Provider value={store}>
            {children}
        </RootStoreContext.Provider>
    );
};
