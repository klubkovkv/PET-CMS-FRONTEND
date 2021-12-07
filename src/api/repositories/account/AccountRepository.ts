import { RepositoryBase } from '../RepositoryBase';
import { TLoginProps } from '../../models/account/AccountModel';

export type TSendPhoneResponse = { token: string };
export type TUser = {
    email: string;
    id: number;
    name: string;
    orderCount: number;
    phone: string;
};
export type TLoginResponse = {
    data: TUser;
    token: string;
    type: string;
    refreshToken: string;
};
export type TMeProps = {
    token: string;
    type: string;
};

export class AccountRepository extends RepositoryBase {
    constructor(apiUrl: string) {
        super(apiUrl, 'account');
    }

    static prepareLoginResource(item: Partial<TLoginResponse>): TLoginResponse {
        return {
            data: AccountRepository.prepareUserData(item.data || {}),
            refreshToken: item?.refreshToken || '',
            token: item?.token || '',
            type: item?.type || '',
        };
    }

    async login(props: TLoginProps): Promise<TLoginResponse> {
        return AccountRepository.prepareLoginResource(
            await super.postMethod(props, '/login')
        ) as TLoginResponse;
    }

    static prepareUserData(item: Partial<TUser>): TUser {
        return {
            email: item?.email || '',
            id: item?.id || -1,
            name: item?.name || '',
            orderCount: item?.orderCount || 0,
            phone: item?.phone || '',
        };
    }

    async me(props: TMeProps): Promise<TUser> {
        const { data } = (await super.getMethod({}, '/me', {
            authorization: `${props.type} ${props.token}`,
        })) as { data: TUser };
        return AccountRepository.prepareUserData(data);
    }

    async logout(props: TMeProps): Promise<void> {
        await super.postMethod({}, '/logout', {
            authorization: `${props.type} ${props.token}`,
        });
    }
}
