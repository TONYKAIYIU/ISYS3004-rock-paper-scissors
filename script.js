/* Lets keep score! */
let win = 0;
let loses = 0;
let draws = 0;

function say(theMessage){
    let msg = new SpeechSynthesisUtterance(theMessage);
    speechSynthesis.speak(msg);
}

/* This is a simplified version of the game.
The Computer ALWAYS picks ROCK.  
Does the user's choose win,lose, or tie vs ROCK? */
function play(user) {
    let result = "";
    if (user === 'rock') {
        result = "tie";
        draws++;
    }
    if (user === 'paper') {
        result = "win";
        win++;
    }
    if (user === 'scissors') {
        result = "lose";
        loses++;
    }
    let myMessage = "Computer chose rock, you " + result + "!" + 
    "\n\n" + wins + "wins" +
    "\n"   + loses + "losses" +
    "\n"   + draws + "draws";
    alert(myMessage)
    say(myMessage)
}