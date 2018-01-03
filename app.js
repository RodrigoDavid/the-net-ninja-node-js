// normal function statement
function sayHi() {
    console.log('hi!');
}

sayHi();

// function expression
var sayBye = function () {
    console.log('bye!');
};

sayBye();

// call function inside another function
function callFunction(fun) {
 fun();
}

callFunction(sayHi);
callFunction(sayBye);