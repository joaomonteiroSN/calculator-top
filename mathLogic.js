let number
let operator
let numberTwo

const sum = (a, b) => {
    return a + b
}

const sub = (a, b) => {
    return a - b
}

const multi = (a, b) => {
    return a * b
}

const divide = (a, b) => {
    return a / b
}

const operate = (number, operator, numberTwo) => {
    switch (operator) {
        case '+':
            return sum(number, numberTwo)
        case '-':
            return sub(number,numberTwo)
        case '*':
            return multi(number,numberTwo)
        case '/':
            return divide(number,numberTwo)
    }
}
