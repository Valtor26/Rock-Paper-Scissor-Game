let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScoreDisp = document.querySelector("#your-score");
let compScoreDisp = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const ranInd = Math.floor(Math.random() * 3);
    return options[ranInd];
}
 
const drawGame = () => {
    msg.innerText = "Its a tie, Play Again";
    msg.style.backgroundColor = "#589595";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        userScoreDisp.innerText = userScore;
        msg.innerText = `You Won, ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreDisp.innerText = compScore;
        msg.innerText = `You Lost, ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}

const playGame = (userChoice) => {
    console.log("User Choice = ",userChoice);
    //Generate comp choice
    const compChoice = genCompChoice();
    console.log("Comp Choice = ",compChoice);

    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //paper or scissor
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock or scissor
            userWin = compChoice === "rock" ? true : false;
        } else {
            //rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});