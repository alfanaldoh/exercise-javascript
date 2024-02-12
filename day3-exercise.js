// EXERCISE 1
// Write a code to display the multiplication table of a given integer

// const number = 9;
// const limit = 10;

// for (let i = 1; i <= limit; i++ ) {
//     console.log(`multiplication of ${number} x ${i} = ${number * i}`);
// }


// EXERCISE 2 
// Write a code to check whether a string is palindrome or not

// const palindrome = "madam";
// let result = true;
// let j = palindrome.length - 1;

// for (let i = 0; i < j ; i++) {
//     if (palindrome[i] != palindrome[j]) {
//         result = false;
//         break;
//     }
//     j--;
// }

// console.log(result === true ? "palindrome" : "not palindrome");

// pake cara lain

// let reverse = "";

// for (let j = palindrome.length - 1; j >= 0; j--) {
//     reverse += palindrome[i];
//     console.log(palindrome[i]);
// }

// console.log(reverse);

// pake build in method

// const isPalindrome = palindrome === palindrome.split("").reverse().join("");

// console.log(palindrome.split(""));
// console.log(palindrome.split("").reverse());
// console.log(palindrome.split("").join(" "));

// console.log(isPalindrome);


// EXERCISE 3
// write a code  to convert centimeter to kilometer 

// let cm = 100000;
// const convertKM = cm / 100000;

// console.log(`${convertKM} km`);



// EXERCISE 4
// write a code to format number as currency (IDR)

// const money = 1000000000;
// const convertIDR = new Intl.NumberFormat('id-ID', {
//     style : "currency",
//     currency : "IDR"
// }).format(money)

// console.log(convertIDR);


// EXERCISE 5
// write a code to remove the first occurence of a given "search string" from a string

// const kata = "Hello world";
// const searchKata = "ell";
// const indexOfWord = kata.indexOf(searchKata);
// const endIdx = indexOfWord + searchKata.length;
// const cutKata = kata.slice(0, indexOfWord) + kata.slice(endIdx);

// console.log(cutKata);

// const word = "hello world";
// const removeWord = word.replace ("ell","");

// console.log(removeWord);

// const words = "Hello World";
// const search = "ell";
// const replaceWith = "";

// const remove = words.replace(search, replaceWith);

// console.log(remove);


// EXERCISE 6
// write a code to capitalize the first letter of each word in a string

// const word = "hello world";
// const wordToArr = word.split(" ");
// console.log(wordToArr);

// const capitalize = wordToArr.map (
//     (item) => item.charAt(0).toUpperCase() + item.slice (1)
// ); 
// capitalize;

// const result = capitalize.join(" ");
// result;


// let originalString = "hello world";
// let word = originalString.split (" ");


// cara lain 

// const word = "hello world";
// let wordSplitArr = word.split(" ");

// console.log(wordSplitArr);

// for (let i = 0; i < wordSplitArr.length; i++) {
//     wordSplitArr[i] = wordSplitArr[i][0].toUpperCase() + wordSplitArr[i].slice(1);

//     console.log(wordSplitArr[i]);
//     console.log(wordSplitArr[i][0].toUpperCase());
//     console.log(wordSplitArr[i].slice(1));
// }

// console.log(wordSplitArr);
// console.log(wordSplitArr.join(" "));

// EXERCISE 7
// write a code to reverse string

// const word = "hello";
// const end = word.length -1;
// let newStr = "";

// for(let i = end; i >= 0; i--) {
//     newStr += word[i];
//     console.log(newStr);
// }

// console.log(newStr);

// pake built in method

// const kata = "hello";
// const reverse = kata.split("").reverse().join("");

// console.log(kata + " -> " + reverse);



// EXERCISE 8
// write a code to swap the case of each character from string

// const str = 'The QuiCk BrOwN Fox';
// const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const LOWER = 'abcdefghijklmnopqrstuvwxyz';
// let result = [];

// for (let i = 0; i < str.length; i++) {
//   if(UPPER.indexOf(str[i]) !== -1) {
//     result.push(str[i].toLowerCase());
//   } else if(LOWER.indexOf(str[i] !== -1)) {
//     result.push(str[i].toUpperCase());
//   } else {
//     result.push(str[i]);
//   }
// }
// console.log(result.join(''));


// cara mas daniel

// const inputString = "The QuiCk BrOwN Fox";
// let swappedString = "";

// for (let i = 0; i < inputString.length; i++) {
//     const char = inputString[i];

//     console.log(char);

//     if (char === inputString[i].toUpperCase()) {
//         swappedString += char.toLowerCase();
//     } else {
//         swappedString += char.toUpperCase();
//     }
// }

// console.log(swappedString);



// EXERCISE 9 
// write a code to find the largest of two integers

// const num1 = 42;
// const num2 = 27;

// console.log(num1 > num2 ? "benar" : "salah" );


// EXERCISE 10
// write a conditional statement to sort three numbers

// let num1 = 42;
// let num2 = 27;
// let num3 = 18;

// if (num1 > num2) {
//     let sort = num1;
//     num1 = num2;
//     num2 = sort;
// }

// if (num1 > num3) {
//     let sort = num1;
//     num1 = num3;
//     num3 = sort;
// }

// if (num2 > num3) {
//     let sort = num2;
//     num2 = num3;
//     num3 = sort
// }


// console.log(num1 + ', ' + num2 + ', ' + num3);


// cara mas daniel 

// const smallest = Math.min(num1, num2, num3);
// const largest = Math.max(num1, num2, num3);
// const middle = num1 + num2 + num3 - smallest - largest

// console.log(smallest);
// console.log(largest);
// console.log(middle);


// console.log(`${smallest} ${middle} ${largest}`);

// // cara lain

// let sortNum = [num1, num2, num3];
// console.log(sortNum.sort().join(' '));


// EXERCISE 11
// Write a code that shows 1 if the innput is a string, 2 if the input is a number, and 3 of others the data type

// let input = "mama";
// let result = "";

// if (typeof input === "string") {
//     result = 1;
// } else if (typeof input === "number") {
//     result = 2;
// } else {
//     result = 3;
// }

// console.log(result);
// console.log(input + " -> " + result);


// EXERCISE 12
// Write a code to change every letter into *from a string of input
// example: 'An apple a day keeps the doctor away' -> *n *pple * d*y keeps the doctor *w*y

// const str = "An apple a day keeps the doctor away";
// const modifiedStr = "*";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'a' || str[i] === 'A') {
//         result += modifiedStr;
//     } else {
//         result += str[i];
//     }
// }

// console.log(result);

// const inputString = "An apple a day keeps the doctor away".toLowerCase();
// const replaceWord = "a";
// let modifiedString = "";

// for (let i = 0; i < inputString.length; i++) {
//     if (inputString[i] === replaceWord) {
//         modifiedString += "*";
//     } else {
//         modifiedString += inputString[i];
//     }
// }

// console.log(modifiedString);