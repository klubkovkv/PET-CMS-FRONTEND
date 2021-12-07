import { AccountRepository } from './account/AccountRepository';

export class Repository {
    accountRepository: AccountRepository;
    host: string;

    constructor(apiUrl: string, host: string) {
        this.host = host;
        this.accountRepository = new AccountRepository(apiUrl);
    }
}
