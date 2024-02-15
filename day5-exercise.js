// EXERCISE 1
//  Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

// function calculateArr(arr) {

//     let sortArr = arr.sort((a, b) => a - b);
//     console.log(sortArr);

//     let lowest = Math.min(...arr);
//     let highest = Math.max(...arr);
//     let average = (arr.reduce((a, b) => a + b) / arr.length).toFixed(2);

//     const result = "lowest : " + lowest + ", highest: " +  highest + ", average: " + average
//     return result
// }

// const arr = [12, 5, 23, 18, 4, 45, 32];
// console.log(calculateArr(arr));

// EXERCISE 2
// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

// function changeArray(array) {
//     const lastItem = array.splice(-1).join("  ")
//     console.log(lastItem);
//     const toStr = array.join(" ")
//     console.log(toStr);
//     const result = toStr + ', and ' + lastItem
//     return result

// }

// const arr = ["apple", "banana", "cherry", "date"];
// console.log(changeArray(arr));

// function splitWords (word) {
//     const join = word.slice(0, -1).join(", ") +
// }

// EXERCISE 3
// Write a function to split a string and convert it into an array of words
// a. Example : “Hello World” → [“Hello”, “World”]

// const word = "Hello World";
// const convertWord = word.split(" ");
// console.log(convertWord);

// function stringToArr(arr) {
//   return arr.split(" ");
// }

// const convertToArr = "Hello World";
// console.log(stringToArr(convertToArr));

// // EXERCISE 4
// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

// function calculateElement(arr1, arr2) {
//   const result = [];
//   const maxLength = Math.max(arr1.length, arr2.length);
//   for (let i = 0; i < maxLength; i++) {
//     const newArr = (arr1[i] || 0) + (arr2[i] || 0);
//     result.push(newArr);
//   }
//   return result;
// }

// const arr1 = [1, 2, 3];
// const arr2 = [3, 2, 1];
// console.log(calculateElement(arr1, arr2));

// function calculateArray(arr1, arr2) {
//     const result = []

// }

// // EXERCISE 5
// Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

// function addElement(arr, newElement) {
//     const datas = new Set(arr);
//     console.log(datas);
// // set -> menyimpan data yg unik/tidak sama, supaya tidak terjadi redudancy

//     if(!datas.has(newElement )) {
//         datas.add(newElement);
//     } else {
//         return numOfSet
//     }
//     return datas
// }

// const numOfSet = [1, 2, 3, 4];
// const newEl = 4
// console.log(addElement(numOfSet, newEl));

// EXERCISE 6
// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]
// FILTER -> melakukan looping juga dan akan menghasilkan array baru berdasarkan kondisi yang dimasukkan
// const num = [1, 2, 3, 4, 5, 6];
// const result = num.filter((even) => {
//   if (even % 2 === 0) {
//     return even;
//   }
// });
// console.log(result);

// function removeNumber(arr) {
//     return arr.filter((item) => item % 2 === 0);
// }

// console.log(removeNumber([1,2,3,4,5,6,]));

// EXERCISE 7
// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]

// function maxSize(numbers, max) {
//     console.log(numbers);
//     console.log(max);

//     const result = []

//     numbers.forEach(element => {
//         if (result.length === max)
//         return

//         result.push(element)
//     });
//     return result
// }

// const max = 5;
// const numbers = [5, 10, 24, 3, 6];
// console.log(maxSize(numbers, max));

// EXERCISE 8
// Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

// function combineArr(arr1, arr2) {
//   const concat = arr1.concat(arr2);
//   return concat;
// concat -> untuk menggabungkan 2 array menjadi 1
// }

// const numsArr1 = [1, 2, 3];
// const numsArr2 = [4, 5, 6];
// console.log(combineArr(numsArr1, numsArr2));

// EXERCISE 9
// Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

