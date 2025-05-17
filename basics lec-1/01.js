// Difference between Var and let. Both are used to declare variables.
// If we use var, then we can axis it before initialization, but will not happen in the case of let.

console.log(var1)       // We are accessing var before its initialization.
var var1 = "Mansih"

// console.log(let1)        // If we try to run it, then it will show error.
let let1 = "Manish"


// Difference between Number and String
let num1 = 10;
let num2 = 20;
let num3 = "20"
console.log(num1+num2)      // it's addi
console.log(typeof(num1+num2))
console.log(num1+num3)
console.log(typeof(num1+num3))
console.log("Sum of 10 and 20 is: "+num1+num2)
console.log("Sum of 10 and 20 is: " + (num1 + num2))
console.log(num1+num2+" is sum of 0 and 20.")

// Js Internal beauty
console.log(num1+num3)      // here Js engine concatenated the string and number.
console.log(num1-num3)      // here Js engine found that Subtraction can be done only on Numbers, so he converted the num3 string into a Number.
console.log(num1*num3)      // Here and in all below cases, the engine had converted the string to number. And this phenomenon of converting "string" into number at these situations is called "type-coersion"
console.log(num1/num3)
console.log(num1%num3)


// Getting User Input from Prompt(we need to use an browser to load this)
let input1 = prompt("Enter Your Age")
console.log(input1)
// But by-default, prompts take String Input. To convert them in Number:
let input2 = Number(prompt("Enter Your Age"))
console.log(input2)
// Or through this way
let input3 = prompt("Enter Your Age")
input3 = Number(input3)
console.log(input3)
// And these conversion of data type is called "type conversion" or "type casting".


// Swapping values of two variables through 3 different ways.

// way 1: Using another variable
let val1 = 10;
let val2 = 20;
let val3 = val1
val1 = val2; 
val2 = val3;

// way 2: using operators
let val4 = 10;
let val5 = 20;
val4 = val4 + val5;
val5 = val4 - val5;
val4 = val4 - val5;

// using swapping way
let val6 = 10;
let val7 = 20;
[val6,val7] = [val7,val6]