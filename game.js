//create a function getComputerChoice that will randomly return either 
//Rock,paper or scissors
//remember to use console.log; to output results.

function getComputerChoice() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let getRandomValue = Math.random();
    //console.log(getRandomValue);
    if (getRandomValue <= 0.34) {
        //console.log(rock);
        return rock;
    } else if (getRandomValue <= 0.67) {
        //console.log(paper);
        return paper;
    } else {
        //console.log(scissors);
        return scissors;
    }
}

function game() {
    let roundsPlayed = 0;
    let playerWin = 0;
    let computerWin = 0;
    let gameWinner = "";

    while (roundsPlayed < 5) {
        roundsPlayed++;
        const computerSelection = getComputerChoice();
        playerSelection = prompt("Paper, Scissors, Rock?.");
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player win totals " + playerWin);
        console.log("Computer win totals " + computerWin);
        
        function playRound(firstLetterCap, computerSelection) {
        // your code here!
            let tie = "Its a tie you selected " + firstLetterCap  + " and computer selected " + computerSelection;
            let paperBeatRock = "You win! You selected " + firstLetterCap  + " and computer selected " + computerSelection;
            let scissorsBeatPaper = "You win! You selected " + firstLetterCap  + " and computer selected " + computerSelection;
            let rockBeatScissors = "You win! You selected " + firstLetterCap  + " and computer selected " + computerSelection;
            let scissorsBeatRockLoss = "You lose, you selected " + firstLetterCap  + " and computer choose " + computerSelection;
            let rockBeatPaperloss = "You lose, you selected " + firstLetterCap  + " and computer choose " + computerSelection;
            let paperBeatScissorsLoss = "You lose, you selected " + firstLetterCap + " and computer choose " + computerSelection;
    
            if (firstLetterCap === computerSelection) {
                return tie;
            } else if ((firstLetterCap  === "Paper") && (computerSelection === "Rock")) {
                playerWin++;
                return paperBeatRock;
            } else if ((firstLetterCap  === "Scissors") && (computerSelection === "Paper")) {
                playerWin++;
                return scissorsBeatPaper;
            } else if ((firstLetterCap === "Rock") && (computerSelection === "Scissors")) {
                playerWin++;
                return rockBeatScissors;
            } else if ((firstLetterCap  === "Scissors") && (computerSelection === "Rock")) {
                computerWin++;
                return scissorsBeatRockLoss;
            } else if ((firstLetterCap === "Rock") && (computerSelection === "Paper")) {
                computerWin++;
                return rockBeatPaperloss;
            } else
                computerWin++;
                return paperBeatScissorsLoss;  
         }
    }
        if (playerWin > computerWin) {
            console.log(gameWinner = "You won!!");
        } else if (computerWin === playerWin) {
            console.log(gameWinner = "It's a Tie! Try again?");
        }  else {
            console.log(gameWinner = "You lost! Play again?");
        } 
        console.log("The five game winner is: " + gameWinner);
}

function capitalize(playerSelection) {
    let allLowerCase = playerSelection.toLowerCase();
    let firstLetterCap = allLowerCase.charAt(0).toUpperCase() + allLowerCase;
    return playerSelection;
}

game();