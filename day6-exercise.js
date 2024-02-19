// EXERCISE 1
// ● Create a function to calculate array of student data
// ● The object has this following properties :
//      ○ Name → String
//      ○ Email → String
//      ○ Age → Date
//      ○ Score → Number
// ● Parameters : array of student
// ● Return values :
//  ○ Object with this following properties :
//  ■ Score
//      ● Highest
//      ● Lowest
//      ● Average
//  ■ Age
//      ● Highest
//      ● Lowest
//      ● Average

// const dataStudent = [
//   {
//     name: "Joko",
//     email: "joko@gmail.com",
//     age: "1960/07/11",
//     score: 100,
//   },
//   {
//     name: "Wowo",
//     email: "wowogemoy@gmail.com",
//     age: "1999/05/12",
//     score: 70,
//   },
//   {
//     name: "Prabroro",
//     email: "prabroro@gmail.com",
//     age: "1945/08/17",
//     score: 11,
//   },
//   {
//     name: "Janggar",
//     email: "janggar@gmail.com",
//     age: "1970/12/23",
//     score: 50,
//   },
// ];
// console.log(dataStudent.length);

// function calculate(arrayOfStudent) {
//   let scores = [];

//   for (let i = 0; i < arrayOfStudent.length; i++) {
//     scores.push(arrayOfStudent[i]["score"]);
//   }
//   console.log(scores);
//   let maxScores = Math.max(...scores);
//   console.log(maxScores);
//   let minScores = Math.min(...scores);
//   console.log(minScores);
//   let averageScore = scores.reduce((a, b) => a + b) / scores.length;
//   console.log(averageScore);

//   let ages = [];
//   for (let i = 0; i < arrayOfStudent.length; i++) {
//     const getAge = (birthDate) =>
//       Math.floor(
//         (new Date() - new Date(birthDate).getTime()) / (365 * 24 * 3600 * 1000)
//       );
//     const age = getAge(arrayOfStudent[i]["age"]);
//     console.log(age);
//     ages.push(age);
//   }
//   console.log(ages);
//   let maxAges = Math.max(...ages);
//   console.log(maxAges);
//   let minAges = Math.min(...ages);
//   console.log(minAges);
//   let averageAges = ages.reduce((a, b) => a + b) / ages.length;
//   console.log(averageAges);

//   const result = [
//     { score: { highest: maxScores, lowest: minScores, average: averageScore } },
//     { age: { highest: maxAges, lowest: minAges, average: averageAges } },
//   ];

//   return result;
// }

// console.log(calculate(dataStudent));

// EXERCISE 2
// ● Create a program to create transaction
// ● Product Class
//      ○ Properties
//          ■ Name
//          ■ Price
// ● Transaction Class
//      ○ Properties
//          ■ Total
//          ■ Product
//              ● All product data
//              ● Qty
//      ○ Add to cart method → Add product to transaction
//      ○ Show total method → Show total current transaction
//      ○ Checkout method → Finalize transaction, return transaction data

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// class Transaction extends Product {
//   constructor(total, name, price) {
//     super(name, price);
//     this.total = total;
//   }
// }

// const product1 = new Transaction(1, "Sampoerna", 32000);
// const product2 = new Transaction(1, "korek", 3000);
// const product3 = new Transaction(1, "indomie", 2000);

// console.log(product1, product2);

// 07. EXERCISE =====================================================================================

// EXERCISE 1

// function checkValue(obj1, obj2) {

//   if (obj1.a === obj2.a) {
//     return true
//   } else {
//     return false
//   }

// const inputObj1 = Object.entries(obj1);
// console.log(inputObj1);
// const inputObj2 = Object.entries(obj2);

// if (inputObj1.length !== inputObj2.length) {
//   return false;
// }

// for (let i = 0; i < inputObj1.length; i++) {
//   if (inputObj1[i][0] !== inputObj2[i][0]) {
//     return false;
//   }

//   if (inputObj1[i][1] !== inputObj2[i][1]) {
//     return false;
//   }

//   return true;
// }

// }

// const obj1 = { a: 3 };
// const obj2 = { a: 3 };
// console.log(checkValue(obj1, obj2));

// CARA MAS DANIEL ======================

// function areObjEqual(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (const key of keys1) {
//     if (obj1[key] !== obj2[key]) {
//     }
//     return false;
//   }
//   return true;
// }

// arg1 = {a: 2}
// arg2 = {a: 3}
// console.log(areObjEqual(arg1, arg2));

// EXERCISE 2

// function intersection(data1, data2) {
//   const data1keys = Object.keys(data1);
//   console.log(data1keys);
//   const data2keys = Object.keys(data2);
//   console.log(data2keys);
//   const interkeys = data1keys.filter((value) => data2keys.includes(value));
//   console.log(interkeys);

