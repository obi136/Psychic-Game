var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "w", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesLeftMsg = "";

document.onkeyup = function (event) {


    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    if (guessesLeft > 0) {

        if (userGuess === computerGuess) {
            console.log("You win");
            wins++;
            guessesLeft = 10;
            // computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }
        else {
            console.log("Nope. Guess again");
            guessesLeft--;
            console.log(guessesLeft); guessesLeft
            computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }
    }
    else {
        losses++;
        console.log("Out of guesses. Sorry.");
        guessesLeft = 10;
    }
    var html2 = "<h1>Psychic Game</h1>";
    document.querySelector("#title").innerHTML = html2;
    if (guessesLeft > 0) {
        guessesLeftMsg = "<p>guesses Left: " + guessesLeft + "</p>";
    } else {
        guessesLeftMsg = "<p>Out Of Guesses</p>";
    }

    var html =
        "<p>You chose: " + userGuess + "</p>" +
        "<p>The computer chose: " + computerGuess + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        guessesLeftMsg;

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
}

