   const arr=["Javascript","CPP","Java","Python","Ruby"]
   arr.forEach( function(val)
   {
      console.log(val);                 // Syntax :- call back function madhe function la nav nastay
      
   }
)

 arr.forEach( (num)=>{
    console.log(num);                 // arrow function use kel
    
 })


 // +++++++++++++++++++++++++++++++++++++++++ ARRAY OF OBJECTS ++++++++++++++++++++++++++++++++++++++++

 const arr1=[  {
    name:"Harish",
    age:21
 },
 {
    name:"Akshat",
    age:22
 },
 {
    name:"Hrishikesh",
    age:23
 },
 {
    name:"yogesh",
    age:24
 }
]

arr1.forEach( function(item){
    console.log(item.age);
    console.log(item.name);
})