// function duplicateValues(arr) {
//   const occurances = new Map();
//   const arrays = [];

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     occurances.set(element, (occurances.get(element) || 0) + 1);
//   }
//   console.log(occurances);

//   for (const [key, value] of occurances) {
//     if (value > 1) {
//       arrays.push(key);
//     }
//   }
//   console.log(arrays);
//   return arrays;
// }

// const arrDup = [1, 2, 2, 2, 3, 3, 4, 5, 5];
// console.log(duplicateValues(arrDup));

// EXERCISE 10
// Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

// function differencesArray (arr1, arr2) {
//     const diff1 = arr1.filter(element => !arr2.includes(element))
//     const diff2 = arr2.filter(element => !arr1.includes(element))

//     return diff1.concat(diff2)
// }

// const arr1 = [1, 2, 3, 4, 5]
// const arr2 = [3, 4, 5, 6, 7]
// console.log();

// EXERCISE 11
// Based on the array below write a function that will return primitive data types only. let
// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

// function returnPrimitive(arr) {
//     const newArr = []
//     const primitive = new Map([
//         [1, true],
//         [undefined, true],
//         ["string", true],

//     ])
//     console.log(primitive);
//     for (let i of arr) {
//         if(primitive.has(i)) {
//             newArr.push(i);
//         }
//     }
//     console.log(newArr);
//     return newArr
// }

// const inputDataTypes = [1, [], undefined, {}, "string", {}, []]
// console.log(returnPrimitive(inputDataTypes));

// EXERCISE 12
// Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

// function getSmallest(arr) {
//   const secondSmallest = arr.sort((a, b) => a - b);
//   console.log(secondSmallest[1]);
//   return secondSmallest[1];
// }
// const input = [5, 3, 1, 7, 2, 6];
// console.log(getSmallest(input));

// EXERCISE 13
// Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

// function smallestNum(arr) {

//   const arrowOfNum = [];
//   for (let i of arr) {
//     if (typeof i === "number") {
//       arrowOfNum.push(i);
//     }
//   }
//   const sum = arrowOfNum.reduce((a, b) => a + b);
//   return sum;
// }

// const mixedArr = ["3", 1, "string", null, false, undefined, 2];
// console.log(smallestNum(mixedArr));

// EXERCISE 14
// Write a function from the below array of number that will return sum of duplicate values.
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

// function returnSumpDup(arr) {
//       const occurance = new Map();
//       let sum = 0;

//       for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         occurance.set(element, (occurance.get(element) || 0) + 1);
//       }
//       for (const [key, value] of occurance) {
//         if (value > 1) {
//           const temp = key * value;
//           sum = temp;
//         }
//       }
//       return sum;
//     }

//     const input = [10, 20, 40, 10, 50, 30, 10, 60, 10]
//     console.log(returnSumpDup(input));

// cara mas daniel

// function sumDuplicate(arr) {
//   const duplicateValues = arr.filter((value, index, array) => {
//     // jadi patokan untuk mengecek di looping ke dua
//     return array.indexOf(value) !== index;
//   });
//   console.log(duplicateValues);

//   let result = 0;
//   for (let item of arr) {
//     if (duplicateValues.includes(item)) {
//       result += item;
//     }
//   }
//   return result;
// }

// const input = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// console.log(sumDuplicate(input));

// EXERCISE 15
// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

// function gameSuit(playerChoice) {
//   const choices = ["batu", "gunting", "kertas"];

//   const compchoices = choices[Math.floor(Math.random() * 2.9)];
//   console.log(compchoices);

//   if (playerChoice === compchoices) {
//     return "draw";
//   } 
  
//   if (
//     (playerChoice === "batu" && compchoices === "gunting") ||
//     (playerChoice === "gunting" && compchoices === "kertas") ||
//     (playerChoice === "gunting" && compchoices === "batu")
//   ) {
//     return "win";
//   } 

//     return "lose";
//   }


// console.log(gameSuit("gunting"));
