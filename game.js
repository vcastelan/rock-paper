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
    } else if (getRandomValue <= 0.66) {
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
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));


//Write a NEW function called game(). Call the playRound function inside of this one 
//to play a 5 round game that keeps score and reports a winner or loser at the end

for (let i = 0; i < 5; i++) {
    // your code here!
 }

 //you should be using console.log() to display the results of each round and the winner at the end.