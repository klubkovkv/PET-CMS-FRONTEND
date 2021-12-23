import axios from 'axios';
import defaultConfig from '../../config/default.json';

// const buildProductLink = (
//     item: { slug: string },
//     categoryPath: any[],
//     offerId = null
// ) => {
//     let path = '';
//
//     if ((categoryPath || []).length > 0) {
//         categoryPath.forEach((segment, index) => {
//             path +=
//                 index === 0
//                     ? segment.slug + '/'
//                     : 'category-' + segment.slug + '/';
//         });
//     }
//
//     if ((item || {}).slug) {
//         path += 'product-' + item.slug;
//     }
//
//     if (offerId) {
//         path += `?offer=${offerId}`;
//     }
//
//     if (path[path.length - 1] === '/') {
//         path = path.substring(0, path.length - 1);
//     }
//
//     return path[0] === '/' ? path : '/' + path;
// };
//
// const buildCategoryLink = (categoryPath: any[]) => {
//     let path = '';
//
//     if ((categoryPath || []).length > 0) {
//         categoryPath.forEach((segment, index) => {
//             path +=
//                 index === 0
//                     ? segment.slug + '/'
//                     : 'category-' + segment.slug + '/';
//         });
//     }
//
//     if (path[path.length - 1] === '/') {
//         path = path.substring(0, path.length - 1);
//     }
//
//     return path[0] === '/' ? path : '/' + path;
// };
//
// const buildLandingLink = (landing: { slug: string }, categoryPath: any[]) => {
//     let path = '';
//
//     if ((categoryPath || []).length > 0) {
//         categoryPath.forEach((segment, index) => {
//             path +=
//                 index === 0
//                     ? segment.slug + '/'
//                     : 'category-' + segment.slug + '/';
//         });
//     }
//
//     if ((landing || {}).slug) {
//         path += 'landing-' + landing.slug;
//     }
//
//     if (path[path.length - 1] === '/') {
//         path = path.substring(0, path.length - 1);
//     }
//
//     return path[0] === '/' ? path : '/' + path;
// };
//
// const buildBundleLink = (
//     bundle: { groups: { slug: any }[]; slug: string },
//     groupSlug = null
// ) => {
//     let path = 'bundle-groups/';
//
//     path += '/' + groupSlug ? groupSlug : bundle.groups[0].slug;
//     path += '/' + bundle.slug;
//
//     if (path[path.length - 1] === '/') {
//         path = path.substring(0, path.length - 1);
//     }
//
//     return path[0] === '/' ? path : '/' + path;
// };
//
// const buildBundleGroupLink = (groupSlug: string) => {
//     let path = 'bundle-groups';
//     path += '/' + groupSlug;
//
//     if (path[path.length - 1] === '/') {
//         path = path.substring(0, path.length - 1);
//     }
//
//     return path[0] === '/' ? path : '/' + path;
// };
//
// const buildPagesLink = (slug: string) => {
//     return slug === 'home' ? '/' : `/pages/${slug}`;
// };
//
// const buildPromotionLink = (slug: any) => {
//     return `/promotions/${slug}`;
// };
//
// const buildAllPromotionsLink = () => {
//     return '/promotions';
// };
//
// const buildAllNewsLink = () => {
//     return '/news-categories';
// };
//
// const buildNewsCategoryLink = (slug: any) => {
//     return `/news-categories/${slug}`;
// };
//
// const buildNewsLink = (
//     newsCategorySlug: string | string[],
//     newsSlug: string | string[]
// ) => {
//     if (newsCategorySlug) {
//         let path = 'news-categories';
//
//         path +=
//             newsCategorySlug[0] === '/'
//                 ? newsCategorySlug
//                 : '/' + newsCategorySlug;
//         path += newsSlug[0] === '/' ? newsSlug : '/' + newsSlug;
//
//         if (path[path.length - 1] === '/') {
//             path = path.substring(0, path.length - 1);
//         }
//
//         return path[0] === '/' ? path : '/' + path;
//     }
// };
//
// const buildNewsTagLink = (
//     newsCategorySlug: string | string[],
//     tagId: string | string[]
// ) => {
//     if (newsCategorySlug) {
//         let path = 'news-categories';
//
//         path +=
//             newsCategorySlug[0] === '/'
//                 ? newsCategorySlug
//                 : '/' + newsCategorySlug;
//         path += tagId[0] === '/' ? 'tag-' + tagId : '/tag-' + tagId;
//
//         if (path[path.length - 1] === '/') {
//             path = path.substring(0, path.length - 1);
//         }
//
//         return path[0] === '/' ? path : '/' + path;
//     }
// };
//
// const getBackendApiUrl = async (host: string): Promise<string> => {
//     let url = '';
//     if (/localhost/.test(host)) {
//         url = defaultConfig.api.apiUrl;
//     } else {
//         let stands: any[] | PromiseLike<any[]> = [];
//         await axios
//             .get('http://standsdelivery:13458')
//             .then(response => {
//                 stands = response.data;
//             })
//             .catch(err => console.log(err));
//
//         const hostList = Array.from(stands, i => i.clientHost);
//         const hostInd = hostList.findIndex(item => item === host);
//
//         if (hostInd !== -1) {
//             url = stands[hostInd].apiUrl;
//         }
//     }
//     return url;
// };
//
// const getMappedMenu = async (host: string, menuIds: string | any[]) => {
//     const apiUrl = await getBackendApiUrl(host);
//     if (Array.isArray(menuIds) && menuIds.length > 0) {
//         // eslint-disable-next-line
//         let query = getIdsQueryFromArray(menuIds);
//         let menu: any[] = [];
//
//         if (query) {
//             await axios
//                 .get(`${apiUrl}public/content/menu${query}`)
//                 .then(response => {
//                     if (Array.isArray(response.data.items)) {
//                         menu = response.data.items;
//                     }
//                 })
//                 .catch(err => console.log(err));
//         }
//         // eslint-disable-next-line
//         let categoryIds: any[] = [];
//         // eslint-disable-next-line
//         let productIds: any[] = [];
//         // eslint-disable-next-line
//         let landingIds: any[] = [];
//         // eslint-disable-next-line
//         let bundleIds: any[] = [];
//         // eslint-disable-next-line
//         let bundleGroupIds: any[] = [];
//         // eslint-disable-next-line
//         let newsCategoryIds: any[] = [];
//         // eslint-disable-next-line
//         let newsIds: any[] = [];
//         // eslint-disable-next-line
//         let tagsIds: any[] = [];
//         // eslint-disable-next-line
//         let pagesIds: any[] = [];
//         // eslint-disable-next-line
//         let promotionItemIds: any[] = [];
//         // eslint-disable-next-line
//         // @ts-ignore
//         const mapList = (list: any[]) => {
//             return Array.isArray(list)
//                 ? list.map(item => {
//                       item = JSON.parse(JSON.stringify(item));
//                       if (item.componentName === 'catalog') {
//                           if (
//                               ((item.params || {}).entity || {}).type ===
//                               'products'
//                           ) {
//                               productIds.push(item.params.entity.offerID);
//                           }
//                           if (
//                               ((item.params || {}).entity || {}).type ===
//                               'categories'
//                           ) {
//                               categoryIds.push(item.params.entity.id);
//                           }
//                           if (
//                               ((item.params || {}).entity || {}).type ===
//                               'landings'
//                           ) {
//                               landingIds.push(item.params.entity.id);
//                           }
//                       }
//
//                       if (item.componentName === 'bundle') {
//                           if (
//                               ((item.params || {}).entity || {}).type ===
//                               'bundles'
//                           ) {
//                               bundleIds.push(item.params.entity.id);
//                           }
//                           if (
//                               ((item.params || {}).entity || {}).type ===
//                               'bundleGroups'
//                           ) {
//                               bundleGroupIds.push(item.params.entity.id);
//                           }
//                       }
//
//                       if (item.componentName === 'news') {
//                           if (
//                               ((item.params || {}).entity || {}).type === 'news'
//                           ) {
//                               newsIds.push(item.params.entity.id);
//                           }
//                           if (
//                               ((item.params || {}).entity || {}).type ===
//                               'newsCategories'
//                           ) {
//                               newsCategoryIds.push(item.params.entity.id);
//                           }
//                           if (
//                               ((item.params || {}).entity || {}).type === 'tags'
//                           ) {
//                               tagsIds.push(item.params.entity.id);
//                           }
//                       }
//
//                       if (item.componentName === 'pages') {
//                           if (
//                               ((item.params || {}).entity || {}).type ===
//                               'pages'
//                           ) {
//                               pagesIds.push(item.params.entity.id);
//                           }
//                       }
//
//                       if (item.componentName === 'promotions') {
//                           if (
//                               ((item.params || {}).entity || {}).type ===
//                               'promotionItem'
//                           ) {
//                               promotionItemIds.push(item.params.entity.id);
//                           }
//                       }
//
//                       return {
//                           id: (item || {}).id || null,
//                           status: (item || {}).status || false,
//                           list: mapList(item.list),
//                           componentName: (item || {}).componentName || null,
//                           params: {
//                               image: ((item || {}).params || {}).image || null,
//                               text: ((item || {}).params || {}).text || null,
//                               url: ((item || {}).params || {}).url || null,
//                               color: ((item || {}).params || {}).color || '',
//                               activeColor:
//                                   ((item || {}).params || {}).activeColor || '',
//                               targetBlank:
//                                   typeof ((item || {}).params || {})
//                                       .targetBlank === 'boolean'
//                                       ? item.params.targetBlank
//                                       : false,
//                               entity: {
//                                   type:
//                                       (((item || {}).params || {}).entity || {})
//                                           .type || null,
//                                   parentId:
//                                       (((item || {}).params || {}).entity || {})
//                                           .parentId || null,
//                                   id:
//                                       (((item || {}).params || {}).entity || {})
//                                           .id || null,
//                                   offerID:
//                                       (((item || {}).params || {}).entity || {})
//                                           .offerID || null,
//                                   name:
//                                       (((item || {}).params || {}).entity || {})
//                                           .name || null,
//                               },
//                               visibleQuantity: ((item || {}).params || {})
//                                   .visibleQuantity
//                                   ? {
//                                         desktopVisibleQuantity:
//                                             (
//                                                 ((item || {}).params || {})
//                                                     .visibleQuantity || {}
//                                             ).desktopVisibleQuantity || null,
//                                         tabletVisibleQuantity:
//                                             (
//                                                 ((item || {}).params || {})
//                                                     .visibleQuantity || {}
//                                             ).tabletVisibleQuantity || null,
//                                         mobileVisibleQuantity:
//                                             (
//                                                 ((item || {}).params || {})
//                                                     .visibleQuantity || {}
//                                             ).mobileVisibleQuantity || null,
//                                     }
//                                   : {
//                                         desktopVisibleQuantity: null,
//                                         tabletVisibleQuantity: null,
//                                         mobileVisibleQuantity: null,
//                                     },
//                           },
//                       };
//                   })
//                 : null;
//         };
//
//         menu = menu.map(m => {
//             m = JSON.parse(JSON.stringify(m));
//             return {
//                 id: (m || {}).id || null,
//                 name: (m || {}).name || null,
//                 status: (m || {}).status || false,
//                 params: {
//                     color: ((m || {}).params || {}).color ? m.params.color : '',
//                     activeColor: ((m || {}).params || {}).activeColor
//                         ? m.params.activeColor
//                         : '',
//                     visibleQuantity: ((m || {}).params || {}).visibleQuantity
//                         ? {
//                               desktopVisibleQuantity:
//                                   (
//                                       ((m || {}).params || {})
//                                           .visibleQuantity || {}
//                                   ).desktopVisibleQuantity || null,
//                               tabletVisibleQuantity:
//                                   (
//                                       ((m || {}).params || {})
//                                           .visibleQuantity || {}
//                                   ).tabletVisibleQuantity || null,
//                               mobileVisibleQuantity:
//                                   (
//                                       ((m || {}).params || {})
//                                           .visibleQuantity || {}
//                                   ).mobileVisibleQuantity || null,
//                           }
//                         : {
//                               desktopVisibleQuantity: null,
//                               tabletVisibleQuantity: null,
//                               mobileVisibleQuantity: null,
//                           },
//                 },
//                 list: mapList((m || {}).list || []),
//             };
//         });
//
//         const uniqArrays = (arr: any[]) => {
//             if (Array.isArray(arr)) {
//                 return arr.filter((v, i, a) => {
//                     return a.findIndex(item => item === v) === i;
//                 });
//             }
//
//             return [];
//         };
//
//         const dataStructure = {
//             catalog: {
//                 categories: uniqArrays(categoryIds),
//                 products: uniqArrays(productIds),
//                 landings: uniqArrays(landingIds),
//             },
//             bundle: {
//                 bundles: uniqArrays(bundleIds),
//                 bundleGroups: uniqArrays(bundleGroupIds),
//             },
//             news: {
//                 newsCategories: uniqArrays(newsCategoryIds),
//                 news: uniqArrays(newsIds),
//                 tags: uniqArrays(tagsIds),
//             },
//             pages: {
//                 pages: uniqArrays(pagesIds),
//             },
//             promotions: {
//                 promotionItem: uniqArrays(promotionItemIds),
//             },
//         };
//
//         const promiseList = [];
//         const getCategories = async () => {
//             const query = getIdsQueryFromArray(categoryIds);
//
//             if (query) {
//                 await axios
//                     .get(
//                         `${apiUrl}public/shop/categories${query}&limit=${categoryIds.length}`
//                     )
//                     .then(response => {
//                         if (
//                             Array.isArray(((response || {}).data || {}).items)
//                         ) {
//                             dataStructure.catalog.categories =
//                                 response.data.items;
//                         }
//                     })
//                     .catch(err => console.log(err));
//             }
//         };
//         promiseList.push(getCategories());
//
//         const getProducts = async () => {
//             const query = getIdsQueryFromArray(productIds, 'offerId');
//
//             if (query) {
//                 await axios
//                     .get(
//                         `${apiUrl}public/shop/products${query}&limit=${productIds.length}`
//                     )
//                     .then(response => {
//                         if (
//                             Array.isArray(((response || {}).data || {}).items)
//                         ) {
//                             dataStructure.catalog.products =
//                                 response.data.items.map(
//                                     (i: { currentOffer: { id: any } }) => {
//                                         // eslint-disable-next-line
//                                         // @ts-ignore
//                                         const offerIds = Array.from(
//                                             // @ts-ignore
//                                             (i || {}).offers,
//                                             // @ts-ignore
//                                             offer => offer.id
//                                         );
//                                         let matches = false;
//                                         offerIds.forEach(item => {
//                                             if (matches === false) {
//                                                 if (
//                                                     dataStructure.catalog.products.includes(
//                                                         item
//                                                     )
//                                                 ) {
//                                                     matches = true;
//                                                     i.currentOffer.id =
//                                                         JSON.parse(
//                                                             JSON.stringify(item)
//                                                         );
//                                                 }
//                                             }
//                                         });
//
//                                         return i;
//                                     }
//                                 );
//                         }
//                     })
//                     .catch(err => console.log(err));
//             }
//         };
//         promiseList.push(getProducts());
//
//         const getLandings = async () => {
//             const query = getIdsQueryFromArray(landingIds);
//
//             if (query) {
//                 await axios
//                     .get(
//                         `${apiUrl}public/shop/landings${query}&limit=${landingIds.length}`
//                     )
//                     .then(response => {
//                         if (
//                             Array.isArray(((response || {}).data || {}).items)
//                         ) {
//                             dataStructure.catalog.landings =
//                                 response.data.items;
//                         }
//                     })
//                     .catch(err => console.log(err));
//             }
//         };
//         promiseList.push(getLandings());
//
//         const getBundles = async () => {
//             const query = getIdsQueryFromArray(bundleIds);
//
//             if (query) {
//                 await axios
//                     .get(
//                         `${apiUrl}public/shop/bundles${query}&limit=${bundleIds.length}`
//                     )
//                     .then(response => {
//                         if (
//                             Array.isArray(((response || {}).data || {}).items)
//                         ) {
//                             dataStructure.bundle.bundles = response.data.items;
//                         }
//                     })
//                     .catch(err => console.log(err));
//             }
//         };
//         promiseList.push(getBundles());
//
//         const getBundleGroups = async () => {
//             const query = getIdsQueryFromArray(bundleGroupIds);
//
//             if (query) {
//                 await axios
//                     .get(
//                         `${apiUrl}public/shop/bundleGroups${query}&limit=${bundleGroupIds.length}`
//                     )
//                     .then(response => {
//                         if (
//                             Array.isArray(((response || {}).data || {}).items)
//                         ) {
//                             dataStructure.bundle.bundleGroups =
//                                 response.data.items;
//                         }
//                     })
//                     .catch(err => console.log(err));
//             }
//         };
//         promiseList.push(getBundleGroups());
//
//         const getNewsCategories = async () => {
//             const query = getIdsQueryFromArray(newsCategoryIds);
//
//             if (query) {
//                 await axios
//                     .get(
//                         `${apiUrl}public/content/newsCategories${query}&limit=${newsCategoryIds.length}`
//                     )
//                     .then(response => {
//                         if (
//                             Array.isArray(((response || {}).data || {}).items)
//                         ) {
//                             dataStructure.news.newsCategories =
//                                 response.data.items;
//                         }
//                     })
//                     .catch(err => console.log(err));
//             }
//         };
//         promiseList.push(getNewsCategories());
//
//         const getNews = async () => {
//             const query = getIdsQueryFromArray(newsIds);
//
//             if (query) {
//                 await axios
//                     .get(
//                         `${apiUrl}public/content/news${query}&limit=${newsIds.length}`
//                     )
//                     .then(response => {
//                         if (
//                             Array.isArray(((response || {}).data || {}).items)
//                         ) {
//                             dataStructure.news.news = response.data.items;
//                         }
//                     })
//                     .catch(err => console.log(err));
//             }
//         };
//         promiseList.push(getNews());
//
//         const getTags = async () => {
//             const query = getIdsQueryFromArray(tagsIds);
//
//             if (query) {
//                 await axios
//                     .get(
//                         `${apiUrl}public/content/newsTags${query}&limit=${tagsIds.length}`
//                     )
//                     .then(response => {
//                         if (
//                             Array.isArray(((response || {}).data || {}).items)
//                         ) {
//                             dataStructure.news.tags = response.data.items;
//                         }
//                     })
//                     .catch(err => console.log(err));
//             }
//         };
//         promiseList.push(getTags());
//
//         const getPromotionItems = async () => {
//             const query = getIdsQueryFromArray(promotionItemIds);
//
//             if (query) {
//                 await axios
//                     .get(
//                         `${apiUrl}public/content/promotions${query}&limit=${promotionItemIds.length}`
//                     )
//                     .then(response => {
//                         if (
//                             Array.isArray(((response || {}).data || {}).items)
//                         ) {
//                             dataStructure.promotions.promotionItem =
//                                 response.data.items;
//                         }
//                     })
//                     .catch(err => console.log(err));
//             }
//         };
//         promiseList.push(getPromotionItems());
//
//         const getPages = async () => {
//             const query = getIdsQueryFromArray(pagesIds);
//
//             if (query) {
//                 await axios
//                     .get(
//                         `${apiUrl}public/content/pages${query}&limit=${pagesIds.length}`
//                     )
//                     .then(response => {
//                         if (
//                             Array.isArray(((response || {}).data || {}).items)
//                         ) {
//                             dataStructure.pages.pages = response.data.items;
//                         }
//                     })
//                     .catch(err => console.log(err));
//             }
//         };
//         promiseList.push(getPages());
//
//         await Promise.all(promiseList).catch(err => console.log(err));
//         // eslint-disable-next-line
//         // @ts-ignore
//         const recursiveUpdateURL = (item: {
//             params: {
//                 url: string;
//                 entity: { offerID: null | undefined; id: any; parentId: any };
//             };
//             componentName: string;
//             status: boolean;
//             list: any[];
//         }) => {
//             if (item) {
//                 item = JSON.parse(JSON.stringify(item));
//             }
//             let url = item.params.url || '';
//
//             const isCurrentPathAllowed = (path: {
//                 length: any;
//                 filter: (arg0: (i: any) => boolean) => {
//                     (): any;
//                     new (): any;
//                     length: any;
//                 };
//             }) => {
//                 if (Array.isArray(path)) {
//                     const currentCategoryPathLength = path.length;
//                     const filteredLength = path.filter(
//                         i => i.status === true
//                     ).length;
//
//                     return filteredLength === currentCategoryPathLength;
//                 }
//                 return false;
//             };
//
//             if (item.componentName === 'catalog') {
//                 // eslint-disable-next-line
//                 // @ts-ignore
//                 if (
//                     (((item || {}).params || {}).entity || {}).type ===
//                     'products'
//                 ) {
//                     const clone = dataStructure.catalog.products.find(
//                         i => i.currentOffer.id === item.params.entity.offerID
//                     );
//                     if (
//                         Array.isArray((clone || {}).categoryPath) &&
//                         isCurrentPathAllowed(clone.categoryPath)
//                     ) {
//                         url = buildProductLink(
//                             clone,
//                             clone.categoryPath,
//                             item.params.entity.offerID
//                         );
//                         item.status =
//                             typeof item.status === 'boolean'
//                                 ? item.status
//                                 : true;
//                     } else {
//                         item.status = false;
//                     }
//                 }
//                 // eslint-disable-next-line
//                 // @ts-ignore
//                 if (
//                     (((item || {}).params || {}).entity || {}).type ===
//                     'categories'
//                 ) {
//                     let clone = dataStructure.catalog.categories.find(
//                         i => i.id === item.params.entity.id
//                     );
//                     if (
//                         Array.isArray((clone || {}).categoryPath) &&
//                         isCurrentPathAllowed(clone.categoryPath)
//                     ) {
//                         clone = JSON.parse(JSON.stringify(clone));
//                         url = buildCategoryLink(clone.categoryPath);
//                         item.status =
//                             typeof item.status === 'boolean'
//                                 ? item.status
//                                 : true;
//                     } else {
//                         item.status = false;
//                     }
//                 }
//                 // eslint-disable-next-line
//                 // @ts-ignore
//                 if (
//                     (((item || {}).params || {}).entity || {}).type ===
//                     'landings'
//                 ) {
//                     let clone = dataStructure.catalog.landings.find(
//                         i => i.id === item.params.entity.id
//                     );
//                     if (
//                         Array.isArray((clone || {}).categoryPath) &&
//                         isCurrentPathAllowed(clone.categoryPath)
//                     ) {
//                         clone = JSON.parse(JSON.stringify(clone));
//                         url = buildLandingLink(clone, clone.categoryPath);
//                         item.status =
//                             typeof item.status === 'boolean'
//                                 ? item.status
//                                 : true;
//                     } else {
//                         item.status = false;
//                     }
//                 }
//             }
//
//             if (item.componentName === 'bundle') {
//                 // eslint-disable-next-line
//                 // @ts-ignore
//                 if (
//                     (((item || {}).params || {}).entity || {}).type ===
//                     'bundles'
//                 ) {
//                     const clone = dataStructure.bundle.bundles.find(
//                         i => i.id === item.params.entity.id
//                     );
//                     if (Array.isArray((clone || {}).groups)) {
//                         let group =
//                             clone.groups.find(
//                                 (i: { id: any }) =>
//                                     i.id === item.params.entity.parentId
//                             ) || clone.groups[0];
//                         if (group) {
//                             group = JSON.parse(JSON.stringify(group));
//                             url = buildBundleLink(clone, group.slug);
//                             item.status =
//                                 typeof item.status === 'boolean'
//                                     ? item.status
//                                     : true;
//                         } else {
//                             item.status = false;
//                         }
//                     } else {
//                         item.status = false;
//                     }
//                 }
//                 // eslint-disable-next-line
//                 // @ts-ignore
//                 if (
//                     (((item || {}).params || {}).entity || {}).type ===
//                     'bundleGroups'
//                 ) {
//                     let clone = dataStructure.bundle.bundleGroups.find(
//                         i => i.id === item.params.entity.id
//                     );
//                     if (clone) {
//                         clone = JSON.parse(JSON.stringify(clone));
//                         url = buildBundleGroupLink(clone.slug);
//                         item.status =
//                             typeof item.status === 'boolean'
//                                 ? item.status
//                                 : true;
//                     } else {
//                         item.status = false;
//                     }
//                 }
//             }
//
//             if (item.componentName === 'news') {
//                 // eslint-disable-next-line
//                 // @ts-ignore
//                 if (
//                     (((item || {}).params || {}).entity || {}).type === 'news'
//                 ) {
//                     const clone = dataStructure.news.news.find(
//                         i => i.id === item.params.entity.id
//                     );
//                     if (clone) {
//                         let category =
//                             clone.categories.find(
//                                 (i: { id: any }) =>
//                                     i.id === item.params.entity.parentId
//                             ) || clone.categories[0];
//                         if (category && category.status === true) {
//                             category = JSON.parse(JSON.stringify(category));
//                             // eslint-disable-next-line
//                             // @ts-ignore
//                             url = buildNewsLink(category.slug, clone.slug);
//                             item.status =
//                                 typeof item.status === 'boolean'
//                                     ? item.status
//                                     : true;
//                         } else {
//                             item.status = false;
//                         }
//                     } else {
//                         item.status = false;
//                     }
//                 }
//                 // eslint-disable-next-line
//                 // @ts-ignore
//                 if (
//                     (((item || {}).params || {}).entity || {}).type ===
//                     'newsCategories'
//                 ) {
//                     let clone = dataStructure.news.newsCategories.find(
//                         i => i.id === item.params.entity.id
//                     );
//                     if (clone) {
//                         clone = JSON.parse(JSON.stringify(clone));
//                         url = buildNewsCategoryLink(clone.slug);
//                         item.status =
//                             typeof item.status === 'boolean'
//                                 ? item.status
//                                 : true;
//                     } else {
//                         item.status = false;
//                     }
//                 }
//                 // eslint-disable-next-line
//                 // @ts-ignore
//                 if (
//                     (((item || {}).params || {}).entity || {}).type === 'tags'
//                 ) {
//                     const clone = dataStructure.news.tags.find(
//                         i => i.id === item.params.entity.id
//                     );
//                     if (clone) {
//                         let category =
//                             clone.categories.find(
//                                 (i: { id: any }) =>
//                                     i.id === item.params.entity.parentId
//                             ) || clone.categories[0];
//                         if (category && category.status === true) {
//                             category = JSON.parse(JSON.stringify(category));
//                             // eslint-disable-next-line
//                             // @ts-ignore
//                             url = buildNewsTagLink(category.slug, clone.id);
//                             item.status =
//                                 typeof item.status === 'boolean'
//                                     ? item.status
//                                     : true;
//                         } else {
//                             item.status = false;
//                         }
//                     } else {
//                         item.status = false;
//                     }
//                 }
//             }
//
//             if (item.componentName === 'pages') {
//                 // eslint-disable-next-line
//                 // @ts-ignore
//                 if (
//                     (((item || {}).params || {}).entity || {}).type === 'pages'
//                 ) {
//                     let clone = dataStructure.pages.pages.find(
//                         i => i.id === item.params.entity.id
//                     );
//                     if (clone) {
//                         clone = JSON.parse(JSON.stringify(clone));
//                         url = buildPagesLink(clone.slug);
//                         item.status =
//                             typeof item.status === 'boolean'
//                                 ? item.status
//                                 : true;
//                     } else {
//                         item.status = false;
//                     }
//                 }
//             }
//
//             if (item.componentName === 'promotions') {
//                 // eslint-disable-next-line
//                 // @ts-ignore
//                 if (
//                     (((item || {}).params || {}).entity || {}).type ===
//                     'promotionItem'
//                 ) {
//                     let clone = dataStructure.promotions.promotionItem.find(
//                         i => i.id === item.params.entity.id
//                     );
//                     if (clone) {
//                         clone = JSON.parse(JSON.stringify(clone));
//                         url = buildPromotionLink(clone.slug);
//                         item.status =
//                             typeof item.status === 'boolean'
//                                 ? item.status
//                                 : true;
//                     } else {
//                         item.status = false;
//                     }
//                     // eslint-disable-next-line
//                     // @ts-ignore
//                 } else if (
//                     (((item || {}).params || {}).entity || {}).type ===
//                     'promotionList'
//                 ) {
//                     item.status = true;
//                     url = '/promotions';
//                 }
//             }
//
//             return {
//                 ...item,
//                 params: {
//                     ...item.params,
//                     url: url,
//                 },
//                 list:
//                     ((item || {}).list || []).map(recursiveUpdateURL).length > 0
//                         ? item.list.map(recursiveUpdateURL)
//                         : null,
//             };
//         };
//
//         return menu.map(item => {
//             return {
//                 ...item,
//                 list: ((item || {}).list || []).map(recursiveUpdateURL) || null,
//             };
//         });
//     }
// };
//
// const getIdsQueryFromArray = (array: any[], key = 'id') => {
//     if (Array.isArray(array) && array.length > 0) {
//         let query = '';
//
//         array.forEach((item, index) => {
//             query += `${index === 0 ? '?' : '&'}${key}[]=${item}`;
//         });
//
//         return query;
//     }
//
//     return '';
// };
//
// export default {
//     buildProductLink,
//     buildCategoryLink,
//     buildLandingLink,
//     buildBundleLink,
//     buildBundleGroupLink,
//     buildPagesLink,
//     buildPromotionLink,
//     buildAllPromotionsLink,
//     buildAllNewsLink,
//     buildNewsCategoryLink,
//     buildNewsLink,
//     buildNewsTagLink,
//     getMappedMenu,
// };
