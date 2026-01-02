const soma = (a: number, b: number) => a + b;

const pares = (myArray: number[]) => myArray.filter(num => num % 2 === 0);

const capitalLetters = (myArray: string[]) => myArray.map(word => word.toUpperCase());

const countChar = (word: string): number => word.length;