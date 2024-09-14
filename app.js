let userScore = 0
let compScore = 0


const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')

const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')

const genCompChoice = () => {
    // rock, paper, scissors
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx]
}


const drawGame = () => {
    console.log("game was draw!")
    msg.innerText = "Game was draw!"
    msg.style.backgroundColor = "#081b31"
}



const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++
        userScorePara.innerText = userScore
        console.log("you win");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    } else {
        compScore++
        compScorePara.innerText = compScore
        console.log("you lose");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}


const playGame = (userChoice) => {
    console.log(`User choice: ${userChoice}`);
    //generate computer choice => modular programming (to make one task = one reusable function)
    const compChoice = genCompChoice()
    console.log(`Computer Choice: ${compChoice}`);

    if (userChoice === compChoice) {
        drawGame()
    } else {
        let userWin = true
        if (userChoice === "rock") {
            // now compChoice can be scissors or paper
            userWin = compChoice === "paper" ? false : true
        } else if (userChoice === "paper"){
            // compChoice can be scissors or rock
            userWin = compChoice === "scissors" ? false : true
        } else {
            // now the userChoice is the last i.e scissors 
            // compChoice can be rock or paper
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin,userChoice, compChoice)
    }
}


choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id")
        console.log(`${userChoice} was clicked`);
        playGame(userChoice)
    })
})