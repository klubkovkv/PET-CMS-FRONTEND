import {
    applySnapshot,
    Instance,
    SnapshotIn,
    SnapshotOut,
    types,
} from 'mobx-state-tree';
import { BaseStore } from './BaseStore';
import { RootStore } from '../RootStore';

export type TBreadcrumbs = {
    url: string;
    name: string;
};

const Breadcrumbs = types.custom<TBreadcrumbs[], TBreadcrumbs[]>({
    name: 'Breadcrumbs',
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
        if (true) return ''; // OK
        return `'${value}' doesn't look like a valid BreadcrumbsStructure`;
    },
});

export const BreadcrumbsStore = types
    .compose(
        BaseStore,
        types.model({
            breadcrumbs: types.optional(Breadcrumbs, []),
        })
    )
    .actions(self => {
        const setBreadcrumbs = (breadcrumbs: TBreadcrumbs[]): void => {
            applySnapshot(self, {
                ...self,
                breadcrumbs,
            });
        };

        return {
            setBreadcrumbs,
        };
    });

export type IBreadcrumbsStore = Instance<typeof BreadcrumbsStore>;
export type IBreadcrumbsStoreIn = SnapshotIn<typeof BreadcrumbsStore>;
export type IBreadcrumbsStoreOut = SnapshotOut<typeof BreadcrumbsStore>;
