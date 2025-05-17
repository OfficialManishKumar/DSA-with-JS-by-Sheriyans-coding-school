// In JS there are different types of Operators like 
// - Arithmetic Operator(+-*/%)
console.log(10+20)
console.log(10-20)
console.log(10*20)
console.log(10/20)
console.log(10%20)

// Comparison operators(== >= <= < > === != !== )
console.log(10 == 20)
console.log(10 >= 20)
console.log(10 <= 20)
console.log(10 === 20)
console.log(10 > 20)
console.log(10 < 20)
console.log(10 != 20)
console.log(10 !== 20)

// Logical Operators(&& || !)
console.log(10 > 20 && 10 < 20)
console.log(10 > 20 || 10 < 20)

// Urnary(Increment and Decrement) operator(++pre post++ --pre post--)
// pre increment or decrement is applied before anything happens
// post is applied after that step

let a = 15;
let b = 15;
let c = 15;
let d = 15;
console.log(a++)
console.log(++b)
console.log(c--)
console.log(--d)        // In the observation, we can see that, posr increments is applied after the console already printed whereas in pre increment or decrement, it is working before even the console printed.

// We cannot apply urnary operatoe to any constant
// console.log(10++)
// console.log(++10)