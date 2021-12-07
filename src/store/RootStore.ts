import { Instance, SnapshotIn, types } from 'mobx-state-tree';
import { Repository } from '../api/repositories/Repository';
import { BaseStore } from './modules/BaseStore';
import { AuthStore } from './modules/AuthStore';

export const RootStore = types.compose(
    BaseStore,
    types
        .model({
            authStore: AuthStore,
            apiUrl: types.string,
            host: types.string,
        })
        .volatile(self => {
            return {
                _repository: new Repository(self.apiUrl, self.host),
            };
        })
        .views(self => ({
            get repository(): Repository {
                return self._repository;
            },

            get isError(): boolean {
                return !!self.authStore.error;
            },
        }))
        .actions(self => {
            const clearStoresError = (): void => {
                self.authStore.clearError();
            };

            return {
                clearStoresError,
            };
        })
);

export type TRootStoreInstance = Instance<typeof RootStore>;
export type TRootStoreIn = SnapshotIn<typeof RootStore>;
