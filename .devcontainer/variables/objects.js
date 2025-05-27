// how to declare the objects ?
let obj={
    name:"Hrishikesh",
    age:21,
    Address:"Ganesh Nagar",
    IsLoggedIn:true,
    "Weight is":65.93,
    spouse:undefined,
    "lastLoginDays":["Monday","Tuesday"]
}

//When we want to access "Weight is" scince we have wantedly defined it as string. we will define it as follows
console.log(obj["Weight is"]);

//Else To access it we use normal method
console.log(obj.Address);
console.log(obj.IsLoggedIn);
console.log(obj.lastLoginDays);


//After using the .freeze() method  ,the value of any element in object cannot be changed . It is fixed i.e freeze  
Object.freeze(obj)
obj.Address="kolhapur"
console.log(obj);  // it won't be changed


// Two ways to declare objects
//1st
let myObj={}
//2nd
let myObj1=new Object();

myObj.Address="Nagpur"
myObj.age=34
myObj.name="Hitman"
console.log(myObj);

// Objects ke andar objects
myObj.marks={
    TOC:86,
    OS:70,
    Maths:90,
    SE:93
}

console.log(myObj.marks.SE);

//Adding two or more objects in one object
let a={ 1:"a",2:"b",3:"c"}
let b={ 4:"d",5:"e",6:"f"}
let c={a,b};
 console.log(c);

 //Combining two or more objects in one object. combining is different than the pushing one object into another
 let d=Object.assign(a,b);   //  SYNTAX 1 for combining
 console.log(d);

 d={...a,...b}              //   SYNTAX 2 for combining . ...is spread operator used to split array or objects into individual elements
 console.log(d);




 // We can also have array of objects
 let arr=[{name:"hr",email:"abs@gmail.com",age:23},{name:"jn",email:"jn@gmail.com",age:34}]
 // and how to access it
 console.log(arr[0].age);


 //to print all the keys and all the values
 console.log(Object.keys(obj));
 console.log(Object.values(obj));
 
 
 

 










