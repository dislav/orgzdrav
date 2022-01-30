import { ResetUserPasswordInput } from '@graphql';

export interface ResetPasswordInputs extends ResetUserPasswordInput {
    confirmPassword: string;
}
