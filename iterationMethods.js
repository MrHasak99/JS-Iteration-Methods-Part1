const numbers = [10, 13, 20, 25, 38, 35, 40];

const greaterThanOrEqual = numbers.filter(function (num) {
  if (num >= 25) return true;
});
console.log(greaterThanOrEqual);

const divisibleByFive = numbers.filter(function (num) {
  if (num % 5 === 0) return true;
});
console.log(divisibleByFive);

const squared = numbers.map(function (num) {
  return num * num;
});
console.log(squared);

const double = numbers.map(function (num) {
  return num * 2;
});
console.log(double);

const greaterThanOrEqualToTwenty = numbers.filter(function (num) {
  if (num >= 20) return true;
});

const squareFiltered = greaterThanOrEqualToTwenty.map(function (num) {
  return num * num;
});

console.log(greaterThanOrEqual);
console.log(squareFiltered);

const multiplyByThree = divisibleByFive.map(function (num) {
  return num * 3;
});
console.log(divisibleByFive);
console.log(multiplyByThree);

const test = [12, 34, 56, 78, 90];

const logger = test.forEach(function (test) {
  console.log(test);
});

let temp = [84, 59, 45, 97, 110];

const celsius = temp.map(function (num) {
  return (num - 32) * (5 / 9);
});
console.log(celsius);

const threshhold = 60;

const hottestDays = temp.filter(function (num) {
  if (num >= threshhold) return true;
}, threshhold);
console.log(hottestDays);

const logHottestDays = celsius.filter(function (num) {
  threshholdInCelsius = (threshhold - 32) * (5 / 9);
  if (num >= threshholdInCelsius) return true;
}, threshhold);
console.log(logHottestDays);
