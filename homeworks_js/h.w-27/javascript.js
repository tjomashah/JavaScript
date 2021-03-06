//1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 
// 1 – если первое больше, чем второе; и 0 – если числа равны.
function getNumber(number1, number2) {
    if (number1 < number2) {
        return -1; 
    } else if (number1 > number2) {
        return 1;     
    } else if (number1 == number2) {
        return 0;    
    } else 
        return "uknown"
    }
 getNumber(7, 6)
//2. Написать функцию, которая вычисляет факториал переданного ей числа
function factorial(number) {
    if (number == 0) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  console.log(factorial(4))

//3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. 
// Например: цифры 1, 4, 9 превратятся в число 149.


//4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. 
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
function rectangleValue(a, b) {
      rectangleArea = a * b;
      return rectangleArea;
  }
  rectangleValue(7, 4)

// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
// Совершенное число – это число, равное сумме всех своих собственных делителей.
function perfectNumber(num) {
  let sum = 0;
  let reminder;
  for (let i = 1; i < num - 1; i++) {
    reminder = num%i;
    if (reminder === 0) {
      sum += i;
    }
  }
  if (num === sum) {
    return (num, "Perfect number")
  } else {
    return (num, "Not perfect number")
  }
}
perfectNumber(200)


// 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, 
// которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
function perfectNumber(num) {
    let sum = 0;
    let reminder;
    for (let i = 1; i < num - 1; i++) {
      reminder = num%i;
      if (reminder === 0) {
        sum += i;
      }
    }
    if (num === sum) {
      return (num, "Perfect number")
    } else {
      return (num, "Not perfect number")
    }
  }
  perfectNumber(200)

// 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
function setTime(h) {
    return function setMinutes(m = 0) {
      return function setSeconds(s = 0) {
        return `${h}:${m}:${s}`
      }
    }
  }
  let time = setTime(20)(15)();
  console.log(time);

//8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function getTimeSeconds(hours, minutes = 00, seconds = 00) {
  hours = hours * 3600;
  minutes = minutes * 60;
  let res = hours + minutes + seconds;
  return res
}

console.log(getTimeSeconds(2, 40, 20));

//9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

function getTime(seconds) {
  let minutes = Math.trunc((seconds % 3600) / 60);
  let hours = Math.trunc(seconds % (3600 * 24) / 3600);
  let newSeconds = seconds % 3600 % 60;
  let days = Math.trunc(seconds / (3600 * 24));
  let result = days + ':' + hours + ':' + minutes + ':' + newSeconds;
  return result;
}
console.log(getTime(150000));

//10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, 
// и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: 
// сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»



// Вивести значення n-ого члену ряду Фібоанчі
let fib1 = 1
let fib2 = 1
let num = prompt("Номер элемента ряда Фибоначчи: ");
let i = 0;
while ( i < num - 2) {
    fibSum = fib1 + fib2
    fib1 = fib2
    fib2 = fibSum
    i = i + 1
}
console.log(fib2)