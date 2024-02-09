//EXERCISE 2
const rectangleLength = 5;
const rectangleWidth = 3;

const rectanglePerimeter = 2 * (rectangleLength + rectangleWidth)

console.log(rectanglePerimeter);



// EXERCISE 3
const circleRadius = 5;
const circleDiameter = 2 * circleRadius;
const pii = 22/7;

const circleCircumference = pii * circleDiameter

console.log(circleCircumference);

const circleArea = pii * circleRadius ** 2

console.log(circleArea);



// EXERCISE 4
const angleA = 80;
const angleB = 65;
const angle = 180;

const angleC = angle - (angleA + angleB);

console.log(angleC);



// EXERCISE 5
const date1 = new Date ("2022-01-20");
const date2 = new Date ("2022-01-22");

const date = (date2.getDay()) - (date1.getDay());

console.log(date);



// EXERCISE 6
const days1 = 400;
const days2 = 366;

const years1 = Math.floor(days1 / 365);
const months1 = Math.floor(days1 % 365 / 30);
const day1 = Math.floor(days1 % 365 % 30);

console.log(years1, months1, day1);


const years2 = Math.floor(days2 / 365);
const month2 = Math.floor(days2 % 365 / 30);
const day2 = Math.floor(days2 % 365 % 30);

console.log(years2 , month2, day2);





