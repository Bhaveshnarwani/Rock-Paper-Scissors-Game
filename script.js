let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");

let msg = document.querySelector("#showWinner");

let h2 = document.querySelector("h2");

let userId = document.querySelector("#user-score");

let compId = document.querySelector("#comp-score");

const genCompChoice = () =>{
  const options = ["rock","paper","scissors"];
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
}

const drawGame = () =>{
  console.log("Game was draw");
  msg.style.backgroundColor = "Green";
  h2.innerText = "Game was Draw";
}
const showWinner = (userWin) =>{
 if(userWin){
  userScore++;
  userId.innerText = userScore;
  msg.style.backgroundColor = "Blue";
  h2.innerText = "Congratulations You Won The Game";
 }else{
  compScore++;
  compId.innerText = compScore;
  msg.style.backgroundColor = "Red";
  h2.innerText = "Oops!You Lose The Game";
 }
}
const playGame = (userChoice) =>{
  console.log("User choice is =", userChoice);
  const compChoice = genCompChoice();
  console.log("Comp choice is =", compChoice);

  if(userChoice === compChoice){
    drawGame();
  }else{
    let userWin = true;
    if(userChoice === "rock"){
      userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "scissors"){
      userWin = compChoice === "rock" ? false : true;
    }else{
      userWin = compChoice === "paper" ? false : true;
    }
    showWinner(userWin);
  }
}

choices.forEach((choices) =>{
  choices.addEventListener("click", ()=>{
    const userChoice = choices.getAttribute("id");
     playGame(userChoice);
  })
} )
