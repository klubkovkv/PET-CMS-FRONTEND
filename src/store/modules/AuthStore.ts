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
export const TCustomer = types.custom<TUser, TUser>({
    name: 'TCustomer',
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
        return `'${value}' doesn't look like a valid TCustomer`;
    },
});

export const AuthStore = types
    .compose(
        BaseStore,
        types.model({
            phone: types.optional(types.string, '+7'),
            phoneError: types.optional(types.string, ''),
            smsCode: types.optional(types.string, ''),
            smsCodeError: types.optional(types.string, ''),
            token: types.optional(types.string, ''),
            type: types.optional(types.string, ''),
            phoneToken: types.optional(types.string, ''),
            timerSecondsLeft: types.optional(types.number, 0),
            isProcessTimer: types.optional(types.boolean, false),
            user: types.optional(TCustomer, null),
        })
    )
    .actions(self => {
        const updatePhone = (phone: string): void => {
            applySnapshot(self, {
                ...self,
                phone,
            });
        };

        const clearPhoneError = (): void => {
            applySnapshot(self, {
                ...self,
                phoneError: '',
            });
        };

        const updateSmsCode = (smsCode: string): void => {
            applySnapshot(self, {
                ...self,
                smsCode,
            });
        };

        const clearSmsCodeError = (): void => {
            applySnapshot(self, {
                ...self,
                smsCodeError: '',
            });
        };

        const fetchToken = async (): Promise<void> => {
            const token = localStorage.getItem('auth');
            const type = localStorage.getItem('type');
            applySnapshot(self, {
                ...self,
                token: token || '',
                type: type || '',
            });

            if (token) {
                try {
                    const modelProps = {
                        repository:
                            getParent<typeof RootStore>(self).repository,
                    };
                    await new AccountModel(modelProps).getUser({ type, token });
                } catch (e) {
                    logout();
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

        const setAuthPhoneToken = (phoneToken: string): void => {
            applySnapshot(self, {
                ...self,
                phoneToken,
            });
        };

        const login = async (cb?: () => Promise<void>): Promise<void> => {
            const modelProps = {
                repository: getParent<typeof RootStore>(self).repository,
            };
            const { phoneToken, phone, smsCode } = self;
            if (phoneToken) {
                try {
                    const { token, type } = await new AccountModel(
                        modelProps
                    ).login({
                        token: phoneToken,
                        phone,
                        password: smsCode,
                    });
                    localStorage.setItem('type', type);
                    setAuthToken(token, type);
                    cb?.();
                } catch (e) {
                    if (e.data.errors?.password) {
                        applySnapshot(self, {
                            ...self,
                            smsCodeError: e.data.errors?.password[0],
                        });
                    }
                }
            }
        };

        const logout = async (): Promise<void> => {
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
                phoneToken: '',
                smsCode: '',
                smsCodeError: '',
            });
            localStorage.setItem('auth', '');
            localStorage.setItem('type', '');
        };

        return {
            fetchToken,
            updatePhone,
            clearPhoneError,
            setAuthPhoneToken,
            updateSmsCode,
            clearSmsCodeError,
            login,
            logout,
        };
    })
    .views(self => ({
        get isAuthorised(): boolean {
            return self.token !== '';
        },
        get isPhoneSent(): boolean {
            return self.phoneToken !== '';
        },
    }));
// eslint-disable-next-line
export type IAuthStore = Instance<typeof AuthStore>;
// eslint-disable-next-line
export type IAuthStoreIn = SnapshotIn<typeof AuthStore>;
// eslint-disable-next-line
export type IAuthStoreOut = SnapshotOut<typeof AuthStore>;
