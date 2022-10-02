//Creates the Card Object prototpye
class Card{

    //Constructs the object
    constructor( myNum, mySuit ){
        //Let's talk about the constructor and the (myNum, mySuit):
            /*
                Inside the parentheses here, are the paramaters.
                We pass arguments to paramaters

                We use paramaters to label the input that we expect when "calling" or "running" the constructor function
                 - this function is "called" or "ran", one time, everytime an instance of the object is created.

                Creating an instance looks like:
                var myCard = new Card(10, 'Spades')
                the 10 and the 'Spades' are the arguments that get passed to our paramaters.
                The order here DOES matter.
            */
            
        
        this.number = myNum // we are setting the number poperty to the first paramter
        this.suit = mySuit // we are setting the suit poperty to the second paramter
        //Let's talk about Object Properties
            /*
                These are the properties of the Object. Here, we're creating every instance
                of our object with 2 properties: number & suit
                We can add more properties to specfic instances. For an example of that, 
                check out the makeFaceCard() method bellow.
                
                The "this" keyword, referes to the specfic instance of the object that is being constructed. 
                For example. Let's say we made a card with the line: const yourCard = new Card(12, 'Hearts')
                We can then refer to its specfic poperties with: 
                    yourCard.vlaue  | this will give us  12
                    yourCard.suit   | this will give us 'Hearts'
            */
    }

    
    makeFaceCard(){
    //Let's talk about Object Methods
        /*
            makeFaceCard() is called a "method"
            A method is a function that belongs to an object. - a function is a container for code
            A function can also recieve input -like our constructor- and can return output
            but we are not recieving input or returning output with this function
            - notice there are no paramters in the parentheses

            To run this funciton on the example from above,
            it would look like: yourCard.makeFaceCard()

        */
        switch(this.number){
            case 1: this.face = 'A';
            case 11: this.face = 'J';
            case 12: this.face = 'Q';
            case 13: this.face = 'K';
        }
        //Let's talk about Switches
        /*
            A switch evaluates the information in the parentheses, in this case,
            our switch evaluates the number property of a particular instance 
            - hence the keyword "this"
           
            If the information matches a case, it will
            execute the code that the case pointsto with ":"

            So, if this.number is 12, we will add a popertity
            to the instance called this.face, and then assign it to 'Q' for Queen
        */
    }
}





var DeckOfCards = []
//Let's talk about arrays and declaring variables with the keyword var
    /*
    1) Arrays
        Arrays are lists of data. The array bellow is empty.
        A non-empty array looks like: var DeckOfCards = [card1, card2, card3]

        SIDE NOTE:
        **
            In javascript, you can place strings, numbers, characters, objects and functions
            all in the same array. Don't get used to this. 
        **

    2) var
        The var keywords is used to define variables that we may need to change the value of later
        Here we are creating an empty array of cards, but soon, we will add instances
        of our card-object to the array - thus changing its value.
        The var keyword ensures that can we can change the value of this array later
    */





const POSSIBLE_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const POSSIBLE_SUITS = ['Diamonds', 'Clubs', 'Spades', 'Hearts']   
//Let's talk about declaring variables with the keyword const
    /*
        The const keyword declares a varible that is not allowed to change.
        If we were to try to reasign a varible declared with const, our code would crash.

        SIDE NOTE:
        **
            The convention is to use ALLCAPS for constant variables that will never change.

            Later, we will declare an object instance with the const keyword.
            But we won't use ALLCAPS characters.

                FYI:   The code will look like: const myCard = new Card(value, suit)

            We don't use ALLCAPS in the variable declaration because we probably
            will change properties of that instance.
            Even though we are changing the instance's properties, we can use const
            to delcare the instance because our instance will
            always be equal to the same instance - itself.

                FYI:   We could use ALLCAPS and the code would work exactly the same.
        **
    */



//Here, finally, w use two loops to create a deck of cards!
for(var i = 0; i<POSSIBLE_SUITS.length; i=i+1){
    //Let's talk about for loops!
    /*
        loops are very cool. There are a few different kind of loops, but 
        here we are only going to look at standard for loops.

        This is the setup of the loop (var i = 0; i<POSSIBLE_SUITS.length; i=i+1)
        It's 3 parts

        Part 1) var i = 0;
            This creates a varible that only exists while your loop is running
        
        Part 2) i<POSSIBLE_SUITS.length;
            AFTER each execution of the loop, it checks this condition.
            if the condition evaluates to true, the loop continues, or else it will stop

            In this case we are comparing i to the length of the POSSIBLE_SUITS array,
            which evaluates to -> 4

        Part 3) i=i+1;
            AFTER each execution of the loop, BUT BEFORE Part 2 <- which is important
            the loop performs whatever options that we tell it to

            In this case, we are adding 1 to the value of i
                FYI: This is usually written as i++ and is equivalent
    */

    
    for(var ii = 0; ii<POSSIBLE_VALUES.length; ii=ii+1){
    //Let's talk about nested loops!
    /*
        Because we have a loop inside of a loop. The inside loop will run to completion
        before going on to the second run of the first loop.

        Our first loop will run 4 times - POSSIBLE_SUITS.length = 4
        Our second loop will run 13 times - POSSIBLE_VALUES.length = 13

        More specfically, our second loop will run 13 times every time the first loop runs for
        a total of 52 times. Each time it creaets a new card and adds it to the deck.
    */

        const aCard = new Card(POSSIBLE_VALUES[ii], POSSIBLE_SUITS[i]) 
        //Let's talk about Array Indexes and Object Instances
            /*
                1) Array Indexes
                    To refrence a specfic value in an array, you need to know the index of that value
                    Take the Array: const EXAMPLE = ['steve jobs', 'tim cook']
                        EXAMPLE[0] -> 'steve jobs'
                        EXAMPLE[1] -> 'tim cook'
                    .

                    So in our code, when we have POSSIBLE_VALUES[ii] we grab 1 out of the 13
                    avaliable values from the POSSIBLE_VALUES array. We use the index of ii
                    to grab the index 0 the first loop, index 1 the second loop, so on
                    and so forth

                    In POSSIBLE_SUITS[i] we grab the 1 out of the 4
                    avaliable suits. This time using i, instead of ii to choose our index.

                    ii is iterated everytime the inside loop runs
                    i is interated everytime the outside loop runs

                2) Object instances
                    An instace of an object is a unquie peice of complex data that can be changed
                    indepentant of another instance of the same object.

                    So if we have 52 Card instances -which we do. We can make some of them
                    face-cards by adding a face property to them without affect the
                    other instances -which we will!
            */

        aCard.makeFaceCard() //See the Card Object prototype to see how this works

        DeckOfCards.push(aCard) //Adds the newly created card to deck of cards
        /*
            .push is a method that can be called on an array. The arguments that you pass to the 
            .push paramaters, get added to the array
        */
        
    }
}

console.log(DeckOfCards); // Prints an array of cards to the screen