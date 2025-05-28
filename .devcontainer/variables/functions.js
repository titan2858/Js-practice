//Basic Declaration of the function
function syMyName()
{
    console.log("Hrishikesh");
    
}

//for calling just write name of function followed by parenthesis
syMyName();

//Function to add two numbers
function addTwoNumbers(num1,num2)
{
    console.log(num1+num2);
    
}
addTwoNumbers(3,true)  //true will be typecasted to 1
addTwoNumbers(767.98,987.087) 
addTwoNumbers("Hrishikesh","Bankapur")  //it will do concatenation

function loginUserMessage(username)
{
    return `${username} has just arrived`
}
loginUserMessage("Hrishikesh")  //it wont be printed .becaues we have used console.log() also we have not stored value in any variable
console.log(loginUserMessage("Yogesh"));
//if value is not passed it will be stored as undefined as usuall
console.log(loginUserMessage());

// using res operator in function parameters
function calculateCartPrice(...num1)
{
    console.log(num1);
    
}
calculateCartPrice(200,300,304);  //it will return as array

function abc(num1,num2,...num3)
{
    return num3        //here num1=34,num2=54 and num3=rest of the numbers
}
console.log(abc(34,54,36,67,89,42,31))

//handling the objects
let obj={
    name:"Hrishikesh",
    age:21,
    weight:65.22
}
function hr(anyObject)
{
    //Accessing the object elements using function
    console.log(anyObject.age);
    console.log(anyObject.name);
    console.log(anyObject.weight)
}
hr(obj);

//we can have functions inside the functions 

function one()
{
    let username="Hrishikesh"

    function two()
    {
        let website="google.com"
        console.log(username);
        
    }
    //console.log(website);
    two();
}
one()





//+++++++++++++++++++++++++++++++++++++++++++ Two Ways to define the functions ++++++++++++++++++++++++++++++++++++++++++++++
// 1St way
hr(5);   //we can call it anywhere
function hr(num1)
{
        return num1+1;
}

// 2nd way   . Here we have defined the function and stored it in the variable

hb(5)  // this is not correct
let hb=function(num2)
{
    return num2+1;
}
hb(5)  //this is correct




