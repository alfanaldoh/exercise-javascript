// PEMBAHASAN

// function triangle(height) {
//     for (let i = 1; i <= height; i++) {
//         let row = ""
//         for (let j = 1; j <= i; j++) {
//             row += j + " "
//         }

//         console.log(row);
//     }
// }

// triangle(5)

// NO 2

// function trianglePattern(length) {
//   let currentNumb = 1;
//   for (let i = 1; i <= length; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += (currentNumb < 10 ? "0" : "") + currentNumb + " ";
//       currentNumb++;
//     }
//     console.log(row);
//   }
// }

// trianglePattern(4);

// NO 3

// function fizzBuzz(n) {
//   let message = "";

//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       message += "fizzBuzz";
//     } else if (i % 3 === 0) {
//       message += "fizz ";
//     } else if (i % 5 === 0) {
//       message += "buzz ";
//     } else {
//       message += i + " ";
//     }
//   }
//   console.log(message);
// }

// fizzBuzz(15);

// NO 5

// function removeOddNumber(arr) {
//   return arr.filter((item) => item % 2 === 0);
// }

// const inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(removeOddNumber(inputArr));

// tanpa built in
// function removeOddNumber(arr) {
//   const evenNumber = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenNumber.push(arr[i]);
//     }
//   }
//   return evenNumber;
// }

// const inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(removeOddNumber(inputArr));

// EXERCISE 1
// create a function that can create a triangle pattern

// function trianglePattern(length) {
//     let hasil = "";
//     let count = 1;
//     for(let i = 1; i <= length; i++) {
//         for(let j = 1; j <= i; j++){
//             hasil += count.toString().padStart(2, 0) + " "
//             count++
//         }
//         hasil += "\n"
//     }
//     return hasil
// }

// console.log(trianglePattern
//     (4));

// EXERCISE 2
// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".
// ● Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

// function loopingLength(n) {
//   let mulai = 1;
//   let x = "";
//   const a = "fizz";
//   const b = "buzz";

//   for (let i = 1; i <= n; i++) {
//     if (mulai % 3 === 0 && mulai % 5 === 0) {
//       x += a + b;
//     } else if (mulai % 3 === 0) {
//       x += a;
//     } else if (mulai % 5 === 0) {
//       x += b;
//     } else {
//       x += mulai;
//     }
//     if (i < n) {
//       x += " ";
//     }
//     mulai++;
//   }
//   return x;
// }

// console.log(loopingLength(6));

// EXERCISE 3
// ● Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))²
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”

// function calcBerat(kg, cm) {
//   let m = cm / 100;
//   const bmi = kg / m ** 2;

//   if (bmi < 18.5) {
//     return "less weight";
//   } else if (bmi > 18.5 && bmi < 24.9) {
//     return "ideal";
//   } else if (bmi > 25 && bmi < 29.9) {
//     return "overweight";
//   } else if (bmi > 30 && bmi < 39.9) {
//     return "very overweight";
//   } else {
//     return "obesity";
//   }
// }

// // kg = 60;
// // cm = 171;

// let result = calcBerat(60, 170);

// console.log(result);

// EXERCISE 4
// ● Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = num.filter((even) => {
//   if (even % 2 === 0) {
//     return even;
//   }
// });
// console.log(result);

// EXERCISE 5
// ● Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]

// const word = "Hello World";
// const convertWord = word.split(" ");

// console.log(convertWord);

// const splitString = function (input) {
//   let kata = [];
//   let temp = "";

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === " ") {
//       kata.push(temp);
//       temp = "";
//       continue;
//     }

//     temp += input[i];
//   }

//   kata.push(temp);
//   return kata;
// };

// console.log(splitString("Hello World Jogja"));
