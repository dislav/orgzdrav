import { gql } from '@apollo/client';

export const GetPaymentGatewaysQuery = gql`
    query GetPaymentGateways {
        paymentGateways {
            nodes {
                id
                title
                description
            }
        }
    }
`;

export interface PaymentGateway {
    id: string;
    title: string;
    description: string;
}

export interface GetPaymentGatewaysQueryProps {
    partners: {
        nodes: PaymentGateway[];
    };
}
