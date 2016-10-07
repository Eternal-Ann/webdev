/*
Сумма диапазона.  Напишите функцию range, принимающую два аргумента,
начало и конец диапазона, и возвращающую массив, который содержит все числа
из него, включая начальное и конечное.Затем напишите функцию sum,
принимающую массив чисел и возвращающую их сумму.
Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.В
качестве бонуса дополните функцию range, чтобы она могла принимать
необязательный третий аргумент – шаг для построения массива.
Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2)
должен будет вернуть [1, 3, 5, 7, 9]. Убедитесь, что она работает с
отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].

console.log(sum(range(1, 10))); // → 55
console.log(range(5, 2, -1)); // → [5, 4, 3, 2]
*/
"use strict";

function range(fst, lst) {
  var step = (arguments.length > 2) && (arguments[2] != 0) ? step = arguments[2] : step = 1;
  var arr = [];

  function func() {
    arr.push(fst);
    fst += step;
  }

  if (step > 0) {
    for ( ; fst <= lst; ) {
      func();
    }
  } else {
    for ( ; fst >= lst; ) {
      func();
    }
  }

/*  if (step > 0) {
    for (var i = fst; i <= lst; i += step) {
      arr.push(i);
    }
  } else {
    for (var i = fst; i >= lst; i += step) {
      arr.push(i);
    }
  }*/
  return arr;
}

function sum(arr) {
  var res = 0;
  for (var i = 0; i < arr.length; i++){
    res += arr[i];
  }
  return res;
}

console.log(sum(range(1, 10)));
console.log(sum(range(1, 10, 0)));
console.log(range(1, 10, 2));
console.log(sum(range(1, 10, 2)));
console.log(range(5, 2, -1));
console.log(sum(range(5, 2, -1)));
