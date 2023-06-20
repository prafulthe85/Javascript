const Uno = () => {
    return "I am One";
};

// Here we want that till the Dos not finishes the execution will wait to complete dos
// const Dos = () => {
//     setTimeout(() => {
//         return "I am two";
//     }, 3000);
// };

// so we write like this
const Dos = () => {
    return new Promise ((resolve,resject)=>{
        // resolve("Dos is here");

        // reject means raising an error 
        setTimeout(() => {
            resolve("I am two");  
        }, 3000);
    })
}

 const Tres = () =>{
    return "I am tres";
 };


// Here async and await is used so that till the dos() is not executed the program will wait for them to execute
 const CallMe  = async () =>{
    let valone = Uno();
    console.log(valone);

    let valtwo = await Dos();
    console.log(valtwo);

    let valthree = Tres();
    console.log(valthree);
 }

 CallMe();