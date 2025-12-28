function checkNumber (num: number) {
    if (num === 0) {
        return 'Número inserido é 0.'
    } else if (num < 0) {
        return 'Número inserido é negativo.'
    } else {
        return 'Número inserido é positivo.'
    }
};

function checkAge (age: number) {
    if (age < 18) {
        return false
    } else {
        return true
    }
};

function checkGrade (grade: number) {
    if (grade >= 90) {
        return 'A'
    } else if (grade >= 80) {
        return 'B'
    } else if (grade >= 70) {
        return 'C'
    } else if (grade >= 60) {
        return 'D'
    } else {
        return 'E'
    }
};
