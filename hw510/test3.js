/*
FizzBuzz. Напишите программу, которая выводит через console.log
все числа от 1 до 100, с двумя исключениями.
Для чисел, нацело делящихся на 3, она должна выводить 'Fizz', а для чисел,
делящихся на 5 (но не на 3) – 'Buzz'.Когда сумеете – исправьте её так,
чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
*/
"use strict";
//for (var cnt = 1; cnt < 101; cnt++)
var cnt = 1;
while (cnt != 100) {
  if ((cnt % 3) == 0 && (cnt % 5) == 0) {
    console.log("FizzBuzz");
  } else if ((cnt % 3) == 0) {
    console.log("Fizz");
  } else if ((cnt % 5) == 0) {
    console.log("Buzz");
  } else {
    console.log(cnt);
  }

  cnt++;
}
