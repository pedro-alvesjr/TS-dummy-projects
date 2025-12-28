let hobbies: (string | number)[];

hobbies = ['Sports', 3];

let listOfNumbers: [number, number];

listOfNumbers = [2, 3];

let user: {
    name: string,
    age: number | string,
    dateOfBirth: number,
    hobbies: [string, string],
    role: {
        position: string,
        description: string,
    }
};

user = {
    name: 'Pedro',
    age: 29,
    dateOfBirth: 29,
    hobbies: ['reading', 'coding'],
    role: {
        position: 'Developer',
        description: 'He works a lot',
    }
};

let val: {} = ''; // means the type is any but null or undefined

let data: Record<string, string | number>;

data = {
    name: 'Pedro',
    age: 29
};

