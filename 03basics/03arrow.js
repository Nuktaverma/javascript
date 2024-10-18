const user={
    username:"Nukta",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username}, welcome to website`);  
        // console.log(this)
    }
    
}
// user.welcomemessage()
// user.username="Sam"
// user.welcomemessage()

//console.log(this)

// function chai(){
//     let username="Nukta"
//     console.log(this);   
// }
// chai()

/*
const chai= function(){
    let username="Nukta"
    console.log(this.username);
}

chai()
*/

/// Arrow functions    ()=>{}

const chai=() => {
    let username="Nukta"
    console.log(this.username);
}
//chai()

/*
const addtwo=(num1,num2)=>{
    return num1+num2
}
console.log(addtwo(3,4))
*/


// implicit return

//const addtwo=(num1,num2)=> num1+num2
//const addtwo=(num1,num2)=> (num1+num2)
const addtwo=(num1,num2)=> ({username:"Nukta"})

//console.log(addtwo(3,4))


//const myArray=[2,5,3,7,8]

//myArray.forEach()