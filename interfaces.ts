interface Authenticatable {
    email: string;
    password: string;

    login(): void;
    logout(): void;
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