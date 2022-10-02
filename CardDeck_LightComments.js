//The Card Object Prototpye
class Card{
 constructor( myNum, mySuit ){
        this.number = myNum 
        this.suit = mySuit 
    }
    makeFaceCard(){ //Gives the card a conditional face property
        switch(this.number){
            case 1: this.face = 'A';
            case 11: this.face = 'J';
            case 12: this.face = 'Q';
            case 13: this.face = 'K';
        }
    }
}


const POSSIBLE_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const POSSIBLE_SUITS = ['Diamonds', 'Clubs', 'Spades', 'Hearts']

var DeckOfCards = [] // empty deck of cards

//Uses two loops to create a deck of cards
for(var i = 0; i<POSSIBLE_SUITS.length; i=i+1){ //Loops through POSSIBLE_SUITS

    //runs this code 4 times, creating 13 cards for each suit
    for(var ii = 0; ii<POSSIBLE_VALUES.length; ii=ii+1){ //Loops through POSSIBLE_VALUES

        //runs this code 13 times before moving on to the next suit
        const aCard = new Card(POSSIBLE_VALUES[ii], POSSIBLE_SUITS[i]) //Creates a card instance
        aCard.makeFaceCard() //uses the makeFaceCard Method
        DeckOfCards.push(aCard) //Adds card to deck of cards
        
    }
}

console.log(DeckOfCards); // Prints an array of cards to the screen