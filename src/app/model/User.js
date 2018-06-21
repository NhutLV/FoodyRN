export const USER_SCHEMA = 'User';

class User {
    Email: string;
    Password: string;
    DisplayName: string;

    toString() {
        return this.Password;
    }
}

User.schema = {
    name: USER_SCHEMA,
    primaryKey: 'Email',
    properties: {
        Email: 'string',
        DisplayName: 'string',
        Password: 'string'
    }
};

export default User;