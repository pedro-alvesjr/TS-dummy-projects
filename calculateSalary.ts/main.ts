type salaryInput = {
    baseSalary: number,
    duration: number,
    increasePercentage: number,
    inflation: number
}

type printSalaryOutput = {
    realSalary: number,
    salaryAfterInflation: number,
    year: number,
}

function calculateIncrease (salaryInput: salaryInput): printSalaryOutput[] | string {
    let { baseSalary, duration, increasePercentage, inflation } = salaryInput

    if (baseSalary <= 0) {
        return 'Invalid base salary input.'
    }

    if (duration <= 0) {
        return 'Invalid duration input.'
    }

    if (increasePercentage <= 0) {
        return 'Invalid increase percentage input.'
    }

    let yearInflation: number
    let actualSalary: number
    let year: number
    let finalResult = []

    for (let i = 0; i < duration; i++) {
        baseSalary = baseSalary * increasePercentage;
        yearInflation = 1 + (inflation / 100)
        actualSalary = baseSalary / yearInflation;
        year = i + 1;

        finalResult.push([baseSalary, actualSalary, year])
    }
}