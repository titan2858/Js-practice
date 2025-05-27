let course={
    courseInstructor:"H.M.Bankapur",
    price:999,
    name:"TOC"
}
//How to destructure it
const{courseInstructor}=course
//due to above syntax we can actually access courseInstructor without object
console.log(courseInstructor); //like this

// if the name courseinstructor is too big you can change th ename also
const{courseInstructor:abc}=course
console.log(abc); //like this


