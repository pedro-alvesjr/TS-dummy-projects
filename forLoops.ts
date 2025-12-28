const arrayOne = [1, 2, 3, 4, 5]
let newArray: number[] = []

for (const num of arrayOne) {
    const newNum = num * 2
    newArray.push(newNum)
}

console.log(newArray)

let count: number = 0

for (const num of arrayOne) {
    if (num % 2 == 0) {
        count += 1
    }
}

console.log(count)

let doubleArray: number[] = []

for (const num of arrayOne) {
    doubleArray.push(num * 2)
}

console.log(doubleArray)

let biggestNumber = -Infinity

for (const num of arrayOne) {
    if (num > biggestNumber) {
        biggestNumber = num
    }
};

const myString = 'adabra cadabra'
count = 0

for (const letter of myString) {
    if (letter === 'a') {
        count += 1
    }
};

function tabuada (num: number) {
    let num2 = 1
    while (num2 <= 10) {
        const result = num * num2
        console.log(`${num} x ${num2} = ${result}`)
        num2 += 1
    }
};

