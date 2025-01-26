let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg");
let compScoreField = document.querySelector("#comp-score");
let userScoreField = document.querySelector("#user-score");

const pickCompChoice = () =>{
    const option = ["rock","paper","scissor"];

    const random = Math.floor(Math.random()*3);

    return option[random];
}

const gameDraw = () => {
    console.log("Game is draw!!");
    msg.innerText = "Game is draw!!";
}

let showWin = (userWin) => {
    if(userWin){
        userScore++;
        userScoreField.innerText = userScore;
        console.log("You Win!!");
        msg.innerText = "You Win!!";
    }
    else{
        computerScore++;
        compScoreField.innerText = computerScore;
        console.log("Computer Win!!");
        msg.innerText = "You Lose. Computer Win!!";
    }
}


const playGame = (userChoice) => {
    console.log("User Choice = ",userChoice);
    const computerChoice = pickCompChoice();
    console.log("Computer Choice = ",computerChoice);

    if(userChoice === computerChoice)
    {
        gameDraw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }

        else if(userChoice === "paper")
        {
            userWin = computerChoice === "scissor" ? false : true;
        }
        else{
            userWin = "rock" ? false : true;
        }
        showWin(userWin);
    }

    

} 



choices.forEach((choice) => {
    console.log(choice);

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    
    })
})


