"use strict";
// Четвертные
const quarterThreeEstimation = 2.56; // Оценка 3 четвертная
const quarterFourEstimation = 3.56 // Оценка 4 четвертная
const quarterFiveEstimation = 4.56 // Оценка 5 четвертная

let writeQuantity = 0; // Содержит тип вводимых данных
let arrayQuantityString = []; // Соддержит кол-во оценок
let askWriteQuantity = confirm(`Нажмите "Да", если хотите вводить данные через пробел, или "Нет", если хотите вводить данные слитно.`);

// Опрос типа вводимых данных
if (askWriteQuantity == true) { 
    writeQuantity = prompt(`Введите оценки через пробел`);
} else {
    writeQuantity = prompt(`Введите оценки без пробелов`);
}

// Разделение текста в массив
if (askWriteQuantity === true) { 
    arrayQuantityString = writeQuantity.split(' ');
} else {
    arrayQuantityString = writeQuantity.split('');
} 

// Выписывает оценки и вносит в массив, скорее всего
let arrayQuantity = arrayQuantityString.map(function (item) {
    return parseFloat(item);
  }); 

  const initialValue = 0; // Первоначальное значение

// Сумма оценок
const sumQuantity = arrayQuantity.reduce( 
 (previousValue, currentValue) => previousValue + currentValue,
  initialValue
); 

const amountScoreInArray = Object.keys(arrayQuantity).length; // Кол-во оценок
const middleScore = sumQuantity/amountScoreInArray; // Средний балл предмета (вводимого пользователем)

// Функция - подсчёт кол-ва оценок для получения нужной оценки в четверти
function countScore(quarterEstimation, estimation) {
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
}

// Функция - сообщение кол-ва оценок для нужной четвертной оценки
function showEstimation(storage1, storage2, storage3, storage4, storage5) {
    alert("Ваш средний балл: " + middleScore.toFixed(2) + "\nЧтобы за четверть вышла 3, нужно 4: " + storage1 + 
    ", или 5: " + storage2 + "\nЧтобы за четверть вышла 4, нужно 4: " + storage3 + ", или 5: " + storage4 + 
    "\nЧтобы за четверть вышла 5, нужно 5: " + storage5);
}
  
showEstimation(countScore(quarterThreeEstimation, 4), // storage1 (четвертная 3)
               countScore(quarterThreeEstimation, 5), // storage2 (четвертная 3)
               countScore(quarterFourEstimation, 4),  // storage3 (четвертная 4)
               countScore(quarterFourEstimation, 5),  // storage4 (четвертная 4)
               countScore(quarterFiveEstimation, 5)   // storage5  (четвертная 5)
);

