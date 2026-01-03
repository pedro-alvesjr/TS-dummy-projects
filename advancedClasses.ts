class Profile {
    constructor(private firstName: string, private lastName: string) {}

    private _age: number = 0

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set age(a: number) {
        if (a < 0) {
            throw new Error('Invalid age.');
        }

        this._age = a;
    }
}

const profileOne = new Profile('Pedro', 'Alves');

profileOne.age = 29;

class Employee extends Profile {
    constructor (firstName: string, 
               lastName: string, 
                public jobTitle: string) {
        super(firstName, lastName)
    }
}
