// EXERCISE 1
// convert celcius to fahrenheit

const celcius = 60;

const fahrenheit = ((celcius * 9/5)) + 32;

console.log(`${fahrenheit} fahrenheit`);


// fahrenheit to celcius
const fah = 140;

const cel = ((fah - 32) * 5) / 9;

console.log(fah + "fah to cel = ", cel + "C");

// EXERCISE 2

const number = 25;

if (number % 2 !== 0) {
    console.log("bilangan ganjil");
} else {
    console.log("bilagan genap");
}

// PAKE CARA TERNARY

const num = 25

console.log(num % 2 === 0 ? "genap" : "ganjil");


// EXERCISE 3

const i = 7
    if (i % 2 == 1 && i % 3 == 1) {
        console.log(`${i} adalah bilangan prima`)
    } else if (i % 2 !== 1 && i % 3 !== 1) {
        console.log(`${i} bukan bilangan prima`);
    }


// cara lain

const numb = 7;
let isPrime = true;

for (let x = 2; x < numb; x++) {
    if (numb % x == 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime);


// EXEERCISE 4

const n = 5
let sum = 0
let message = ""

for (let i = 1; i <= n; i++) {
    console.log(i);
    
    sum = sum + i;

    message += i + (i !== n ? " + " : "");

    }
    console.log("sum :", sum);
    console.log(message + " = " + sum);



// EXERCISE 5

const q = 6;
let sump = 1;
let pesan = "";

for (let j = q; j > 0; j--) {
    console.log(j);
    sump *=  j;

    pesan += j + (j === 1 ? "" : " x ")
}

console.log("sump:", sump);
console.log(pesan + " = " + sump);



// EXERCISE 6

const angka = 15;
let n1 = 0; n2 = 1;

for (let k = 1; k <= angka; k++) {
    console.log(k);
    
    fibo = n1 + n2;
    n1 = n2;
    n2 = fibo;
    console.log(n1);
}

console.log(n1);