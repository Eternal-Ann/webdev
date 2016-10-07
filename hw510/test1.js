/*
Напиши функцию, считающую число свойств в объекте:

var a = { a: 1, b: 2 };
console.log(count(a)); // 2
var b = function () {};
console.log(count(b)); // 0
var c = [1, 2, 3];
console.log(count(c)); // 3
var d = [];
d[100] = 1;
console.log(count(d)); // 1
*/
"use strict";
function count(obj) {
  var cnt = 0;
  //мы не будем перебирать пустые свойства, например d
  //только те, у которых есть значение
  for (var key in obj) {
    cnt++;
  }
  return cnt;
}

var a = { a: 1, b: 2 };
var b = function () {};
var c = [1, 2, 3];
var d = [];
d[100] = 1;

console.log(count(a));
console.log(count(b));
console.log(count(c));
console.log(count(d));
