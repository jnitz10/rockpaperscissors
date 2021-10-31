
var choice = [ "rock", "paper", "scissors"];

var playerWins = 0;
var computerWins = 0;


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
        subhead.textContent = `The computer played ${computerSelection} It's a draw!`;
    } else if (doesItWin(playerSelection.toLowerCase(), computerSelection.toLowerCase())) {
        playerWins += 1;
        playerScore.textContent = `${playerWins}`;
        subhead.textContent = `The computer played ${computerSelection}. You win!`;
        if (playerWins == 5) {
            alert("Congrats! You win!");
            playerWins = 0;
            computerWins = 0;
        }
    } else {
        computerWins += 1;
        computerScore.textContent = `${computerWins}`;
        subhead.textContent = `The computer played ${computerSelection}. You lose!`;
    }
}


const buttons = Array.from(document.querySelectorAll('.icon'));
const transformed = Array.from(document.querySelectorAll('.selected'));

function transition(e) {
    const icon = document.getElementById(e.id)

}

function removeTransition(e) {
    e.target.classList.remove('selected');
}

buttons.forEach(icon => icon.addEventListener('mousedown', function(e) {
    transformed.forEach(selected => selected.classList.remove('selected'));
    console.log(playRound(icon.id, computerPlay()));
    icon.classList.add('selected');
}))

buttons.forEach(icon => icon.addEventListener('mouseup', function(e) {
    icon.classList.remove('selected');
}))

const playerScore = document.getElementById('playerScore');
playerScore.textContent = `${playerWins}`;
const computerScore = document.getElementById('computerScore');
computerScore.textContent = `${computerWins}`;

const subhead = document.getElementById('subhead');


