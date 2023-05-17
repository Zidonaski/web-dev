function getComputerChoice(){
    let randomNumber= Math.floor(Math.random()*3);
    let choice;
    (randomNumber===0) ? choice="Rock" : 
    (randomNumber===1) ? choice="Paper" : choice="Scissor";
    return choice
}
function playRound(playerSelection,computerSelection){
    computerSelection=computerSelection.toUpperCase();
    playerSelection=playerSelection.toUpperCase();
    let msg="no msg";
    if(playerSelection===computerSelection){
        return "Draw!! try again"
    }
    if (playerSelection=="ROCK"){
        if(computerSelection=="SCISSOR"){return "You win"}
        else return "You lose"
    }
    if (playerSelection=="PAPER"){
        if(computerSelection=="ROCK"){return "You win"}
        else return "You lose"
    }
    if (playerSelection=="SCISSOR"){
        if(computerSelection=="PAPER"){return "You win"}
        else return "You lose"
    }
    
    return msg;
}
function game(){
    let wins=0;
    for (let i=0;i<5;i++){
        let msg="";
        let playerSelection=prompt("Enter your choice(Rock paper or scissor)");
        let computerSelection=getComputerChoice();
        msg=playRound(playerSelection,computerSelection);
        alert(`${msg} .The computer choosed ${computerSelection}`);
        if (msg=="You win"){ wins++}
    }
    alert(`You have won ${wins} out of 5`)
}
game()
