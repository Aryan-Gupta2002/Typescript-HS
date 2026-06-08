
interface People{
    name:string,
    age:number,
    greet():string
}

let user:People={
    name:"Oni",
    age:31,
    greet(){
        return "Hello"
    } // greet is a function
}
let greeting = user.greet();
console.log(greeting);

interface Person{
    name:string,
    age:number    
}

class Manager implements Person{
    phn:number;
    constructor(public name:string,public age:number,phn:number){
        this.name = name;
        this.age= age;
        this.phn = phn;
    }
    
}
let newUser = new Manager("Aryan", 23, 22554);
console.log(`${newUser.name}`);