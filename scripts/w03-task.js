/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2)
{
    return number1 + number2;
}

function addNumbers() 
{    
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) 
{
    return number1 - number2;
}

const subtracNumbers = function()
{
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtracNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => `
    ${multiplyNumber1 = Number(document.querySelector("#factor1").value)}
    ${multiplyNumber2 = Number(document.querySelector("#factor2").value)}

    ${document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2)}`;

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(number1, number2) 
{
    return number1 / number2;
}

function divideNumbers() 
{
    divideNumber1 = Number(document.querySelector("#dividend").value);
    divideNumber2 = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
const currentDate = new Date().getFullYear();
const currentYear = currentDate;
document.querySelector("#year").value = currentDate;


/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.querySelector("#array").value = numbersArray;

/* Output Odds Only Array */
document.querySelector("#odds").value = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector("#evens").value = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").value = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").value = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").value = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
