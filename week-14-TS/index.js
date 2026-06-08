"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1; // Type Inferencing is implicit in JS
let y = 1;
// same as int x = 1, in C language
console.log(x);
// x = "text"; is not allowed
console.log(x);
let name = "Act";
function greet(name) {
    console.log(`Hello ${name}`);
}
greet(name);
// "any" is also kind of datatype other than number and string
let num = 3;
let num2 = 7;
function add(n, n2) {
    return num + num2;
}
console.log(add(num, num2));
let age = 20;
function check(age) {
    if (age >= 18) {
        console.log("Legal");
    }
    else {
        console.log("Not legal");
    }
}
check(age);
function delayedFunc(fn) {
    setTimeout(fn, 3000);
}
function func() {
    console.log("hello");
}
delayedFunc(() => greet(name));
//# sourceMappingURL=index.js.map