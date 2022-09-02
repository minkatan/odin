// let displayValue = '0';
// let firstOperand = null;
// let secondOperand = null;
// let firstOperator = null;
// let secondOperator = null;
// let result = null;
// const buttons = document.querySelectorAll('button');

// window.addEventListener('keydown', function(e){
//     const key = document.querySelector(`button[data-key='${e.keyCode}']`);
//     key.click();
// });

// function updateDisplay() {
//     const display = document.getElementById('display');
//     display.innerText = displayValue;
//     if(displayValue.length > 9) {
//         display.innerText = displayValue.substring(0, 9);
//     }
// }
  
// updateDisplay();

// function clickButton() {
//     for(let i = 0; i < buttons.length; i++) {
//         buttons[i].addEventListener('click', function() {
//             if(buttons[i].classList.contains('operand')) {
//                 inputOperand(buttons[i].value);
//                 updateDisplay();
//             } else if(buttons[i].classList.contains('operator')) {
//                 inputOperator(buttons[i].value);
//             } else if(buttons[i].classList.contains('equals')) {
//                 inputEquals();
//                 updateDisplay();
//             } else if(buttons[i].classList.contains('decimal')) {
//                 inputDecimal(buttons[i].value);
//                 updateDisplay();
//             } else if(buttons[i].classList.contains('percent')) {
//                 inputPercent(displayValue);
//                 updateDisplay();
//             } else if(buttons[i].classList.contains('sign')) {
//                 inputSign(displayValue);
//                 updateDisplay();
//             } else if(buttons[i].classList.contains('clear'))
//                 clearDisplay();
//                 updateDisplay();
//         }
//     )}
// }

// clickButton();

// function inputOperand(operand) {
//     if(firstOperator === null) {
//         if(displayValue === '0' || displayValue === 0) {
//             //1st click - handles first operand input
//             displayValue = operand;
//         } else if(displayValue === firstOperand) {
//             //starts new operation after inputEquals()
//             displayValue = operand;
//         } else {
//             displayValue += operand;
//         }
//     } else {
//         //3rd/5th click - inputs to secondOperand
//         if(displayValue === firstOperand) {
//             displayValue = operand;
//         } else {
//             displayValue += operand;
//         }
//     }
// }

// function inputOperator(operator) {
//     if(firstOperator != null && secondOperator === null) {
//         //4th click - handles input of second operator
//         secondOperator = operator;
//         secondOperand = displayValue;
//         result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
//         displayValue = roundAccurately(result, 15).toString();
//         firstOperand = displayValue;
//         result = null;
//     } else if(firstOperator != null && secondOperator != null) {
//         //6th click - new secondOperator
//         secondOperand = displayValue;
//         result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
//         secondOperator = operator;
//         displayValue = roundAccurately(result, 15).toString();
//         firstOperand = displayValue;
//         result = null;
//     } else { 
//         //2nd click - handles first operator input
//         firstOperator = operator;
//         firstOperand = displayValue;
//     }
// }

// function inputEquals() {
//     //hitting equals doesn't display undefined before operate()
//     if(firstOperator === null) {
//         displayValue = displayValue;
//     } else if(secondOperator != null) {
//         //handles final result
//         secondOperand = displayValue;
//         result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
//         if(result === 'lmao') {
//             displayValue = 'lmao';
//         } else {
//             displayValue = roundAccurately(result, 15).toString();
//             firstOperand = displayValue;
//             secondOperand = null;
//             firstOperator = null;
//             secondOperator = null;
//             result = null;
//         }
//     } else {
//         //handles first operation
//         secondOperand = displayValue;
//         result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
//         if(result === 'lmao') {
//             displayValue = 'lmao';
//         } else {
//             displayValue = roundAccurately(result, 15).toString();
//             firstOperand = displayValue;
//             secondOperand = null;
//             firstOperator = null;
//             secondOperator = null;
//             result = null;
//         }
//     }
// }

// function inputDecimal(dot) {
//     if(displayValue === firstOperand || displayValue === secondOperand) {
//         displayValue = '0';
//         displayValue += dot;
//     } else if(!displayValue.includes(dot)) {
//         displayValue += dot;
//     } 
// }

// function inputPercent(num) {
//     displayValue = (num/100).toString();
// }

// function inputSign(num) {
//     displayValue = (num * -1).toString();
// }

// function clearDisplay() {
//     displayValue = '0';
//     firstOperand = null;
//     secondOperand = null;
//     firstOperator = null;
//     secondOperator = null;
//     result = null;
// }

// function inputBackspace() {
//     if(firstOperand != null) {
//         firstOperand = null;
//         updateDisplay();
//     }
// }

// function operate(x, y, op) {
//     if(op === '+') {
//         return x + y;
//     } else if(op === '-') {
//         return x - y;
//     } else if(op === '*') {
//         return x * y;
//     } else if(op === '/') {
//         if(y === 0) {
//             return 'lmao';
//         } else {
//         return x / y;
//         }
//     }
// }

// function roundAccurately(num, places) {
//     return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
// }


const buttons = document.querySelectorAll('button')
const screen = document.querySelector('#screen')
const clearBtn = document.querySelector('#clear')
const backspaceBtn = document.querySelector('#backspace')

let buffer = '0'
let runningTotal = 0
let previousOperator;

buttons.forEach((button) => {
    button.addEventListener('click', function(e){
    buttonClick(e.target.innerText)

    })
})

function buttonClick(value){
    if (isNaN(parseInt(value))){
        handleSymbol(value)
    } else {
        handleNumber(value)
    }
    rerender()
}

function handleNumber(value){
    if(buffer === '0'){
        buffer = value
    }else {
        buffer += value
    }
}

function handleSymbol(value){
    switch(value){
        case 'clear':
            buffer = '0'
            runningTotal = 0
            previousOperator = null
            break
        case '=':
            if(previousOperator === null){
                return
            }
            flushOperation(parseInt(buffer))
            previousOperator = null
            buffer = '' + runningTotal
            runningTotal = 0
            break
        case '←':
            if(buffer.length == 1){
                return '0'
            }
            buffer = buffer.substring(0, buffer.length - 1)
            break
        default:
            handleMath(value)
    }
}

function rerender(){
    screen.innerText = buffer
}

function flushOperation(intBuffer){
    if(previousOperator === '+'){
        runningTotal += intBuffer
    }else if (previousOperator === '-'){
        runningTotal -= intBuffer
    }else if (previousOperator === '×'){
        runningTotal *= intBuffer
    } else {
        runningTotal /= intBuffer
    }
}

function handleMath(value){
    const intBuffer = parseInt(buffer)
    if(runningTotal === 0){
        runningTotal = intBuffer
    }else {
        flushOperation(intBuffer)
    }
    previousOperator = value
    console.log(previousOperator, buffer, runningTotal)
    buffer = '0'
}