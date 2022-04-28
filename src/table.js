"use strict";

function tableScore() {
    
    if (middleScore > quarterFiveEstimation) {
        document.querySelector('.table-score').innerHTML = ``;
        return;
    } else { 
        document.querySelector('.table-score').innerHTML = `<table class="table" border="1" bordercolor="#B8860B" bgcolor="#DAA520"></table>`;
    };
    
    if (middleScore > quarterFiveEstimation) {
        return;
    } else if (middleScore > quarterFourEstimation) {
        let row_1 = document.createElement('tr');
        row_1.innerHTML = `
            <td></td>
            <td><strong><em>Количество 5</strong></em></td>
            <td><strong><em>Средний балл (сейчас)</strong></em></td>
            <td><strong><em>Средний балл (полученный пятёрками)</strong></em></td>
        `;
        document.querySelector('.table').appendChild(row_1);
    } else {
        let row_1 = document.createElement('tr');
        row_1.innerHTML = `
            <td></td>
            <td><strong><em>Количество 4</strong></em></td>
            <td><strong><em>Количество 5</strong></em></td>
            <td><strong><em>Средний балл (сейчас)</strong></em></td>
            <td><strong><em>Средний балл (полученный четвёрками)</strong></em></td>
            <td><strong><em>Средний балл (полученный пятёрками)</strong></em></td>
        `;
        document.querySelector('.table').appendChild(row_1);
    };
    
    
    if (middleScore < quarterThreeEstimation) {
        let row_2 = document.createElement('tr');
        row_2.innerHTML = `
            <td><strong><em>Нужно до 3</strong></em></td>
            <td>${calcScore(quarterThreeEstimation, 4)}</td>
            <td>${calcScore(quarterThreeEstimation, 5)}</td>
            <td>${middleScore.toFixed(2)}</td>
            <td>${calcMiddleScore(quarterThreeEstimation, 4)}</td>
            <td>${calcMiddleScore(quarterThreeEstimation, 4)}</td>
        `;
        document.querySelector('.table').appendChild(row_2);
    };
    
    if (middleScore < quarterFourEstimation) {
        let row_3 = document.createElement('tr');
        row_3.innerHTML = `
            <td><strong><em>Нужно до 4</strong></em></td>
            <td>${calcScore(quarterFourEstimation, 4)}</td>
            <td>${calcScore(quarterFourEstimation, 5)}</td>
            <td>${middleScore.toFixed(2)}</td>
            <td>${calcMiddleScore(quarterFourEstimation, 4)}</td>
            <td>${calcMiddleScore(quarterFourEstimation, 4)}</td>
        `;
        document.querySelector('.table').appendChild(row_3);
    };
    
    
    if (middleScore > quarterFourEstimation) {
        let row_4 = document.createElement('tr');
        row_4.innerHTML = `
            <td><strong><em>Нужно до 5</strong></em></td>
            <td>${calcScore(quarterFiveEstimation, 5)}</td>
            <td>${middleScore.toFixed(2)}</td>
            <td>${calcMiddleScore(quarterFiveEstimation, 5)}</td>
        `
        document.querySelector('.table').appendChild(row_4);
    } else {
        let row_4 = document.createElement('tr');
        row_4.innerHTML = `
            <td><strong><em>Нужно до 5</strong></em></td>
            <td><em></em></td>
            <td>${calcScore(quarterFiveEstimation, 5)}</td>
            <td>${middleScore.toFixed(2)}</td>
            <td><em></em></td>
            <td>${calcMiddleScore(quarterFiveEstimation, 5)}</td>
        `
        document.querySelector('.table').appendChild(row_4);
    };
};

function showTableScore() {
    if (amountScoreInArray !== 0) {
        button.addEventListener("click", tableScore);
    };
};

button.addEventListener("click", showTableScore);
