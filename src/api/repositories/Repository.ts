import { AccountRepository } from './account/AccountRepository';

export class Repository {
    accountRepository: AccountRepository;

    constructor(apiUrl: string) {
        this.accountRepository = new AccountRepository(apiUrl);
    }
}
