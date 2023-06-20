const MyUser = {
    name : "Hitesh",
    courseCount : 4,
    role : "admin",
};

console.log(MyUser.courseCount);

// Here the name of variables of objects should be same 
// like |     |           |
const {name,courseCount,role} = MyUser;

console.log(name);
console.log(role);
