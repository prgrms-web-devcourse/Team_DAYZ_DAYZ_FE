export { default as WorkshopPage } from './WorkshopPage';
export { default as FeedListPage } from './FeedListPage';
export { default as ProductsListPage } from './ProductsListPage';
export { default as ReviewListPage } from './ReviewListPage';
export { default as SettingPage } from './SettingPage';
export { default as EditPage } from './EditPage';

const WORKSHOP = 'workshop';
const PRODUCTLIST = 'product-list';
const REVIEWLIST = 'review-list';
const SETTING = 'setting';
const EDIT = 'edit';

export const RoutePath = {
  Workshop: (id: string | number) => `/${WORKSHOP}/${id}`,
  ProductList: (id: string | number) => `/${WORKSHOP}/${id}/${PRODUCTLIST}`,
  ReviewList: (id: string | number) => `/${WORKSHOP}/${id}/${REVIEWLIST}`,
  Setting: (id: string | number) => `/${WORKSHOP}/${id}/${SETTING}`,
  Edit: (id: string | number) => `/${WORKSHOP}/${id}/${EDIT}`,
};
