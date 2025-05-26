let a=new Number(11120349.89363552);
console.log(a.toFixed(5));   //after decimal show value upto 5 digits
console.log(a.toPrecision(4)); // only retains 4 number in original numbers and does rounding off operation


console.log(Math.abs(-34));
console.log(Math.ceil(34.67));  //upshift
console.log(Math.floor(34.67)); //lowershift
console.log(Math.pow(3,5));
console.log(Math.sqrt(81));
console.log(Math.min(2,4,5,6,7,2,22,3,4,3,44,556,8));
console.log(Math.max(2,4,5,6,7,2,22,3,4,3,44,556,8));
 

                          // generating random number in specific range

                          console.log(Math.random());
                          console.log((Math.random()*10)+1);
                          console.log(Math.floor(Math.random()*10)+1);
                          
                          let min=11;
                          let max=16;
                          console.log(Math.floor(Math.random()*(max-min+1))+min)







