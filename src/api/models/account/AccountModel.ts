import { BaseModel } from '../BaseModel';
import {
    TLoginResponse,
    TMeProps,
    TUser,
} from '../../repositories/account/AccountRepository';

export type TLoginProps = { email: string; password: string };

export class AccountModel extends BaseModel {
    async login(props: TLoginProps): Promise<TLoginResponse> {
        return await this.repository.accountRepository.login(props);
    }

    async getUser(props: TMeProps): Promise<TUser> {
        return await this.repository.accountRepository.me(props);
    }

    async logout(props: TMeProps): Promise<void> {
        await this.repository.accountRepository.logout(props);
    }
}
