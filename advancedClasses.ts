class Profile {
    constructor(private firstName: string, private lastName: string) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set age(a: number) {
        if (a < 0) {
            throw new Error('Invalid age.');
        }

        this.age = a;
    }
}

const profileOne = new Profile('Pedro', 'Alves');

profileOne.age = 29;
