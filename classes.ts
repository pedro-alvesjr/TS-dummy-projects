class User {
    constructor(public name: string, public age: number) {}

    greet() {
        console.log('Hello there! I am ' + this.name)
    }
};

const pedro = new User('Pedro', 29);
const kath = new User('Kath', 27);

console.log(pedro, kath);