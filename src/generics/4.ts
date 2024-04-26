type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
}

function createOrUpdateUser(initialValues: Partial<User>): User {
    return {
        name: initialValues.name || '',
        surname: initialValues.surname || '',
        email: initialValues.email || '',
        password: initialValues.password || '',
    };
}

createOrUpdateUser({
    email: 'user@mail.com',
    password: 'password123' 
});