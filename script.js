/* Lets keep score! */
let wins = 0;
let losses = 0;
let draws = 0;

function say(theMessage){
    let msg = new SpeechSynthesisUtterance(theMessage);
    speechSynthesis.speak(msg);
}

/* This is a simplified version of the game.
The Computer ALWAYS picks ROCK.  
Does the user's choose win,lose, or tie vs ROCK? */
function play(user) {
    let result = ""
    if (user === 'rock') {
        result == "tie";
        draws++;
    }
    if (user === 'paper') {
        result == "win";
        wins++;
    }
    if (user === 'scissors') {
        result == "lose";
        losses++;
    }
    let myMessage = "Computer chose rock, you " + result + "!" + 
    "\n\n" + wins + "wins" +
    "\n"   + losses + "losses" +
    "\n"   + draws + "draws";
    alert(myMessage)
    say(myMessage)
}