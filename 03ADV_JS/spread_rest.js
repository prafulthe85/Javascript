var myObj = {};

Object.assign(myObj, {x:1, y:2, z:3}, {a:4,b:5});

// console.log(myObj);

function sumOne(a,b){
    return a+b;
}

var myA = [4,5];

// console.log(sumOne(4,5));  // 9
// console.log(sumOne(myA));  // 4,5undefined


// this is spread operator when we call the function and pass the values and here we pass whole arr myA so to spread it we use ...args // this is what spread operator do
// console.log(sumOne(...myA)); // 9


// here thiss ...args is acting as a rest operator and when you pass no. of objects to a function and the values overload this rest operator deals with those extra values like here 2, 3 are the first 2 values to be used in function for mulitply and rest are used for sum so in function you have to deal with both
function sumTwo(a,b,...args){
    console.log(args); // [ 1, 1, 1, 2 ]
    let multi = a*b;
    let sum = 0;
    for(const arg of args){
        sum += arg;
    }
    return [sum,multi];
}

console.log(sumTwo(2,3,1,1,1,2)); //  [ 5, 6 ]
