import { Repository } from '../repositories/Repository';

export type BaseModelProps = {
    repository: Repository;
};

export class BaseModel {
    protected readonly repository: Repository;

    constructor(params: BaseModelProps) {
        const { repository } = params;
        this.repository = repository;
    }
}
