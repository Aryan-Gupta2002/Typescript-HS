function greet(user:{
    name:string,
    age:number
}){
    console.log(`Hello ${user.name}`);
}
greet({
    name:"act",
    age:23
})