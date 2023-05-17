let player = {
    name : "Walter",
    chips : 110
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
 let message = ""
 let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-El")
 let playerEl = document.querySelector("#player-el")
 playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
    randomCard = Math.floor( Math.random()*13 ) + 1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}

function startGame() {
    if(isAlive == true && cards.length == 0 ){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum += firstCard + secondCard

    if(sum == 21){
        player.chips += 50
    }
    renderGame();
        }
    }
    


function renderGame() {

cardsEl.textContent = "Cards: " 
for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
}

sumEl.textContent = "Sum: " + sum;
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}

messageEl.textContent = message;
}

function newCard(){
    if(isAlive == true && sum < 21){
        console.log("Drawing a new card from the deck.")
        let drawnCard = Math.floor(Math.random() * (10 - 2 + 1) + 2)
        sum += drawnCard;
        cards.push(drawnCard);
        renderGame();
    }
   
}