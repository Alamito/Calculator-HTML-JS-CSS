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

function onlynumber(evt) {
   var theEvent = evt || window.event;
   var key = theEvent.keyCode || theEvent.which;
   key = String.fromCharCode(key);
   //var regex = /^[0-9.,]+$/;
   var regex = /^[0-9.]+$/;
   if(!regex.test(key)) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
   }
}

input.addEventListener("keydown", function (e) {
    console.log(e.key);
});

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

input.addEventListener('keydown', function (event) {
    switch (event.key) {
        case '+':
            typeOperation('+');
            break;
        case '-':
            typeOperation('-');
            break;
        case '*':
            typeOperation('*');
            break;
        case '/':
            typeOperation('/');
            break;
        case 'Enter':
            secondNumber = input.value;
            firstNumber = calcResult(firstNumber, secondNumber);
            printResult(firstNumber);
            operator = '';
            secondNumber = '';
            break;
        case 'Delete':
            printResult('');
            firstNumber = '';
            operator = '';
            secondNumber = '';
            break;
        default:
            break;
    }
});

buttonSum.addEventListener('click', () => {
    typeOperation('+');
})
buttonSubtraction.addEventListener('click', () => {
    typeOperation('-');
})
buttonProduct.addEventListener('click', () => {
    typeOperation('*');;
})
buttonDivision.addEventListener('click', () => {
    typeOperation('/');
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

function typeOperation(type) {
    firstNumber = input.value;
    operator = type
    printResult('');
}





