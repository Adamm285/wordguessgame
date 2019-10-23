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
    guessesLeft--;


    if (guess.search(/[a-z]/) === 0 && guess.length == 1) {
        usedLetters.push(guess);
        document.getElementById("used-letters").innerHTML = usedLetters;

        if (word.includes(guess) == true) {

            for (var i = 0; i < word.length; i++) {

                if (guessArray[i] == guess) {
                    answerArray[i] = guess;
                    document.getElementById("answer-array").innerHTML = answerArray;

                }
            }
        } else {

        }
    }
}
guessesLeft.textContent = "guesses remaining: " + guessesLeft;
console.log(word);


// search the guess to ensure its a-z & 
// push guess into usedLetters holds all guesses need for loop
// displaing to usedletters


// if guess(letter) includes word pass as true
// add guess(letter) to billboard 
// displays to answer arra








// 10-21 i have the used letters posting i would like to make them not repeat after guessed once
// my word doesn't limit itself to the letters of the word
// would like wins to track wins
// would like the guesses left number to decrease after every wrong guess
// neg index means letter has been guessed
// google "timeout" 
// car into C A R make array[car] take letters and set in array... array of arrays 


// document.onkeyup = function (event) {
//     guess.textContent = event.key;
//     lettersGuessed.push(guess);
//     console.log(lettersGuessed);
// }
// document.onkeyup = (k) => {
//     let guess= k.key;
//     if(guess.includes("answer-array")){
//         correctGuess.push("answer-array");

//     }else{
//         wrongGuess.push("remaining-letters");
//     }
//     wrongGuess.innerHTML = ("used-letters");

// }
// document.getElementById("answer-array").innerHTML = guess;

// remainingLetters.textContent = "Guessed letters: " + remainingLetters;
// wins.textContent = "wins: " + wins;


// test
// answerArray.textContent = "test test test" + word;


// note to self tomorrow maybe i can use the working tags above to displayed my info and 
// delete the conflict above


// *******useful code for key to screen
// this code below allows the "remaining-letters" span on the html be updated
// still needs more code to keep letters guesses so they can be displayed




// ************

// ************
// this code below works for putting the key pressed on the billboard

// ********



// ********* THE MAIN GAME LOOP ******************

// while there are letters left to be guessed
// while (remainingLetters > 0) {
// //     //show the player their progress
//     

//     //get a guess from the player
//     //if the guess is blank
// }if (guess == null) {
//         //exit the game loop
//         break;
//         //if the guess is more than one letter or no letters 
//     // } else if (guess !== 1) {
//     //     //alert the player to guess a single letter
//     //     alert("Please enter a single letter only.");
//     //     //valid guess
//     } else {
//         //update the game state with the guess
//         for (var j = 0; j < word.length; j++) {
//             //if the letter they guessed is in the word
//             //at that point or index
//             if (word[j] == guess) {
//                 //update the answer array with the letter they guessed
//                 //at that point or index
//                 answerArray[j] = guess;
//                 //subtract one from remaining letters
//                 remainingLetters--;
//             }

//         }
//     }
//     //***************END OF GAME LOOP*********************


// //let player know the word
// // document.getElementById("answer-array").innerHTML = answerArray.join(" ");
// //Congratulate the player
// alert("Well done! The answer was " + word);





// //grab a random word

// var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// // var guess = prompt("What's your guess?");


// // set up the answerArray to show how many letters the words has
// var answerArray = [];
// for (var i = 0; i < currentWord.length; i++) {
//     answerArray[i] = "_";
// }
// //  create a variable to (hold the number of remainingLetters to be guess )tell us how many letters are left

// var remainingLetters = currentWord.length;

// // ************ main game loop*************

// // while letters left to be guessed 
// // test

// while (remainingLetters > 0) {
//     // showing player the progress
//     var guess = document.onkeyup = function (event) {
//     answerArray = event.key;
//     // document.getElementById("remaining-letters").innerHTML = answerArray.join(" ");
//     }


//     // get a guess
//     // var guess = prompt("guess a letter or press cancel to quit");

//     //  if guess is blank
//     if (guess == null) {
//         // exit
//         break;

//         //  if guess is multiple letters or no letters
//     } else if (guess.length !== 1) {
//         // alert them to press only a single letter
//         // alert("please enter a single letter.")

//         // valid guess
//     } else {
//         // update the game with the guess
//         for (var j = 0; j > currentWord.length; j++) {
//             // if the letter is in the word

//             if (currentWord[j] === guess) {

//                 // update the answerArray with guessed letter
//                 answerArray[j] = guess;
//                 document.getElementById("answer-array").innerHTML = answerArray.join(" ");
//                 // subtract one of the remaining letters
//                 remainingLetters--;
//             }
//         }
//         // invalid guess
//     }
// }
// // ***********end of game loop************

// // let player know currentWord was
// // alert(answerArray.join(" "));
// // Congrads you win!
// // alert("good job! the answer was " + currentWord);

// //  to do: change alerts to push to page
// // add a limit to how many times player can guess





// // for (var i = 0; i < currentWord.length; i++) {
// //     if (guessThisWord == guess) {
// //         alert(guess + "is in the word!")
// //     } else if (remainingLetters == guess) {

// //         // change guessThisWord to reflex the correctly guessed letter
// //         break;
// //     } else {
// //         (guess = letters)
// //         alert(guess + "is not in the word, try different letter");
// //     }
// // }
// console.log(currentWord);
// console.log(remainingLetters);
// console.log(answerArray)



// // var guessesLeft = 6;
// // for (var j = 0; j < 6; j--) {
// //     guessesLeft[j] = "_";
// // }



// // document.getElementById("letters").innerHTML = letters;
// // document.getElementById("guesses-left").innerHTML = remainingLetters;
// // document.getElementById("wins").innerHTML = wins;


// // };