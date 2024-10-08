//singleton

// object literals

const mySym=Symbol("key1")

const JsUser={
    name: "Nukta",
    "full name":"Nukta Verma",
    [mySym]:"Mykey1",
    age:20,
    location:"Ludhiana",
    email:"Nukta@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email="Nukta@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email="Nuktaverma@microsoft.com"
//console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello js user");
}
JsUser.greetingTwo=function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


