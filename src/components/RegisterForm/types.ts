import { RegisterUserInput } from '@graphql';

export interface RegisterUserInputProps extends RegisterUserInput {
    confirmPassword: string;
    accept: boolean;
}
