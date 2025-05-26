let mydate=new Date();
console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toString());
console.log(typeof(mydate));

// Creating my date object
let newdate=new Date(2005,5,22)
console.log(newdate.toDateString());
let hoursAndMinutesAlso=new Date(2003,2,21,4,23,16);
console.log(hoursAndMinutesAlso.toLocaleString());

//another way to initialize
let indiandate=new Date("12-07-2003")
console.log(indiandate.toLocaleString());

//time stamp
let myTimeStamp =Date.now();
console.log(myTimeStamp);
console.log(indiandate.getTime()); // time in millisecs from 1970.

//specifically find out month ,day,year from given date

let hr=new Date("11-03-2014");
console.log(hr.getMonth());








