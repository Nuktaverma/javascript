// for of

// for (const element of object) {  // object here means kis cheez par loop lgana hai
    
// }

const arr=[1,2,3,4,5]
for (const num of arr) {  
   // console.log(num);
    
}

const greetings="Hello, world!"
for(const greets of greetings){
    //console.log(`Each char is ${greets}`); 
}

// Maps   {in order and unique}

const map=new Map();
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

//console.log(map);


for (const [key,value] of map) {
    //console.log(key,':-', value);
    
}

const myObject={
    'game1': 'NFS',
    'game2':'Spiderman'
}
 
for (const [key, value] of myObject) {   // myObject is not iterable
    //console.log(key,':-', value);
}

