"use strict"

// Четвертные
const quarterThreeEstimation = 2.56; // Оценка 3 четвертная
const quarterFourEstimation = 3.56 // Оценка 4 четвертная
const quarterFiveEstimation = 4.56 // Оценка 5 четвертная

let pattern = /\s*\D*/; 
let arrayQuantityString = [];
let arrayQuantity = [];
let sumQuantity = 0;
let amountScoreInArray = 0; // Кол-во оценок
let middleScore = 0;
let inputScore = document.getElementById("input-score");
let button = document.querySelector('button');

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

function allCalc() {
    let writeQuantity = inputScore.value;
    arrayQuantityString = arrSplit(arrayQuantityString, writeQuantity, pattern);
    arrayQuantity = rewriteScoreInArray(arrayQuantityString);
    sumQuantity = sumScoreArray(arrayQuantity);
    amountScoreInArray = Object.keys(arrayQuantity).length; // Кол-во оценок
    middleScore = sumQuantity/amountScoreInArray;
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



