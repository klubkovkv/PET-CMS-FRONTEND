import { BaseEntity } from '../BaseEntity';
import { DetailPage, PageByResponse } from '../../../types/content';
import { preparePageMeta } from '../../helpers/base';

type BySlugStructure = Partial<PageByResponse>;

export class PageEntity extends BaseEntity {
    static prepareItemStructure(item: BySlugStructure): PageByResponse {
        return {
            id: item?.id || -1,
            updatedAt: item?.updatedAt || '',
            title: item?.title || '',
            text: item?.text || '',
            sortOrder: item?.sortOrder || 0,
            slug: item?.slug || '',
            short: item?.short || '',
            ogTitle: item?.ogTitle || '',
            ogImage: {
                image: item?.ogImage?.image || '',
                thumb: item?.ogImage?.thumb || '',
                thumb2x: item?.ogImage?.thumb2x || '',
            },
            ogDescription: item?.ogDescription || '',
            name: item?.name || '',
            metaDescription: item?.metaDescription || '',
            image: {
                image: item?.image?.image || '',
                thumb: item?.image?.thumb || '',
                thumb2x: item?.image?.thumb2x || '',
            },
            h1: item?.h1 || '',
            blocks: {
                list: item?.blocks?.list || [],
                mergeWithGlobal: item?.blocks?.mergeWithGlobal ?? false,
            },
        };
    }

    prepareDetail(item: PageByResponse): DetailPage {
        return {
            id: item.id,
            blocks: item.blocks,
            pageMeta: preparePageMeta(item),
        };
    }

    prepareList(items: PageByResponse[]): DetailPage[] {
        return items.map(item => this.prepareDetail(item));
    }
}
