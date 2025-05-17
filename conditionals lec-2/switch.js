// "switch" is similar as "if-else" condition
// switch syntax:
// switch (condition){
//     case condition:
//         if condition is true;
//         break;

//     case condition:
//         if condition is true;
//         break;
// }

// Printing the week-day name as per the day number
let day = 6
switch (day){
    case 1:
        console.log("Today is Monday")
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday")
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid Day");
        break;
}

// Now, why do we written "break". Let's understand
day = 2
// switch (day){
//     case 1:
//         console.log("Today is Monday")
//     case 2:
//         console.log("Today is Tuesday");
//     default:
//         console.log("Invalid Day");
// }
// Here we had not written break, now let's observe:
// Here we can see that, because we had not written break, all code after the true condition is runned, even when that is not fulfilling the condition

// Running a code block in number of true conditions
let biologically = "human"
switch (biologically){
    case "Human":
    case "human":
    case "Human Being":
    case "human being":
        console.log("He is an Human biologically.");
        break;
    case "animal":
        console.log("He is an Animal Biologically.");
        break;
    default:
        console.log("Invalid Biological Identity")
}

// We can also check condition is "switch" keyword
switch(true){
    case 19<6:
        console.log("19 is lesser than 6");
        break;
    case 25>5:
        console.log("25 is greater that 5");
        break;
    default:
        console.log("No condition is available")
}

// And if more than one condition is true, the first one which is true, wil work because we had used "break"
switch(true){
    case 19>6:
        console.log("19 is greater than 6");
        break;
    case 25>5:
        console.log("25 is greater that 5");
        break;
    default:
        console.log("No condition is available")
}

// Switch is used when the condition's cases are predictable between some values(like just 1,2,3 etc.), and if can be used in any case, but it's code length becomes long for predictable values.

// In JS, there is an preision issue, that we can see from this swith case
let number = 0.1+0.2;
switch(number){
    case 0.3:
        console.log("Result is 0.3");
        break;
    case 0.4:
        console.log("Result is 0.4");
        break;
    default:
        console.log("Invalid input");
        break;
}