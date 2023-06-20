const cards = document.querySelectorAll(".card");
console.log(cards);

cards.forEach((card) => card.addEventListener("click",flip));

var isFlipped = false;
var firstCard, secondCard;

function flip(){
  // console.log("CArd flipped");

  // console.log(this);

  this.classList.add("flip");
  if(!isFlipped){
    isFlipped = true;
    firstCard = this;
  }else{
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);

    checkIt();
  }
   
}


function checkIt(){
  if(firstCard.dataset.image === secondCard.dataset.image){
    success();
  }else{
    fail();
  }
}

function success(){
  // console.log("success");
  firstCard.removeEventListener('click',flip);
  secondCard.removeEventListener('click',flip);
  reset();
}

function fail(){
  // console.log("Failed");

  setTimeout(() => {
    
    firstCard.classList.remove("flip")
    secondCard.classList.remove("flip")
    reset();
  }, 300);
}

function reset(){
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

// the shuffle function call itself as always the cards get shuffled when page reloads
(function shuffle(){
  cards.forEach((card) => {
    var index = Math.floor(Math.random()*16);
    card.style.order = index;
  });
})();

