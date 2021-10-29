
var choice = [ "rock", "paper", "scissors"];


function computerPlay() {
    return choice[Math.floor(Math.random()*choice.length)]
}

function doesItWin(selection1, selection2) {
    if ((selection1 == "rock" && selection2 == "scissors") ||
        (selection1 == "scissors" && selection2 == "paper") ||
        (selection1 == "paper" && selection2 == "rock")) {
            return true;
        }  
    else {
        return false;
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return `The computer played ${computerSelection} It's a draw!`;
    } else if (doesItWin(playerSelection.toLowerCase(), computerSelection.toLowerCase())) {
        return `The computer played ${computerSelection} You win!`
    } else {
        return `The computer played ${computerSelection} You lose!`
    }
}

function play() {
    console.log(playRound(window.prompt("Rock, paper, or scissors..."), computerPlay()))
}