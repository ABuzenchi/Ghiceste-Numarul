
let randomNumber=Math.floor(Math.random() *100) + 1;

console.log(randomNumber);

const guesses=document.querySelector('#guesses');
const rightOrWrong=document.querySelector('#Right-or-Wrong');
const lowOrHigh=document.querySelector('#low-or-high');

const chosenNumber=document.querySelector('#choosenNumber');
const submitButton=document.querySelector('#submit-button');

let guessCount=0;
let resetButton;

function checkNumber(){
    const userGuess=Number(chosenNumber.value);

    if(userGuess<1 || userGuess>100)
        {
            alert("Please enter a number between 1 and 100.");
            return; 
        }
    guesses.textContent += `${userGuess} `;

    if(userGuess===randomNumber){
        rightOrWrong.textContent="You win!";
        rightOrWrong.style.color='green';
        ResetGame();
        return;
    }
    
    rightOrWrong.textContent="Incorrect.";
    rightOrWrong.style.color='red';
    guessCount+=1;

    if(guessCount===10){
        rightOrWrong.textContent="Game over.You lose!";
        rightOrWrong.style.color='red';
        ResetGame();
        return;
    }

    if(userGuess<randomNumber){
        lowOrHigh.textContent="Too low";
    }
    else
    if(userGuess>randomNumber){
        lowOrHigh.textContent="Too high";
    }
    chosenNumber.value="";

}

function ResetGame(){
    guessCount=0;
    randomNumber=Math.floor(Math.random() *100) + 1;
    console.log(randomNumber);
    resetButton = document.createElement("button");
    resetButton = document.createElement("button");
    resetButton.classList.add("reset-button");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", function() {
        resetButton.remove(); 
        rightOrWrong.textContent = "";
        lowOrHigh.textContent = "";
        guesses.textContent = "Previous guesses: ";
        chosenNumber.value = "";
    });

}

submitButton.addEventListener("click", checkNumber);
