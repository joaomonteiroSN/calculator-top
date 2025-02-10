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
            sum(number, numberTwo)
            break;
        case '-':
            sub(number,numberTwo)
            break;
        case '*':
            multi(number,numberTwo)
            break;
        case '/':
            divide(number,numberTwo)
            break;
        default:
            console.log(operator)
            break;
    }
}

const test = (input) =>  console.log(typeof input)