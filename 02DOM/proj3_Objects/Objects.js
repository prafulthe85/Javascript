var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count of ${this.firstName} is ${this.courseCount}`)
    };
};

// prototype injects the function inside the constructor and when the new object is created then it can access all these functions also

//              nameof_func
User.prototype.getFirstname = function(){
    console.log(`Your firstName is ${this.firstName}`);
}

var hitesh = new User("hitesh",2);
// console.log(hitesh);
hitesh.getCourseCount();
// hitesh.getFirstname();


//    it checks if it contains that property or not
if(hitesh.hasOwnProperty("firstNamee")){
    hitesh.getFirstname();
}
else{
    console.log("firstName not defined");
}

var sam = new User ("sam",1);
// console.log(sam);
sam.getCourseCount();
sam.getFirstname();