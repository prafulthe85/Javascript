class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    // the # keyword is used to declare as private variable
    #courseList = [];

    getInfo(){
        return {name: this.name, email : this.email};
    }
    enrollCourse(name){
        this.#courseList.push(name);
    }
    getCourseList(){
        return this.#courseList;
    }
    // Here the static keyword is used to declare private method and it cannot be used by any child class or grandchild one
    static login(){
        return "You are logged in";
    }
}

module.exports = User;

const rock = new User("rock","rock@gmail.com");
// console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
// console.log(rock.getCourseList());
// so now after declaring private variable you cannot call them directly
// console.log(rock.courseList);

class SubAdmin extends User{
    constructor(name, email){
        // Here if you want to use methods and some keywords of parent class then use super keyword
        super(name,email);
    }

    getAdminInfo(){
        return "I am subadmin";
    }
// here login is overwrite here but not for static method
    // login(){
    //     return "login for admin only";
    // }

}

const tom = new SubAdmin("tom","tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.getInfo());
// console.log(tom.login());