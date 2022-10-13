let firstNumber = '';
let secondNumber = '';
let resultNumber = '';
let operator = '';

console.log("Calculator rodano");

buttonOne = document.querySelector('.one');
buttonTwo = document.querySelector('.two');
buttonThree = document.querySelector('.three');
buttonFour = document.querySelector('.four');
buttonFive = document.querySelector('.five');
buttonSix = document.querySelector('.six');
buttonSeven = document.querySelector('.seven');
buttonEight = document.querySelector('.eight');
buttonNine = document.querySelector('.nine');
buttonSum = document.querySelector('.sum');
buttonSubtraction = document.querySelector('.subtraction');
buttonProduct = document.querySelector('.product');
buttonDivision = document.querySelector('.division');
buttonResult = document.querySelector('.buttonResult');
buttonClear = document.querySelector('.buttonClear');
input = document.querySelector('.printNumber');

buttonOne.addEventListener('click', () => {
    storeNumber('1')
})
buttonTwo.addEventListener('click', () => {
    storeNumber('2')
})
buttonThree.addEventListener('click', () => {
    storeNumber('3')
})
buttonFour.addEventListener('click', () => {
    storeNumber('4')
})
buttonFive.addEventListener('click', () => {
    storeNumber('5')
})
buttonSix.addEventListener('click', () => {
    storeNumber('6')
})
buttonSeven.addEventListener('click', () => {
    storeNumber('7')
})
buttonEight.addEventListener('click', () => {
    storeNumber('8')
})
buttonNine.addEventListener('click', () => {
    storeNumber('9')
})
buttonSum.addEventListener('click', () => {
    firstNumber = input.value;
    operator = '+'
    printResult('');
})
buttonSubtraction.addEventListener('click', () => {
    firstNumber = input.value;
    operator = '-'
    printResult('');
})
buttonProduct.addEventListener('click', () => {
    firstNumber = input.value;
    operator = '*'
    printResult('');
})
buttonDivision.addEventListener('click', () => {
    firstNumber = input.value;
    operator = '/'
    printResult('');
})
buttonResult.addEventListener('click', () => {
    secondNumber = input.value;
    firstNumber = calcResult(firstNumber, secondNumber);
    printResult(firstNumber);

    operator = '';
    secondNumber = '';
})
buttonClear.addEventListener('click', () => {
    printResult('');

    firstNumber = '';
    operator = '';
    secondNumber = '';
})

function storeNumber(number, button) {
    number += button;
    return number;
}

function calcResult(firstNumber, secondNumber) {
    switch (operator) {
        case '+':
            firstNumber = parseInt(firstNumber) + parseInt(secondNumber);
            break;
        case '-':
            firstNumber = parseInt(firstNumber) - parseInt(secondNumber);
            break;
        case '*':
            firstNumber = parseInt(firstNumber) * parseInt(secondNumber);
            break;
        case '/':
            firstNumber = parseInt(firstNumber) / parseInt(secondNumber);
            break;
    }   
    return firstNumber;
}

function printResult(number) {
    input.value = number;
}

function storeNumber(number) {
    if (operator.length === 0) {
        input.value += number;
        printResult(input.value);
    } else {
        input.value += number;
        printResult(input.value);
    }
}





