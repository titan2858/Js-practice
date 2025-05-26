
// Arrys in js are independent of data types 
let arr=[1,3,5,3,"Hrishikesh",true,false,3.445]
console.log(typeof(arr));
console.log(arr)
let arr1=new Array(1,2,3,4,"Hiroshima",true,23.44);
let arr2=new Array()
console.log(typeof(arr2))
let hr=arr[0];
console.log(hr)
arr.reverse()
console.log(arr)

//Join method combines all array elements separated by commas into one string 
let array4=arr.join();
console.log(array4);

console.log(typeof(arr[5]));


//push method appends the element at the end
arr.push(69);
console.log(arr);
//pop removes the element at the end
arr.pop()
console.log(arr);
//unshift add at the front 
arr.unshift("IT")
console.log(arr);
// includes method checks whether element is present or not
console.log(arr.includes(34));
//indexof method returns the element od element in array if any else -1
console.log(arr.indexOf("Hrishikesh"));
//slice method slices the part from begin to end ,also doesnt include end without changing the original array
console.log(arr.slice(2,6));
//splice method slices the part from begin to end ,also  includes end . It changes the original array
console.log(arr.splice(2,6));
//and thus it changes in original arry as follows
console.log(arr);

//concat Method combines two arrays 
let arrq=[2,3,4,5];
let arrw=[6,7,8];
let arre=[9];
arrq.concat(arrw);
console.log(arrq); //it does not return modified value since .concat method does't change original array
console.log(arrq.concat(arrw,arre));  //this is correct way

//another way to combine two or more arrays is spread

let arrt=[...arrw, ...arrq, ...arre]
console.log(arrt);


//converting anything into array
let hb="Hello world"
let ab=Array.from(hb)    // Array.from() Converts array-like or iterable objects into an actual Array.
console.log(ab);

let l=50
let m=600
let n=44
let hj=Array.of(l,m,n);   //  Array.of() Creates a new Array from its arguments, regardless of the number or type.
console.log(hj);











 