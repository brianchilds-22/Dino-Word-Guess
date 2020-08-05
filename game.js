// alert("test");

// Global Variables
// =============================
var wordOptions = ["billy","johnny",'carl', "walt", "mason","timmy","brian","eli","jackie"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 6;


// Functions
// =============================

function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

// Restart / Reset all
    guessesLeft = 6; 
    wrongLetters = [];
    blanksAndSuccesses = [];

// populate with correct number of blank lines
    for (var i = 0; i<numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

// add to html
    document.getElementById('wordtoGuess').innerHTML = blanksAndSuccesses.join(' ');
    document.getElementById('numGuesses').innerHTML = guessesLeft;
    document.getElementById('winCounter').innerHTML = winCount;
    document.getElementById('lossCounter').innerHTML = lossCount;

// testing debugging
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
    // check if letter exists in word

    var isLetterInWord = false;

    for (var i=0; i < numBlanks; i++) {  
        if(selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }


// check where in the word the letter exists then populate blanksAndSuccesses array
if(isLetterInWord) {
    for (var i = 0; i < numBlanks; i++) {  
        if(selectedWord[i] == letter) {
            blanksAndSuccesses[i] = letter;
        }
    }
}

// letter not in word
else {
    wrongLetters.push(letter);
    guessesLeft--
}

console.log(blanksAndSuccesses);

}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count " + lossCount + " | Guesses Left " + guessesLeft);

    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");


// check if player won
    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You Won");

        document.getElementById("winCounter").innerHTML = winCount;

        startGame();
    
    } else if (guessesLeft == 0) {
        lossCount++;
        alert("You lost");

        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
    }
}
// Main Process
// =============================
// Initiates the code for first time


// Register letter guesses and check to see if in the word
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    console.log(letterGuessed);
}