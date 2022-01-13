import { RepositoryBase } from '../RepositoryBase';
import { TLoginProps } from '../../models/account/AccountModel';

export type TUser = {
    email: string;
    id: number;
};
export type TLoginResponse = {
    user: TUser;
    tokens: {
        accessToken: string;
        refreshToken: string;
        type: string;
    };
};
export type TMeProps = {
    token: string;
    type: string;
};

export class AccountRepository extends RepositoryBase {
    constructor(apiUrl: string) {
        super(apiUrl, 'auth');
    }

    static prepareUserData(item: Partial<TUser>): TUser {
        return {
            email: item?.email || '',
            id: item?.id || -1,
        };
    }

    static prepareLoginResource(item: Partial<TLoginResponse>): TLoginResponse {
        console.log('item', item);
        return {
            user: AccountRepository.prepareUserData(item.user || {}),
            tokens: {
                accessToken: item?.tokens?.accessToken || '',
                refreshToken: item?.tokens?.refreshToken || '',
                type: item?.tokens?.type || '',
            },
        };
    }

    async login(props: TLoginProps): Promise<TLoginResponse> {
        return AccountRepository.prepareLoginResource(
            (await super.postMethod(props, '/login')) as Partial<TLoginResponse>
        ) as TLoginResponse;
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
