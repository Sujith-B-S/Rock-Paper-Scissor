let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const pickCompChoice = () =>{
    const option = ["rock","paper","scissor"];

    const random = Math.floor(Math.random()*3);

    return option[random];
}


const playGame = (userChoice) => {
    console.log("User Choice = ",userChoice);
    const computerChoice = pickCompChoice();
    console.log("Computer Choice = ",computerChoice);

} 



choices.forEach((choice) => {
    console.log(choice);

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    
    })
})