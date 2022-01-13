import {
    applySnapshot,
    getParent,
    Instance,
    SnapshotIn,
    SnapshotOut,
    types,
} from 'mobx-state-tree';
import { BaseStore } from './BaseStore';
import { RootStore } from '../RootStore';
import { AccountModel } from '../../api/models/account/AccountModel';
import { TUser } from '../../api/repositories/account/AccountRepository';
export const TAdmin = types.custom<TUser, TUser>({
    name: 'TAdmin',
    fromSnapshot(value) {
        return value;
    },
    toSnapshot(value) {
        return value;
    },
    isTargetType(): boolean {
        return true;
    },
    getValidationMessage(value): string {
        // eslint-disable-next-line
        if (true) return ''; // OK
        return `'${value}' doesn't look like a valid TAdmin`;
    },
});

export const AuthStore = types
    .compose(
        BaseStore,
        types.model({
            email: types.optional(types.string, ''),
            error: types.optional(types.string, ''),
            password: types.optional(types.string, ''),
            token: types.optional(types.string, ''),
            type: types.optional(types.string, ''),
            user: types.maybeNull(TAdmin),
        })
    )
    .actions(self => {
        const updateEmail = (email: string): void => {
            applySnapshot(self, {
                ...self,
                email,
            });
        };

        const clearError = (): void => {
            applySnapshot(self, {
                ...self,
                error: '',
            });
        };

        const updatePassword = (password: string): void => {
            applySnapshot(self, {
                ...self,
                password,
            });
        };

        const fetchToken = async (): Promise<void> => {
            const type = localStorage.getItem('type') || '';
            const token = localStorage.getItem('auth') || '';
            applySnapshot(self, {
                ...self,
                token: token,
                type: type,
            });

            if (token) {
                try {
                    const modelProps = {
                        repository:
                            getParent<typeof RootStore>(self).repository,
                    };
                    await new AccountModel(modelProps).getUser({ type, token });
                } catch (e) {
                    await logout();
                }
            }
        };

        const setAuthToken = (token: string, type: string): void => {
            applySnapshot(self, {
                ...self,
                type,
                token,
            });
            localStorage.setItem('auth', token);
            localStorage.setItem('type', type);
        };

        const login = async (cb?: () => void): Promise<void> => {
            const modelProps = {
                repository: getParent<typeof RootStore>(self).repository,
            };

            const { email, password } = self;
            console.log('modelProps', email, password);
            if (email && password) {
                try {
                    const { tokens } = await new AccountModel(modelProps).login(
                        {
                            email,
                            password,
                        }
                    );
                    localStorage.setItem('type', tokens?.type);
                    setAuthToken(tokens.accessToken, tokens?.type);
                    cb?.();
                } catch (e: any) {
                    if (e.data?.message) {
                        applySnapshot(self, {
                            ...self,
                            error: e.data.message,
                        });
                    }
                }
            }
        };

        const logout = async (): Promise<void> => {
            console.log('logout');
            try {
                const modelProps = {
                    repository: getParent<typeof RootStore>(self).repository,
                };
                await new AccountModel(modelProps).logout({
                    type: self.type,
                    token: self.token,
                });
            } catch (e) {
                console.log(e);
            }
            applySnapshot(self, {
                ...self,
                token: '',
                type: '',
            });
            localStorage.setItem('auth', '');
            localStorage.setItem('type', '');
        };

        return {
            fetchToken,
            updateEmail,
            clearError,
            updatePassword,
            login,
            logout,
        };
    })
    .views(self => ({
        get isAuthorized(): boolean {
            return self.token !== '';
        },
    }));
// eslint-disable-next-line
export type IAuthStore = Instance<typeof AuthStore>;
// eslint-disable-next-line
export type IAuthStoreIn = SnapshotIn<typeof AuthStore>;
// eslint-disable-next-line
export type IAuthStoreOut = SnapshotOut<typeof AuthStore>;
