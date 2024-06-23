"use strict";
function solveEquation(a, b, c) {
    let arr = [];
    let d = b ** 2 - 4 * a * c;

    if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        arr.push(x1, x2);
    } else if (d === 0) {
        let x1 = -b / (2 * a);
        arr.push(x1);
    }
    return arr;
}

console.log(solveEquation());

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let p = percent / 100 / 12;
    if (isNaN(p) || p < 0) {
    } else {
        let s = amount - contribution;
        let n = countMonths;
        let pay = s * (p + p / ((1 + p) ** n - 1));
        let totalAmount = (pay * n).toFixed(2);
        return +totalAmount;
    }
}
