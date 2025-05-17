// Ternary Operator
// Syntax of Ternary operator:
// condition ? if conditon is true : if condition is false

//  Examples and ways:
112>13 ? console.log(`112 is greater than 13`) : console.log(`112 is lesser than 13`);
112<13 ? console.log(`13 is greater than 112`) : console.log(`13 is lesser than 112`);
console.log(112<13 ? `13 is greater than 112` : `13 is lesser than 112`)
console.log(112>13 ? `112 is greater than 13` : `112 is lesser than 13`);


// Nested Ternary operator
// finding whether a number is positive or zero or negative
let number = -10;
console.log(number>0 ? `${number} is positive`: number == 0 ? `${number} is Zero` : `${number} is Negative`)