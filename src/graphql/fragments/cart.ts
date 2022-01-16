import { gql } from '@apollo/client';
import { SimpleProductFragment, SimpleProductProps } from "@graphql/fragments/simpleProduct"
import { CouponProps } from "@graphql/queries/cart"

export const CartFragment = gql`
    ${SimpleProductFragment}
    fragment CartFragment on Cart {
        isEmpty
        total
        shippingTotal
        contentsTotal
        discountTotal
        appliedCoupons {
            code
            discountAmount
            discountTax
        }
        contents {
            itemCount
            productCount
            nodes {
                key
                total
                quantity
                product {
                    node {
                        ...SimpleProductFragment
                    }
                }
            }
        }
    }
`;

export interface CartProps {
    isEmpty: boolean;
    total: string;
    shippingTotal: string;
    contentsTotal: string;
    discountTotal: string;
    appliedCoupons: CouponProps[];
    contents: {
        itemCount: number;
        productCount: number;
        nodes: {
            key: string;
            quantity: number;
            total: string;
            product: {
                node: SimpleProductProps;
            };
        }[];
    };
}
