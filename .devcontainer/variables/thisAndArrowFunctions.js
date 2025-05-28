// this keyword referes to the current context  (Or) this refers to the object that is executing the current function.
// 1.
let user={
      username:"Ram",
      price:999,

      welcomeMessage:function()
      {
        console.log(`${this.username} welcome to the website`);
        console.log(this);
      }
}
user.welcomeMessage();

//2. in the global context or regular function, this refers to the global object (window in browsers).

function myname()
{
    console.log(this);
}
myname()
console.log(this);



//++++++++++++++++++++++++++++++++++++++++++++  ARROW FUNCTIONS ++++++++++++++++++++++++++++++++++++++
 
const addTwo=(num1,num2)=>{
    return num1+num2;    // implicit return
}
console.log(addTwo(3,8));

let addthree=(num1,num2,num3)=> ( num1+num2+num3)  //Explicit Return
console.log(addthree(3,4,5));

//Returning objects

let ReturnObjects=()=>({username:"hitesh"})
console.log(ReturnObjects());

//++++++++++++++++++++++++++++++++++++++++++++  IIFE (Immediately Invoked Function Expression) +++++++++++++++++++++
(function gf(name)
{
    console.log("hello"+name);
})(" Vaishnavi");      // Here we have to explicitely apply the semicolon to say it is end of line 
                       // Why beacuse IIFE doesn't konw where to stop the execution and where to not. Espeacially when we are using two IIFE's

// use of the arrow functions

((name)=>{
    console.log("Hello"+name)
})(" Hrishikesh")