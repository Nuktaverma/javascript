

if(true){
    let a=10
    const b=20
    var c=30
}

//console.log(a);   //error
//console.log(b);  //error
//console.log(c);  //30



function one(params) {
    const username="Nukta"

    function two(params) {
        const website="youtube"
        //console.log(username);
    }
    //console.log(website);

      two()    
}
one()


if(true){
    const username="Nukta"
    if(username=="Nukta"){
        const website="youtube"
        //console.log(username+" "+website);
    }
    //console.log(website);
    
}
//console.log(username);



//+++++++++++++++++++++++++++++interesting +++++++++++++++++++++

console.log(addone(5));

function addone(num) {
    return num+1
}


const addTwo=function(num) {
    return num+2
}
console.log(addTwo(5))