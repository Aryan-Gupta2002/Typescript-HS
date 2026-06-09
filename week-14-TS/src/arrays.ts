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
