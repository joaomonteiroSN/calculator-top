//html logic


//numbers
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');

const buttonNumbers = [
    one, two, three, four, five, six, seven, eight, nine, zero
]


//operators
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const power = document.querySelector('#power');
const divider = document.querySelector('#divider');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');

const buttonOperators = [
    plus, minus, power, divider
]

const display = document.querySelector('.display')
display.innerHTML = '';

//math logic -----
let number = 0
let operator = ''
let numberTwo = 0
let temp = ''

const displayUpdate = (value) => {
    display.innerHTML += `${value}`
    //calculo pode ser feito usando vetor ou parsefloat ao final
    temp += value
}

// number buttons displayed logic
buttonNumbers.map(button => button.addEventListener("click", () => displayUpdate(button.value)))
buttonOperators.map(button => button.addEventListener("click", () => {
    console.log("deu certo")
    number = parseFloat(temp) 
    operator = button.value
    console.log(number)
    console.log(operator)
    temp = ''
    clearDisplay()
}))

equal.addEventListener("click", () => {
    numberTwo = parseFloat(temp)
    console.log(numberTwo)
    //call operate function

    console.log(operate(number, operator, numberTwo))
})

const clearDisplay = () => {
    display.innerHTML = ''
}

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

//create showResult function

const operate = (number, operator, numberTwo) => {
    switch (operator) {
        case '+':
            return sum(number, numberTwo)
        case '-':
            return sub(number, numberTwo)
        case '*':
            return multi(number, numberTwo)
        case '/':
            return divide(number, numberTwo)
    }
}
