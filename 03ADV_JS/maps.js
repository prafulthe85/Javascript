var myMap = new Map();

myMap.set(1,"Hello");
myMap.set(2,"I");
myMap.set(3,"am");
myMap.set(4,"Praful");

console.log(myMap);

// for(let key of myMap.keys()){
//     console.log(`Key is ${key}`);
// }

// for(let value of myMap.values()){
//     console.log(`value is ${value}`);
// }


// Here value is at 2nd index and key at first;
for(let [k,v] of myMap){
    console.log(`key is ${k} and value is ${v}`);
}

// Here value is at first index and key at 2nd 
myMap.forEach((v,k)=> console.log(`key is ${k} and value is ${v}`));