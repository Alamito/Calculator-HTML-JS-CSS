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

buttonOne.addEventListener('click', () => {
    //firstNumber += '1';
    //console.log(firstNumber);
    if (operator.length === 0) {
        firstNumber = storeNumber(firstNumber, '1');
        printResult(firstNumber);
    } else {
        secondNumber = storeNumber(secondNumber, '1');
        printResult(secondNumber);
    }
})
buttonTwo.addEventListener('click', () => {
    if (operator.length === 0) {
        firstNumber = storeNumber(firstNumber, '2');
        printResult(firstNumber);
    } else {
        secondNumber = storeNumber(secondNumber, '2');
        printResult(secondNumber);
    }
})
buttonThree.addEventListener('click', () => {
    if (operator.length === 0) {
        firstNumber = storeNumber(firstNumber, '3');
        printResult(firstNumber);
    } else {
        secondNumber = storeNumber(secondNumber, '3');
        printResult(secondNumber);
    }
})
buttonFour.addEventListener('click', () => {
    if (operator.length === 0) {
        firstNumber = storeNumber(firstNumber, '4');
        printResult(firstNumber);
    } else {
        secondNumber = storeNumber(secondNumber, '4');
        printResult(secondNumber);
    }
})
buttonFive.addEventListener('click', () => {
    if (operator.length === 0) {
        firstNumber = storeNumber(firstNumber, '5');
        printResult(firstNumber);
    } else {
        secondNumber = storeNumber(secondNumber, '5');
        printResult(secondNumber);
    }
})
buttonSix.addEventListener('click', () => {
    if (operator.length === 0) {
        firstNumber = storeNumber(firstNumber, '6');
        printResult(firstNumber);
    } else {
        secondNumber = storeNumber(secondNumber, '6');
        printResult(secondNumber);
    }
})
buttonSeven.addEventListener('click', () => {
    if (operator.length === 0) {
        firstNumber = storeNumber(firstNumber, '7');
        printResult(firstNumber);
    } else {
        secondNumber = storeNumber(secondNumber, '7');
        printResult(secondNumber);
    }
})
buttonEight.addEventListener('click', () => {
    if (operator.length === 0) {
        firstNumber = storeNumber(firstNumber, '8');
        printResult(firstNumber);
    } else {
        secondNumber = storeNumber(secondNumber, '8');
        printResult(secondNumber);
    }
})
buttonNine.addEventListener('click', () => {
    if (operator.length === 0) {
        firstNumber = storeNumber(firstNumber, '9');
        printResult(firstNumber);
    } else {
        secondNumber = storeNumber(secondNumber, '9');
        printResult(secondNumber);
    }
})
buttonSum.addEventListener('click', () => {
    operator = '+'
    printResult('');
    //console.log(firstNumber)
})
buttonSubtraction.addEventListener('click', () => {
    operator = '-'
    printResult('');
    //console.log(firstNumber)
})
buttonProduct.addEventListener('click', () => {
    operator = '*'
    printResult('');
    //console.log(firstNumber)
})
buttonDivision.addEventListener('click', () => {
    operator = '/'
    printResult('');
    //console.log(firstNumber)
})
buttonResult.addEventListener('click', () => {
    console.log(firstNumber);
    console.log(secondNumber);

    console.log(calcResult(firstNumber, secondNumber));
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
    //console.log(number);
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
    document.querySelector('.printNumber').value = number;
}





