// var wordBank = ["guinness", "black n black", "irish cider", "fat frog", "whiskey"];


var words = ["rabbit", "snail", "airport", "carrots", "river"]
var word = words[Math.floor(Math.random() * words.length)];
var wins = 0;
var guessesLeft = 6;
var wrongGuess = [];
var answerArray = [];
var usedLetters = [];
var correctGuess = [];
var wrongGuess = "";
var guessArray = word.toLowerCase().split("");
var gameStart = false;

function mattSays() {
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
}
mattSays();
// this code above will only happen once CALL LATER 


document.onkeyup = function (event) {
    guess = event.key;
    guess = guess.toLowerCase();

if (gameStart == true){
    // think of each element on the page that would need to be reset

}
    // search the guess to ensure its a-z & 
    if (guess.search(/[a-z]/) === 0 && guess.length == 1) {

        // push guess into usedLetters holds all guesses need for loop
        usedLetters.push(guess);

        // displaying to usedLetters
        document.getElementById("used-letters").innerHTML = usedLetters;

        if (word.includes(guess) == true) {

            for (var i = 0; i < word.length; i++) {

                // if guess(letter) includes word pass as true
                if (guessArray[i] == guess) {

                    // add guess(letter) to billboard 
                    answerArray[i] = guess;

                    // displays to answer array
                    document.getElementById("answer-array").innerHTML = answerArray.join(" ");
                }

            }
        } else {
            guessesLeft--;
            document.getElementById("guesses-left").innerHTML = guessesLeft;
        }
    }
    if (guessesLeft == 0) {
        alert("everyone is a winner but you! word was " + word);
        gameStart == true;
        
    } else if (answerArray.join("") == word) {
        alert("matt is a winner but you suck! word was " + word);
        gameStart == true;
        
    }

}
console.log(word);
console.log(guessesLeft);


// 10-21 
// my word doesn't limit itself to the letters of the word
// would like wins to track wins
// would like the guesses left number to decrease after every wrong guess
// neg index means letter has been guessed
// google "timeout" 
// car into C A R make array[car] take letters and set in array... array of arrays 