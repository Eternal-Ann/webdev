/*
Минимум. Напишите функцию min, принимающую два аргумента,
и возвращающую минимальный из них.
console.log(min(0, 10)); // → 0
console.log(min(0, -10)); // → -10
*/
"use strict";
function min(a, b) {
  return a < b ? a : b;
//  if (a <= b) {return a;}
//  else {return b};
//  if (a == b) return a;
}

console.log(min(0, 10));
console.log(min(0, -10));
console.log(min(3, 3));
