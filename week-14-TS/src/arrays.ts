function getMax(nums:number[]):number{
    let maxVal = -10000000;
    for(let i=0;i<nums.length;i++){
        if(nums[i]! >maxVal){
            maxVal=nums[i]!;
        }
    }
    return maxVal;
}
let ans = getMax([1,2,3,5,2,3]);
console.log(ans);

interface Address{
    city:string;
    pincode:string;
}

interface User{
    name:string;
    age:number;
    addresses:Address[];
}

let user1 : User={
    name:"Aryan",
    age:23,
    addresses:[]
}

interface LegalUserOrNot{
    name:string;
    age:number;
}

let user2:LegalUserOrNot={
    name: "Act",
    age:18
}
function isLegal(user:LegalUserOrNot[]){
    let ans = [];
    for(let i =0;i<user.length;i++){
        if(user[i]!.age>=18){
            ans.push(user[i]);
        }
    }
    return ans;
}
const res = isLegal([user2]);
console.log(res);
