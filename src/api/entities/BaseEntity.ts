import get from 'lodash.get';

export class BaseEntity implements EntityInterface {
    // eslint-disable-next-line
    mapDetail(
        id: number,
        idPath: string,
        actualList: any[],
        mergedParam?: any
    ): any | null {
        const clone = actualList.find(item => {
            const itemId = get(item, idPath, null);
            return itemId === id;
        });

        return clone ? { ...clone, ...(mergedParam || {}) } : null;
    }

    // eslint-disable-next-line
    mapList(
        ids: number[],
        idPath: string,
        actualList: any[],
        mergedParam?: any[]
    ): any[] {
        const list: any = [];
        ids.forEach(id => {
            const params = (mergedParam || []).find(param => param.id === id);
            const value = this.mapDetail(id, idPath, actualList, params);
            if (value !== null) {
                list.push(value);
            }
        });

        return list;
    }
}

// eslint-disable-next-line
interface EntityInterface<
    ElId = number,
    IdPath = string,
    ActualList = any[],
    MergedParam = any
> {
    // eslint-disable-next-line
    mapDetail: (
        id: ElId,
        idPath: IdPath,
        actualList: ActualList,
        mergedParam?: MergedParam
    ) => any | null;
    // eslint-disable-next-line
    mapList: (
        ids: ElId[],
        idPath: IdPath,
        actualList: ActualList,
        mergedParams?: MergedParam[]
    ) => any[];
}
