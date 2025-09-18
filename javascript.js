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

let operator = '';
let num1;
let num2;

function operate(operator, num1, num2) {
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

// Fix/finish this function next please, it is in use at line 141 but needs more something something

function operateClick(selection) {
    if (!num1) {
                num1 = parseInt(reduceSelection(currentSelection));
                currentSelection = [];
                displayFigure.textContent = '';
            } else if (num1) {
                num2 = parseInt(reduceSelection(currentSelection));
                operator = selection;
                return operate(operator, num1, num2);
            }
}

const displayFigure = document.querySelector('#displayFigure');
const numPad = document.querySelector('#numbers');
const opPad = document.querySelector('#operators');

const ONE = document.querySelector('#one');
const TWO = document.querySelector('#two');
const THREE = document.querySelector('#three');
const FOUR = document.querySelector('#four');
const FIVE = document.querySelector('#five');
const SIX = document.querySelector('#six');
const SEVEN = document.querySelector('#seven');
const EIGHT = document.querySelector('#eight');
const NINE = document.querySelector('#nine');
const ZERO = document.querySelector('#zero');

const CLEAR = document.querySelector('#clear');
const ADD = document.querySelector('#addition');
const SUBTRACT = document.querySelector('#subtract');
const MULTIPLY = document.querySelector('#multiply');
const DIVIDE = document.querySelector('#divide');
const EQUALS = document.querySelector('#equals');

let currentSelection = [];
function reduceSelection(array) {
    return array.join('');

}

numPad.addEventListener('click', (e) => {
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
            break;
        case 'addition':
            displayFigure.textContent = operateClick('+');
            break;
        case 'subtract':
            break;
        case 'multiply':
            break;
        case 'divide':
            break;
        case 'equals':
            break;
        default:
            break;
    }
});