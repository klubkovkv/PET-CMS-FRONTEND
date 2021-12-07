import { BaseModel, BaseModelProps } from '../BaseModel';
import {
    TLoginResponse,
    TMeProps,
    TUser,
} from '../../repositories/account/AccountRepository';

export type TSendPhoneProps = { phone: string; recaptchaToken: string };
export type TLoginProps = { phone: string; password: string; token: string };

export class AccountModel extends BaseModel {
    constructor(props: BaseModelProps) {
        super(props);
    }

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
