const hitesh = {
    firstName : "Hitesh",
    lastName : "Choudhary",
    courseCount : 3,
    role: "Admin",
    getInfo : function(){
        console.log(`
            First name is ${this.firstName}
            Last name is ${this.lastName}
            His role is ${this.role}
            and he is enrolled in ${this.courseCount} courses
        `);
    },
};

const dj = {
    firstName : "Rock",
    rollno : 5,
    lastName : "DJ",
    role : "Sub-Admin",
    courseCount : 5,
}

hitesh.getInfo();
// dj.getInfo();

// here bind is used to bind the func of hitesh to dj with same variables
// for extra variable they not get printed
var djInfo = hitesh.getInfo.bind(dj);
djInfo();