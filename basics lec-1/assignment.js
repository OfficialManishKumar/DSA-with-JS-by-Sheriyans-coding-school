// Print Area of a Triangle
let height = 78;
let width = 87;
height*width

// Generate OTP between 1000 to 10000
Math.trunc(Math.random()*8999+1000)

// Print Area of Triangle using Hern's Formula
let side1 = 54;
let side2 = 87;
let side3 = 41;
let semi = (side1+side2+side3)/2
let area = Math.trunc(Math.sqrt(Math.abs(semi*(semi-side1)*(semi-side2)*(semi-side3))))
console.log(area)

// Circumference of Circle
let radius = 87;
console.log((2*Math.PI*radius).toFixed(2))