var counter = document.querySelector(".counter");
var follower = document.querySelector(".followers");

let count =1;

setInterval(()=>{
    if(count<1000){
        count++;
        counter.innerText = count;
    }
},0.1);

setTimeout(() => {
    follower.innerText = "Followers on Instagram"
},4000) 