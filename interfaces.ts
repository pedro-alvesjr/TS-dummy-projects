interface Authenticatable {
    email: string;
    password: string;

    login(): void;
    logout(): void;
}

class AuthenticatableUser implements Authenticatable {
    constructor(
        public email: string,
        public password: string
    ) {}

    login() {
        // login logic
    }

    logout() {
        // logout logic
    }
}

let user: Authenticatable = {
    email: 'email@gmail.com',
    password: 'abcd',

    login() {
        // login logic
    },

    logout() {
        // logout logic
    }
}