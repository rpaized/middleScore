"use strict"

// Четвертные
const quarterThreeEstimation = 2.56; // Оценка 3 четвертная
const quarterFourEstimation = 3.56 // Оценка 4 четвертная
const quarterFiveEstimation = 4.56 // Оценка 5 четвертная

let warning = document.querySelector('.alert-invalid-input');

let pattern = /\s*\D*/; 
let arrayQuantityString = [];
let arrayQuantity = [];
let sumQuantity = 0;
let amountScoreInArray = 0; // Кол-во оценок
let middleScore = 0;
let inputScore = document.querySelector(".text-string");
let button = document.querySelector('.button-text-center');

function arrSplit(array,string,pattern) {
    array = string.split(pattern);
    return array;
};

function rewriteScoreInArray(variable) {
    variable = arrayQuantityString.map(function (item) {
        return parseFloat(item);
      }); 
    return variable;
};

function sumScoreArray (variable) {
    const initialValue = 0;
    variable = arrayQuantity.reduce( 
        (previousValue, currentValue) => previousValue + currentValue,
         initialValue
       );
    return variable; 
};

function calcScore(quarterEstimation, estimation) {
	let middle = middleScore;
	let amount = amountScoreInArray;
    let sum = sumQuantity; // сумма оценок
	let quantity;
	while(middle<=quarterEstimation) {
        amount++;
		sum += estimation;
		middle = sum/amount;
    }
	quantity = amount - amountScoreInArray;
	return quantity;
};

function checkNaNInArray() {
    for(let i = 0; i < amountScoreInArray; i++) {
        if (isNaN(arrayQuantity[i])) {
            arrayQuantity.splice(i, 1);
        };
    };
    return arrayQuantity;
};

function checkArrayString() {

    for(let i = 0; i < amountScoreInArray; i++) {

        if (arrayQuantity[i] === 'del') {
            arrayQuantity.splice(i, 1);
        };
        
    };

    return arrayQuantity;
};

function checkScoreMoreFive() {
    let i = 0;
    let check;

    while(i < amountScoreInArray) {

        if (arrayQuantity[i] > 5 || arrayQuantity[i] === 0) {
            arrayQuantity.splice(i, 1);
            i--;
            check = 1;
        };
        
        i++;
    };

    if (check) {
        warning.innerHTML = `Введёный текст содержит оценку(и) больше 5 баллов`;
    };

    return arrayQuantity;
};

function showEmpty() {
    if (amountScoreInArray === 0) {
        warning.innerHTML = `Введите оценки!`;
    };
};

function allCalc() {
    let writeQuantity = inputScore.value;
    arrayQuantityString = arrSplit(arrayQuantityString, writeQuantity, pattern);
    arrayQuantity = rewriteScoreInArray(arrayQuantityString);
    amountScoreInArray = Object.keys(arrayQuantity).length; // Кол-во оценок для проверки на NaN
    arrayQuantity = checkNaNInArray();
    arrayQuantity = checkScoreMoreFive();
    amountScoreInArray = Object.keys(arrayQuantity).length; // Кол-во оценок окончательное
    showEmpty();
    sumQuantity = sumScoreArray(arrayQuantity);
    middleScore = sumQuantity/amountScoreInArray;
    console.log('allCalc - work!');
};

function calcScore(quarterEstimation, estimation) {
	let middle = middleScore;
	let amount = amountScoreInArray;
    let sum = sumQuantity; // сумма оценок
	let quantity;
	while(middle<=quarterEstimation) {
        amount++;
		sum += estimation;
		middle = sum/amount;
    };
    quantity = amount - amountScoreInArray;
    return quantity; 
};

function calcMiddleScore(quarterEstimation, estimation) {
	let middle = middleScore;
	let amount = amountScoreInArray;
    let sum = sumQuantity; // сумма оценок
	let quantity; 
	while(middle<=quarterEstimation) {
        amount++;
		sum += estimation;
		middle = sum/amount;
        quantity++
    }
    return middle.toFixed(2); 
};

button.addEventListener("click", allCalc);




