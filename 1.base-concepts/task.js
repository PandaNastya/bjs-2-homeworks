"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const d = (Math.pow(b, 2) - 4 * a * c);

  if (d > 0) {
    const root1 = (-b + Math.sqrt(d)) / (2 * a);
    const root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [root1, root2];
  } else if (d === 0) {
    const root = -b / (2 * a);
    arr = [root];
  } else {
    arr = [];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100;
  const loanbody = amount - contribution;
  const p = percent / 12;
  const payment = loanbody * (p + (p / (((1 + p)**countMonths) - 1)));
  amount = payment * countMonths;
  return parseFloat(amount.toFixed(2));
}