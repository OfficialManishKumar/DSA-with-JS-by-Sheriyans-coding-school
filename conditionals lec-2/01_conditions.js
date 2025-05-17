// Checking if the User is eligible to vote or not
age = 15; // let age = Number(prompt("Enter your Age: "))
// Checking if the user age is "Nan", we cannot check it using "typeof" because it's not same, instead we had to use "isNaN()" function.
if (isNaN(age) === true){
    console.log("Invalid Input")
}
else{
    if (age>= 18){
        console.log(`User is Eligible to vote.`)
    }
    else{
        console.log(`User  is not eligble to vote.`)
    }
}
// If we write more than 15 times digit "9" in decimal place in 17 in this code, then it's shpwing that I am eligible but it should not have to happen.

// Write a condition that gives us the final amount to pay by seeing the "amount" and discunt percentage from this:
// 0-5000 = 0%; 5001-7000 = 5%; 7001-9000 = 10%; 9001-unlimited = 20%;
amount = 5320; // let amount = Number(prompt("Enter your Amount: "))
if (amount > 0 && amount <= 5000){
    console.log(amount)
}
else if(amount > 5000 && amount <= 7000){
    console.log(amount-((amount*5)/100))
}
else if(amount > 7000 && amount <= 9000){
    console.log(amount-((amount*10)/100))
}
else if(amount > 9000){
    console.log(amount-((amount*20)/100))
}
else{
    console.log(`Invalid Amount`)
}


// get the Total amount we need to pay for our required quantity demand
// upto 100 = 4.2/unit; 101-200 = 6/unit; 201-400 = 8/unit; more than 400 = 13/unit;

quantity = 545; // let quantity = Number(prompt("Enter the quantity you want: "))

let totalAmount = 0;
while (quantity > 0){
    if(quantity > 400){
        quantity -= 400;
        totalAmount += 400*13;
    }else if(quantity > 200 || quantity == 400){
        quantity -= 200;
        totalAmount += 200*8
    }else if (quantity > 100 || quantity == 200){
        quantity -= 100;
        totalAmount += 100*6
    }else if (quantity <= 100){
        totalAmount += quantity*4.2;
        quantity = 0;
        console.log(totalAmount)
    }else{
        console.log("Invalid Quantity")
    }
}

// INR denomination
function inrDenomination(amount){
    let inrAmount = amount;
    if(inrAmount>=500){
        let n = 1;
        while(((n+1)*500)<inrAmount){
            n += 1
        }
        inrAmount -= n*500;
        console.log(`${n} notes of rupees 500`)
    }
    if(inrAmount>=200){
        let n = 1;
        while((n+1)*200<inrAmount){
            n += 1
        }
        inrAmount -= n*200;
        console.log(`${n} notes of rupees 200`)
    }
    if(inrAmount>=100){
        let n = 1;
        while((n+1)*100<inrAmount){
            n += 1
        }
        inrAmount -= n*100;
        console.log(`${n} notes of rupees 100`)
    }
    if(inrAmount>=50){
        let n = 1;
        while((n+1)*50<inrAmount){
            n += 1
        }
        inrAmount -= n*50;
        console.log(`${n} notes of rupees 50`)
    }
    if(inrAmount>=20){
        let n = 1;
        while((n+1)*20<inrAmount){
            n += 1
        }
        inrAmount -= n*20;
        console.log(`${n} notes of rupees 20`)
    }
    if(inrAmount>=10){
        let n = 1;
        while((n+1)*10<inrAmount){
            n += 1
        }
        inrAmount -= n*10;
        console.log(`${n} notes of rupees 10`)
    }
    if(inrAmount>=5){
        let n = 1;
        while((n+1)*5<inrAmount){
            n += 1
        }
        inrAmount -= n*5;
        console.log(`${n} coins of 5 rupees`)
    }
    if(inrAmount>=2){
        let n = 1;
        while((n+1)*2<inrAmount){
            n += 1
        }
        inrAmount -= n*2;
        console.log(`${n} coins of 2 rupees`)
    }
    if(inrAmount>=1){
        let n = 1;
        while((n+1)*1<inrAmount){
            n += 1
        }
        inrAmount -= n*1;
        console.log(`${n} coins of 1 rupees`)
    }
}
inrDenomination(87875451)