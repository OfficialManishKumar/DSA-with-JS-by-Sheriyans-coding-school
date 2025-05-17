// Methods available in pre-installed Math Library.

// "Math.round" gives us the nearest Integer value
Math.round(10.4)        // Will give 10, because it less than "0.5"
Math.round(10.6)        // Will give 11, because it more than "0.5"
Math.round(10.5)        // Will give 11, because it "0.5" is counted as above

// "Math.trunc" just removes the decimals, neither give upper nor lower value
Math.trunc(18.8787)
Math.trunc(18.87)
Math.trunc(18)
Math.trunc(0.18)

// "Math.pow" gives the power value of given Integers
Math.pow(2,5)
Math.pow(3,5)
Math.pow(5,5)

// "Math.sqrt" gives square root of the given value and "Math.cbrt" gives the cube root of given value
Math.sqrt(9)
Math.cbrt(27)

// "Math.abs" returns the positive value of negative values 
Math.abs(-15)
Math.abs(15)

// "Math.max" returns the highest Integer from lots of Number
Math.max(458,49,79,8,84)
Math.max(87)

// "Math.random" returns any random number between 0 and 1
Math.random()
// let we wanna to get between 1000 to 10000
Math.trunc(Math.random()*8999 + 1000)

// "Math.toFixed(x)" returns the number of "x" decimal digits but the output's type becomes string
let a = 25;
a.toFixed(2);