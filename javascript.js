function addNumbers(a,b) {
    return a + b;
}

function subtractNumbers(a,b) {
    return a - b;
}

function multiplyNumbers(a,b) {
    return a * b;
}

function divideNumbers(a,b) {
    return a / b;
}

let operator;
let num1;
let num2;

function roundToTen(number) {
    return Number(number.toFixed(10));
}

function operate(operator, num1, num2) {
    // divide by zero error message
    switch (operator) {
        case '+':
            return addNumbers(num1, num2);
            break;
        case '-':
            return subtractNumbers(num1, num2);
            break;
        case '*':
            return multiplyNumbers(num1, num2);
            break;
        case '/':
            return divideNumbers(num1, num2);
            break;
        default:
            return 'Error: operator is invalid.'
    }
}

const displayFigure = document.querySelector('#displayFigure');
const numPad = document.querySelector('#numbers');
const opPad = document.querySelector('#operators');

let currentSelection = [];
//convert selection to a string
function reduceSelection(array) {
    return array.join('');
}

numPad.addEventListener('click', (e) => {
    // if there is a current result on the display but new number is pressed
    if (num1 && !operator) {
        displayFigure.textContent = '';
        num1 = '';
    }

    const target = e.target;
    if (currentSelection.length < 10) {
        switch (target.id) {
            case 'one':
                currentSelection.push(1);
                displayFigure.textContent = reduceSelection(currentSelection);
                break;
            case 'two':
                currentSelection.push(2);
                displayFigure.textContent = reduceSelection(currentSelection);
                break;
            case 'three':
                currentSelection.push(3);
                displayFigure.textContent = reduceSelection(currentSelection);
                break;
            case 'four':
                currentSelection.push(4);
                displayFigure.textContent = reduceSelection(currentSelection);
                break;
            case 'five':
                currentSelection.push(5);
                displayFigure.textContent = reduceSelection(currentSelection);
                break;
            case 'six':
                currentSelection.push(6);
                displayFigure.textContent = reduceSelection(currentSelection);
                break;
            case 'seven':
                currentSelection.push(7);
                displayFigure.textContent = reduceSelection(currentSelection);
                break;
            case 'eight':
                currentSelection.push(8);
                displayFigure.textContent = reduceSelection(currentSelection);
                break;
            case 'nine':
                currentSelection.push(9);
                displayFigure.textContent = reduceSelection(currentSelection);
                break;
            case 'zero':
                currentSelection.push(0);
                displayFigure.textContent = reduceSelection(currentSelection);
                break;
            case 'numbers':
                break;
            default:
                displayFigure.textContent = 'ERR';
                break;
        }
    }
});

opPad.addEventListener('click', (e) => {
    const target = e.target;
    switch (target.id) {
        case 'clear':
            displayFigure.textContent = '';
            currentSelection = [];
            num1 = '';
            num2 = '';
            operator = '';
            break;
        case 'addition':
            operateClick('+');
            break;
        case 'subtract':
            operateClick('-');
            break;
        case 'multiply':
            operateClick('*');
            break;
        case 'divide':
            operateClick('/');
            break;
        case 'equals':
            operateClick('=');
            break;
        default:
            break;
    }
});

function operateClick(selection) {
    switch (selection) {
        case '+':
        case '-':
        case '*':
        case '/':
            // if no first number saved
            if (!num1) {
                num1 = parseInt(reduceSelection(currentSelection));
                currentSelection = [];
                operator = selection;
            } // After EQUAL sign pressed so no operator is assigned
            else if (num1 && !operator) {
                operator = selection;
            } // if no second number has been input, do nothing
            else if (currentSelection.length === 0) {
                return;
            } else {
                num2 = parseInt(reduceSelection(currentSelection));
                // if trying to divide by zero
                if (num2 === 0 && operator === '/') {
                    displayFigure.textContent = 'Nice try';
                    resetOperation('','');
                    return;
                } else {
                let temp = operate(operator, num1, num2);
                resetOperation(temp, selection);
                }
            }
            break;
        case '=':
            // if no first number is saved, do nothing
            if (!num1) {
                return;
            } // if no second number has been input, do nothing
            else if (currentSelection.length === 0) {
                return;
            } // if a first number was saved and second number is present,
              // save second number, operate on both, and reset so new number is num1
            else {
                num2 = parseInt(reduceSelection(currentSelection));
                // if trying to divide by zero
                if (num2 === 0 && operator === '/') {
                    displayFigure.textContent = 'Nice try';
                    resetOperation('','');
                    return;
                } else {
                let temp = operate(operator, num1, num2);
                resetOperation(temp, '');
                }
            }
    }  
}

function resetOperation(temp, op) {
    num1 = temp;
    num2 = '';
    operator = op;
    currentSelection = [];
    displayFigure.textContent = roundToTen(temp);
}