                                                        // На forEach 

// 1. Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел. 
let numbers = [9,16,36,64];
let squareNumbers = [];
numbers.forEach(getNumberToSquare);

function getNumberToSquare(item,index,arr) {
    squareNumbers[index] = item ** 2;
    return squareNumbers
}
console.log(numbers)
console.log(squareNumbers)

//2. Дан массив с числами. Найдите сумму этих чисел. 
let sum = 0;
let simpleNumbers = [9,16,36,64];
numbers.forEach(getSumOfNumbers);

function getSumOfNumbers(item) {
  sum += item;
}
console.log(sum)

                                                       // На Map

//3. Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел. 
let num = [9,16,36,64];
let squareNum = num.slice();
squareNum = num.map(getNumToSquare);

function getNumToSquare(item) {
  return item ** 2;
}
console.log(num)
console.log(squareNum)

                                                      // На every, some

//4.  Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
Numbers = [9,16,36,64];
let numbersMoreThanZero = Numbers.every(function(element) {
  return element > 0;
})

console.log(numbersMoreThanZero);

// 5. Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы. 
arr = [9,-16,36,64];
let numbersLessThanZero = arr.some(function(element) {
  return element < 0;
})

console.log(numbersLessThanZero);

                                                      // На filter


// 6.  Дан массив с числами. Оставьте в нем только отрицательные числа.
arrayOfNumbers = [1, 2, 3, 4, 5, 6];

let oddNumbers = arrayOfNumbers.filter(function(element) {
  return element % 2 != 0;
});

console.log(oddNumbers);

// 7. Дан массив с числами. Оставьте в нем только четные числа. 
arrayOfNum = [1, 2, 3, 4, 5, 6];

let evenNumbers = arrayOfNum.filter(function(element) {
  return element % 2 == 0;
});

console.log(evenNumbers); 

//8. Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов. 
arrayOfStr = ['iphone', 'samsung', 'nokia', 'lenovo', 'lg'];

let stringLengthMoreThanFive = arrayOfStr.filter(function(element) {
  return element.length > 5;
});

console.log(stringLengthMoreThanFive);


//9. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
array = [1, 2, [3, 4], 5, [6, 7]];

let underArray = array.filter(function(element) {
  return Array.isArray(element);
});

console.log(underArray);

//10. Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве. 
arrOfNumbers = [1, 2, 3, 4, 5, 6, 7];

let amountOfOddsNumbers = arrOfNumbers.filter(function(element) {
  return element % 2 != 0;
});

console.log(amountOfOddsNumbers.length); 

                                                      // На reduce, reduceRight

//11. Дан массив с числами. Найдите сумму этих чисел.
arrOfNum = [5, 9, 14, 21, 34];
let sumOfNum = arrOfNum.reduce(function(total, num) {
  return total + num
});
console.log(sumOfNum)

//12.  Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - 
//суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.
reduceRightArr = [1, 2, 3, 0, 4, 5, 6];
let sumToZero = reduceRightArr.reduceRight(function(total, num) {
  if (num != 0) {
      return total + num;
   } else {
     return false;
   }
});
console.log(sumToZero)

//13. Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца. Пример: [1, 2, 3, 0, 4, 5, 6] - 
//суммируем последние 3 элемента, так как дальше стоит элемент с числом 0. 
reduceArr = [1, 2, 3, 0, 4, 5, 6];
let resToZero = reduceArr.reduce(function(total, num) {
  if (num != 0) {
      return total + num;
   } else {
     return false;
   }
});
console.log(resToZero)