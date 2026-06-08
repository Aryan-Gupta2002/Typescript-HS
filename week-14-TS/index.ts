let x: number = 1; // Type Inferencing is implicit in JS
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

// "any" is also kind of datatype other than number and string

let num :number = 3
let num2 : number = 7
function add(n:number,n2:number):number{
    return num+num2;
}
console.log(add(num,num2)); 

let age : number = 20;
function check(age:number){
    if (age >=18){
        console.log("Legal");
    }
    else{
        console.log("Not legal");
    }
}
check(age);

function delayedFunc(fn:()=>void | ((a:string)=> void)){
    setTimeout(fn,3000);
}
function func(){
    console.log("hello");
}
delayedFunc(()=> greet(name));