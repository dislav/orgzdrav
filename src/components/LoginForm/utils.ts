const errors: {
    [key: string]: string;
} = {
    invalid_username: 'Неверное имя пользователя',
    incorrect_password: 'Неверный пароль'
};

export const getError = (code: string) => errors[code];