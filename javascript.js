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