//   const output = new Object();
//   console.log(output);

//   for (i = 0; i < interkeys.length; i++) {
//     if (data1[interkeys[i]] === data2[interkeys[i]]) {
//       console.log(interkeys[i]);
//       console.log(data2[interkeys[i]]);
//       output[interkeys[i]] = data1[interkeys[i]];
//       console.log(output);
//     }
//   }
//   return output;
// }

// const data1 = { a: 1, b: 2, d: 4,c :3 };
// const data2 = { b: 2, c: 3 };

// console.log(intersection(data1, data2));

// CARA MAS DANIEL =============================================

// const intersection = (obj1, obj2) => {
//   console.log(obj1);
//   console.log(obj2);

//   const duplicate = {}

//   for(let key in obj1) { // for in --> untuk looping di dalam object
//     console.log(key);
//     if (obj1[key] == obj2[key]) {
//       console.log(obj1[key]);
//       duplicate[key] = obj1[key]
//     }
//   }

//   return duplicate
// }

// const arg1 = {a:1, b:2}
// const arg2 = {a:1, c:3}

// console.log(intersection(arg1,arg2));

// EXERCISE 3
// function mergeArraysAndDuplicate(arr1, arr2) {
//   const mergedArray = [...arr1];
//   console.log(mergedArray);

//   arr2.forEach((item) => {
//     if (!mergedArray.some((duplicate) => duplicate.name === item.name)) {
//       mergedArray.push(item);
//     }
//   });

//   return mergedArray;
// }

// const arr1 = [
//   { name: "Prabroro", email: "prabroro@gmail.com" },
//   { name: "janggar", email: "janggar@gmail.com" },
// ];

// const arr2 = [
//   { name: "Anisa", email: "anisa@gmail.com" },
//   { name: "Empud", email: "empud@gmail.com" },
//   { name: "janggar", email: "janggar@gmail.com" },
// ];

// console.log(mergeArraysAndDuplicate(arr1, arr2));

// CARA MAS DANIEL ==================================

// const removeDuplicate = (arr1, arr2) => {
//   const concatArr = arr1.concat(arr2);

//   const temp = [];

//   for (let i = 0; i < concatArr.length; i++) {
//     // filter -> mereturn array baru
//     const duplicateValues = temp.filter((val) => {
//       return val.email === concatArr[i].email;
//     });

//     if (!duplicateValues.length) {
//       temp.push(concatArr[i]);
//     }
//   }

//   return temp;
// };

// const arr1 = [
//   { name: "Prabroro", email: "prabroro@gmail.com" },
//   { name: "janggar", email: "janggar@gmail.com" },
// ];

// const arr2 = [
//   { name: "Anisa", email: "anisa@gmail.com" },
//   { name: "Empud", email: "empud@gmail.com" },
//   { name: "janggar", email: "janggar@gmail.com" },
// ];
// console.log(removeDuplicate(arr1, arr2));

// EXERCISE 4

// function switc(arrayOfObjects) {
//   let result = [];

//   arrayOfObjects.forEach(item => {
//       Object.entries(item).forEach(([key, value]) => {
//           result.push({ [value]: key });
//       });
//   });

//   return result;
// }

// const input = [{ name: 'David', age: 20 }];
// console.log(switc(input));

// CARA MAS DANIEL ======================================

// const switchValuesToKey = (arr) => {
//   console.log(arr);
//   const result = [];

//   arr.forEach((element) => {
//     let temp = {};

//     for (let key in element) {
//         console.log(key);
//         console.log(element[key]);
//       temp[element[key]] = key;
//     }

//     result.push(temp);
//   });

//   return result;
// };
// const arr = [{ name: "David", age: 20 }];
// console.log(switchValuesToKey(arr));

// EXERCISE 5

// function recursion(input) {
//   let factorial = input - 1;
//   console.log(factorial);
//   if (input == 0) {
//     return 1;
//   } else {
//     return input * recursion(factorial);

//   }
// }

// const input = 5;
// console.log(recursion(input));


// CARA MAS DANIEL ====================================

// const factorial = (n) => {
//   if (n === 0) {
//     return 1
//   } else {
//     return n * factorial(n - 1)
//   }
// }

// const n = 5

// console.log(`factorial ${n}! = ` + factorial(n));


// CARA KE DUA MAS DANIEL ===============================

// const factorial = (n) => {
//   if (n === 1) {
//     return {
//       steps: ["1"],
//       total: 1,
//     }
//   } else {
//     const next = factorial(n-1)

//     return {
//       steps: [n, ...next.steps],
//       total: n * next.total,
//     }
//   }
// }


// const number = 5
// const {steps, total} = factorial(number)

// console.log(steps.join(" x ") + " = " + total);