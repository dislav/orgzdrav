import { RegisterCustomerInput } from '@graphql';

export interface RegisterUserInputProps extends RegisterCustomerInput {
    confirmPassword?: string;
    accept?: boolean;
}
