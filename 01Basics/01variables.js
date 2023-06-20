// var fullName = "Praful Gupta";
// var city = "Kanpur";
// var college = "College Of Engineering Roorkee";
// var email = "guptapraful130@gmail.com"


// console.log(fullName);
// console.log(city);
// console.log(college);
// console.log(email);



// console.log(`
//     Hello My name is : ${fullName} 
//     and I belong to : ${city}
//     studying at : ${college}
//     and my email is : ${email}
// `)



// var orig = 799;
// var final = 199;
// var disc = Math.round(((orig-final)/orig)*100);
// console.log(disc);

// console.log(typeof disc);



function namastey(name, role){
    switch(role){
        case "admin": 
        console.log(`All access to Mr. ${name}`);
        break;

        case "subadmin": 
        console.log(`with access to create/delete courses to Mr. ${name}`);
        break;
        case "testprep": 
        console.log(`with access to create/delete tests to Mr. ${name}`);
        break;
        case "user": 
        console.log(`consume all content to Mr. ${name}`);
        break;
        default:
        console.log(`trial user to Mr. ${name}`);
        break;
    }
}

namastey("Yash", "admin");
namastey("Rahul", "subadmin");
namastey("Ujjawal", "testprep");
namastey("Utkarsh", "user");
namastey("Piyush", "other");