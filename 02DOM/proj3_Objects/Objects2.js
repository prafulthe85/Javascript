// function init(){
//     var firstName = "hitesh";
//     console.log("I am init");
//     function sayFirstName() {
//         console.log(firstName);
//     }
//     return sayFirstName;
// }

// //   after execution of init the function sayFirstName is stored in value
// var value = init();


// // now to execute value call in this manner, this is closure
// value();

function addNumber(x){
    return function(y){
        return x+y;
    }
}

var add5 = addNumber(5);
console.log(add5(6)); 

// this is how to call a function in closure without storing func in another variable
console.log((addNumber(5)(2)));

// doAddition()()() // concept : curring