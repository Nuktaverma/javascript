// Immediately Invoked Function Expressions (IIFE)
// global scope ke pollution se problem hoti hai kyi baar to global scope se polltion htane ke liye iife ka use kiya
// ()();
(function chai(){
    // named IIFE
    console.log(`DB Connected`);
})();


( (name)=>{
    console.log(`DB Connected Two ${name}`);
    }
)('Nukta');