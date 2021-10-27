import { Maybe } from './graphql';

// Fragments
export type { SimpleProductProps, ProductOption } from './fragments/simpleProduct';

// Queries
export { GetPartnersQuery } from './queries/partners';
export type { GetPartnersQueryProps, PartnerProps } from './queries/partners';

export { GetProductCategoriesQuery } from './queries/productCategories';
export type {
    GetProductCategoriesQueryProps,
    ProductCategoryProps,
} from './queries/productCategories';

export { GetReviewsQuery } from './queries/reviews';
export type {
    GetReviewsQueryProps,
    PeopleReviewProps,
} from './queries/reviews';

export { GetProductsQuery } from './queries/products';
export type { GetProductsQueryProps } from './queries/products';

export { GetProductQuery } from './queries/product';
export type { GetProductQueryProps } from './queries/product';

// Global
export type WithFieldGroupName<T = {}> = T & { fieldGroupName: string };

export type CommonComponentsProps = {
    title?: Maybe<string>;
    text?: string;
};
