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

//Write a function that plays a single round of Rock Paper Scissors.
//The function should take two parameters - the playerSelection and computerSelection
//return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//make sure function is case-insentive, user can input rock, RocK, ROCK
//you want to return the results of this function call, not console.log() them

function playRound(playerSelection, computerSelection) {
    // your code here!
    let tie = "Its a tie you selected " + playerSelection + " and computer selected " + computerSelection;
    let paperBeatRock = "You win! You selected " + playerSelection + " and computer selected " + computerSelection;
    let scissorsBeatPaper = "You win! You selected " + playerSelection + " and computer selected " + computerSelection;
    let rockBeatScissors = "You win! You selected " + playerSelection + " and computer selected " + computerSelection;
    let scissorsBeatRockLoss = "You lose, you selected " + playerSelection + " and computer choose " + computerSelection;
    let rockBeatPaperloss = "You lose, you selected " + playerSelection + " and computer choose " + computerSelection;
    let paperBeatScissorsLoss = "You lose, you selected " + playerSelection + " and computer choose " + computerSelection;

    if (playerSelection === computerSelection) {
        return tie;
    } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
        return paperBeatRock;
    } else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) {
        return scissorsBeatPaper;
    } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
        return rockBeatScissors;
    } else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
        return scissorsBeatRockLoss;
    } else if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
        return rockBeatPaperloss;
    } else {
        return paperBeatScissorsLoss;  
    } 
}
  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

//let game = prompt("Paper, Scissors, Rock?..");

//function game(playRound) {
   // for (let i = 0; i <= 5; i++) {
     //   if 
//}