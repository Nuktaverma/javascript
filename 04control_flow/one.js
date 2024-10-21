// if

// <,>,<=,>=,==,!= , ===

// const isUserLoggedIn = true
const temperature=41

// if(temperature<=50)
// {
//     console.log("less than 50")
// } 
// else
// {
//     console.log("temperature is greater than 50");
// }



const score=200

// if(score>100){
//     let power="fly"
//     console.log(`User power: ${power}`);
    
// }
// console.log(`User score: ${power}`);




const balance=1000

// if (balance>500) console.log("test")




// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 750")
// }
// else{
//     console.log("Less than 1200")
// }




const isUserLoggedIn= true
const debitCard= true
const loggedInfromGoogle= false
const loggedInfromEmail= true

if(isUserLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInfromGoogle || loggedInfromEmail){
    console.log("User logged in")
}

