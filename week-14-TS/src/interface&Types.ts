interface Address{
        city:string;
        country:string;
        pincode:number
}
interface User {
    name:string;
    age:number;
    address?: Address
} // adding "?" , means whole "address object is now optional to give"
// interfaces can use another interface 

interface office{
    address:Address
}

let user1 : User={
    name:"Act",
    age:23,
    address:{
        city:"Dehradun",
        country:"India",
        pincode:248001
    }
}

let user2 : User={
    name:"Act2",
    age:17
}

function isLegal(user:User):boolean{
    if(user.age > 18){
        return true;    
    }
    else{
        return false;
    }
}

let ans = isLegal(user1);
if(ans){
    console.log("Legal");
}else{
    console.log("Illegal");
}