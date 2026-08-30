// Global Scope
let appName="Sui & Suto";
console.log(appName);
appName="Sui&Suto";
console.log(appName);
function changeAppName(){
    // Function Scope or Local Scope
    appName="Sui & Style";
    console.log(appName);
}
changeAppName();
appName="Sui & Suto";
console.log(appName);
console.log(appName);

let x=10;
function changeValue(){
    x=20;
    let y=x;
    console.log(y);
    console.log(x);
}

console.log(x);
changeValue();
console.log(x);
// console.log(y);

// Hoisting=> Doing something before declaring it
console.log(a);
var a=10;

// TDZ=> Temporal Dead Zone=> In JS TDZ is the period where a variable has been created in its scope but can not yet be accessed untill declaration hasn't been reached.
// console.log(b);
// let b=20;

// Lexical Scope=> The scope of a variable is defined by its location within the source code, and nested functions have access to variables declared in their outer scope.

const name="Global";
function outerFunction(){
    const name="Outer";
    function innerFunction(){
        console.log(name);
    }
    innerFunction();
}
outerFunction();
console.log(name);

// Closure
// Middlware
// Authentication
// Caching
function counter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
const res=counter()();
console.log(res);
const increment=counter();
console.log(increment());
console.log(increment());
console.log(increment());
// IEFE=> Immediately Invoked Function Expression
console.log(counter()());