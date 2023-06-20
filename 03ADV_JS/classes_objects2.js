// import User fron "./classes_objects.js";
// when use in Library

const User = require("./classes_objects.js");

const hitesh = new User ("hitesh", "hitesh@lco.com");

console.log(hitesh.getInfo());

hitesh.enrollCourse("React in One Shot");
hitesh.enrollCourse("Javascript course in 30 projects");

let courses = hitesh.getCourseList();

courses.forEach(e => console.log(e));