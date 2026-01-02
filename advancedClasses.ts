class Profile {
    constructor(private firstName: string, private lastName: string, private age: number) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
