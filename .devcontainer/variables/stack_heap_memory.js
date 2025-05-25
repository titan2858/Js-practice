//stack memory - primitive data types 
let name="Hrishikesh"
let anothername=name
anothername="bankapur";
console.log(anothername);
console.log(name);

//heap momory- for non primitive data types 
let obj1={
    name:"Hrishikesh",
    age:21,
    class:10
}
let obj2=obj1;
obj2.age=25;
console.log(obj1.age);
console.log(obj2.age);

// Another way to declare the strings is to create the string object 
let myName=new String("Harish");  // in String constructor pass the value  








