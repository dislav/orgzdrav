import { gql } from '@apollo/client';
import {
    DownloadableItemFragment,
    DownloadableItemProps,
} from '@graphql/fragments/downloadableItem';
import {
    SimpleProductFragment,
    SimpleProductProps,
} from '@graphql/fragments/simpleProduct';

export const OrderFragment = gql`
    ${DownloadableItemFragment}
    ${SimpleProductFragment}
    fragment OrderFragment on Order {
        id
        databaseId
        status
        total
        discountTotal
        hasBillingAddress
        needsPayment
        needsProcessing
        paymentMethod
        paymentMethodTitle
        date
        dateCompleted
        datePaid
        isDownloadPermitted
        hasDownloadableItem
        downloadableItems {
            nodes {
                ...DownloadableItemFragment
            }
        }
        lineItems {
            nodes {
                orderId
                databaseId
                productId
                quantity
                product {
                    ...SimpleProductFragment
                }
            }
        }
        billing {
            firstName
            lastName
            company
            city
            email
            phone
        }
        customer {
            jwtAuthToken
            sessionToken
        }
    }
`;

export enum OrderStatusEnum {
    CANCELLED = 'CANCELLED',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    ON_HOLD = 'ON_HOLD',
    PENDING = 'PENDING',
    PROCESSING = 'PROCESSING',
    REFUNDED = 'REFUNDED',
}

export interface BillingProps {
    firstName: string;
    lastName: string;
    company: string;
    city: string;
    email: string;
    phone: string;
}

export interface OrderProps {
    id: string;
    databaseId: number;
    status: OrderStatusEnum;
    total: string;
    discountTotal: string;
    hasBillingAddress: boolean;
    needsPayment: boolean;
    needsProcessing: boolean;
    paymentMethod: string;
    paymentMethodTitle: string;
    date: string;
    dateCompleted: string;
    datePaid: string;
    isDownloadPermitted: boolean;
    hasDownloadableItem: boolean;
    downloadableItems: {
        nodes: DownloadableItemProps[];
    };
    lineItems: {
        nodes: {
            orderId: number;
            databaseId: number;
            productId: number;
            quantity: number;
            product: SimpleProductProps;
        }[];
    };
    billing: BillingProps;
    customer: {
        jwtAuthToken: string;
        sessionToken: string;
    };
}
