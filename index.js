let player = {
    name: "Steven",
    chips: 907
}
let cards = [];
let sum = 0;
let message = "";
let hasBlackJack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;


//function to get random card
function getRandomCard(){
    let cardNo = Math.floor(Math.random() * 11) + 1; //1 -13
    
    if (cardNo === 1){
        cardNo = 11;
    } else if (cardNo > 10){
        cardNo = 10;
    } else {
        return cardNo;
    }
    return cardNo;

}

// function to start game
function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    console.log(sum);
    renderGame();
}

// function to render game during run time
function renderGame(){
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Black Jack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }
    messageEl.textContent = message;
}

// function to get new card from the deck
function newCard() {
    if(isAlive === true && hasBlackJack === false){    //check if the player have started the game and if the player does not have blackjack
        let nwCard = getRandomCard();
        sum = sum + nwCard;
        cards.push(nwCard);
        console.log(nwCard);
        renderGame();
    } else {
        renderGame();
    }
}
