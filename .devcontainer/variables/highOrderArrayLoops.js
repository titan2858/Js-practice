const arr=[2,4,7,2,8]
// this is for-of loop
for(const num of arr)
{
    console.log(num);
}

for (const key in arr) {
        console.log(arr[key]);     // in arrays both for-in and for-of loops can be used
        
    }


let greet="Hello world"
for (const char of greet) {
    console.log(char);
    
}


// +++++++++++++++++++++++++++++++ MAPS ++++++++++++++++++++++++++++++++++++++++++++

let mpp= new Map;
mpp.set(1,"India")
mpp.set(2,"USA")
mpp.set(3,"UK")
mpp.set(4,"Russia")
mpp.set(5,"France")
console.log(mpp);  

for (const it of mpp) {
    console.log(it[1]);  // values
    console.log(it);   //keys,value array
    console.log(it[0]);  //keys   
}

// for printing both at a time
for (const [key,value] of mpp) 
{
    console.log(key,"Means",value);
    
}


//+++++++++++++++++++++++++++++++++++++++++ for-in loops on objects ++++++++++++++++++++++++++

let hr={
    "name":"Hrishikesh",
    "age":21,
    "price":234.45
}
for (const key in hr)
    {
        console.log(hr[key]);   // accessing the values
        console.log(key);
        
    }

    