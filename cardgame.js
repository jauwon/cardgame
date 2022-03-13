const SUITS = ["spades", "diamonds", "clubs", "hearts"];
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

class Deck {
    constructor(cards) {
        this.cards = cards
    }
    get numberOfCards() {
    }
    pop() {
        return this.cards.shift()
    }   
    
    push(card) {
        this.cards.push(card)
    }
   
    shuffle() {
        for (let i = this.numberOfCards.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (this.numberOfCards))
            const oldValue = this.cards [newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}


    class Card {
    constructor(suit,value) {
        this.suit = suit
        this.value = value
    }
    
    }

    class Player {
        constructor (name) {
            this.name = name;
            this.playerDeck = [];
            this.playerScore = 0;
        }
    }

function freshDeck () {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit,value)
        });
    });
}

function setupGame(player1,player2) {
    //create a deck
    const deck = new Deck();
// shuffles cards
    deck.shuffle();


//splits deck of cards and gives a variable to use for splitting the deck
const middleOfDeck = (deck.numberOfCards/2);
//this creates a deck thats already preshuffled (more information on the array slice method)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
player1.addNewDeck(deck.cards.slice(0,middleOfDeck));
// since we only have the lst 26 cards left we have to start from middleOfDeck-end aka deck.numberOfCards
player2.addNewDeck(deck.cards.slice(middleOfDeck,deck.numberOfCards));
//checking the shuffled decks of the players

}

    function playRoundResults(player1,player2) {
        //changed to player1.playerDeck.length to create more tests
        for (let i = 0; i < player1.playerDeck.length; i++) {
            roundOutput (player1, player2, i);
            if (cardValueMap[player1.playerDeck[i].value] > cardValueMap [ player2.playerDeck[i].value]) {
                player1.playerScore += 1;
                console.log( `${player1.name} has won this round`);
            } else if (cardValueMap[player1.playerDeck[i].value] < cardValueMap[player2.playerDeck[i].value]) {
                player2.playerScore += 1;
                console.log(`${player2.name} has won this round`);
            
            } else {
                console.log("This is a tie, no points rewarded");
            }
        }
    }
    function finalTally(player1, player2) {
        if(player1.playerScore > player2.playerScore) {
            console.log(` ${player1.name} has won this round with a final score of: ${player1.playerScore}` );
        } else if (player1.playerScore < player2.playerScore) {
            console.log(` ${player2.name} has won this round with a final score of: ${player2.playerScore} `);
        } else {
            console.log(` ${player1.name} and ${player2.name} have tied!`);
        }
    }

    let Molly = new Player("Molly");
    let Kelly = new Player ("Kelly");

    //Needed to pass in Molly and Kelly once they were called outside of setupGame function to properly run
    setupGame(Molly, Kelly);
   
    playRoundResults (Molly, Kelly);

    finalTally (Molly, Kelly);



