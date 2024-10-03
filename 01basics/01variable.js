const accountId=14553
let accountEmail="nukta@google.com"
var accountPassword="12345"
accountCity="Jaipur"


let accountState;         // not necessary to put ";" in  end of code of js

// accountId=12356          // not allowed as it is const and cant be changes throughout code
accountEmail="vnukta@google.com"
accountPassword="21212121"
accountCity="Bengaluru"

/*
Prefer not to use "var" because of issue in block scope and functional scope. 
scope means 
{   
    //code   
}
    
*/

//print ke liye commands
console.log(accountId)     // prints accountId 
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])  // will print values in table form and for accountstate it will print undefined
