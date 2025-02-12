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

//operators
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const power = document.querySelector('#power');
const divider = document.querySelector('#divider');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');

const buttonNumbers = [
    one, two, three, four, five, six, seven, eight, nine, zero
] 

const display = document.querySelector('.display')
display.innerHTML = '';


const displayUpdate = (value) => {
    display.innerHTML += `${value}`
    //calculo pode ser feito usando vetor ou parsefloat ao final
    number += value
    console.log(number)
}

const clearDisplay = () => {
    display.innerHTML = ''
}

// number bunttons diplayed logic
buttonNumbers.map(button => button.addEventListener("click", () => displayUpdate(button.value)))


//math logic -----
let number = ''
let operator = ''
let numberTwo = ''

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
