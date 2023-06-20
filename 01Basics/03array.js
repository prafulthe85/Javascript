function isEven(element){
    // if(element%2===0){
    //     return true;
    // }
    // return false;

    return element%2===0
}

// console.log(isEven(2));

var isresult = [2,4,6,8].every(isEven);
// console.log(isresult);


var isresult2 = [2,5,6,8].every((e)=>{
    return e%2==0;
})
console.log(isresult2);


var tetarr = [2,3,5,6,7,4,1];

console.log(tetarr.fill("h",2,5)); /// it fills the "h" from index 2 to index 5
