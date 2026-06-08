let x: number = 1; // Type Inferencing
let y: number|string = 1;
// same as int x = 1, in C language
console.log(x);
// x = "text"; is not allowed
console.log(x);

let name:string = "Act";
function greet(name : string){
    console.log(`Hello ${name}`);
}
greet(name);