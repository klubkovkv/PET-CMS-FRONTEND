import { createContext, FC, useContext, useMemo } from 'react';
import { TRootStoreInstance } from './RootStore';
import { initStore } from './initStore';

export const RootStoreContext = createContext<null | TRootStoreInstance>(null);

export const useStore = (): TRootStoreInstance => {
    const store = useContext(RootStoreContext);
    if (store === null) {
        throw new Error('Store cannot be null, please add a context provider');
    }
    return store;
};

type TStoreProvider = {
    initialState?: TRootStoreInstance;
    host: string;
};

export const StoreProvider: FC<TStoreProvider> = ({
    children,
    host,
    initialState,
}) => {
    const store = useMemo(
        () => initStore(initialState?.apiUrl || '', host, initialState),
        [host, initialState]
    );
    return (
        <RootStoreContext.Provider value={store}>
            {children}
        </RootStoreContext.Provider>
    );
};
