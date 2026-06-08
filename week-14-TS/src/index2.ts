function greet(user:userType){
    console.log(`Hello ${user.name}`);
}

greet({
    name:"act",
    age:23
})// greet is an object passed to a function

interface userType {
    name:string,
    age:number
}