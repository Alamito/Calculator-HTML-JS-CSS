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
buttonResult = document.querySelector('.result');

buttonOne.addEventListener('click', () => {
    //firstNumber += '1';
    //console.log(firstNumber);
    if (operator.length === 0) {
        firstNumber = storeNumber(firstNumber, '1');
    } else {
        secondNumber = storeNumber(secondNumber, '1');
    }
})
buttonTwo.addEventListener('click', () => {
    if (operator.length === 0) {
        firstNumber = storeNumber(firstNumber, '2');
    } else {
        secondNumber = storeNumber(secondNumber, '2');
    }
})
buttonThree.addEventListener('click', () => {
    if (operator.length === 0) {
        firstNumber = storeNumber(firstNumber, '3');
    } else {
        secondNumber = storeNumber(secondNumber, '3');
    }
})
buttonFour.addEventListener('click', () => {
    if (operator.length === 0) {
        firstNumber = storeNumber(firstNumber, '4');
    } else {
        secondNumber = storeNumber(secondNumber, '4');
    }
})
buttonFive.addEventListener('click', () => {
    if (operator.length === 0) {
        firstNumber = storeNumber(firstNumber, '5');
    } else {
        secondNumber = storeNumber(secondNumber, '5');
    }
})
buttonSix.addEventListener('click', () => {
    if (operator.length === 0) {
        firstNumber = storeNumber(firstNumber, '6');
    } else {
        secondNumber = storeNumber(secondNumber, '6');
    }
})
buttonSeven.addEventListener('click', () => {
    if (operator.length === 0) {
        firstNumber = storeNumber(firstNumber, '7');
    } else {
        secondNumber = storeNumber(secondNumber, '7');
    }
})
buttonEight.addEventListener('click', () => {
    if (operator.length === 0) {
        firstNumber = storeNumber(firstNumber, '8');
    } else {
        secondNumber = storeNumber(secondNumber, '8');
    }
})
buttonNine.addEventListener('click', () => {
    if (operator.length === 0) {
        firstNumber = storeNumber(firstNumber, '9');
    } else {
        secondNumber = storeNumber(secondNumber, '9');
    }
})
buttonSum.addEventListener('click', () => {
    operator = '+'
    //console.log(firstNumber)
})
buttonSubtraction.addEventListener('click', () => {
    operator = '-'
    //console.log(firstNumber)
})
buttonProduct.addEventListener('click', () => {
    operator = '*'
    //console.log(firstNumber)
})
buttonDivision.addEventListener('click', () => {
    operator = '/'
    //console.log(firstNumber)
})
buttonResult.addEventListener('click', () => {
    console.log(firstNumber);
    console.log(secondNumber);

    console.log(calcResult(firstNumber, secondNumber));
    firstNumber = calcResult(firstNumber, secondNumber);

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





