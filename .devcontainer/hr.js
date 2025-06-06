let random_number=Math.floor(Math.random()*100+1);
let submit=document.querySelector("#subt")
let userInput=document.querySelector("#guessField")
let guessSlot=document.querySelector(".guesses")
let guessRemaining=document.querySelector(".lastResult")
let lowOrHi=document.querySelector(".lowOrHi")
let startOver=document.querySelector(".resultParas")

const p=document.createElement('p')
let prevGuess=[];
let numGuess=1;

let playGame=true;

if(playGame==true)
{
    submit.addEventListener("click",function(e)
  {
    e.preventDefault();
    let guess=parseInt(userInput.value);
    validateGuess(guess);
  })
}
function validateGuess(guess)
{
    if(isNaN(guess)|| guess<1)
    {
      alert("Please Enter the valid number");
    }
    else{
      prevGuess.push(guess)
      if(numGuess==11)
      {
        displayGuess(guess)
        displayMsg(`Game Over.Random number was ${random_number}`)
        endGame()
       
      }
      else
      {
        displayGuess(guess);
        checkGuess(guess);
      }
    }
    
}
function checkGuess(guess)
{
    if(guess>random_number)
    {
      displayMsg("Number is too high")
    }
    else if(guess<random_number)
    {
        displayMsg("number is too low")
    }
    else{
      displayMsg("Congratulations ! you guessed it right")
    }
}
function displayMsg(msg)
{
   lowOrHi.innerHTML=msg
}
function displayGuess(guess)
{
   userInput.value="";
   guessSlot.innerHTML+=`${guess}, `
   numGuess++;
   guessRemaining.innerHTML=`${11-numGuess}`;


}
function newGame()
{
        const newGameButton=document.querySelector("#newGame");
        newGameButton.addEventListener("click",function(e)
      {
        random_number=Math.floor(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML="";
        guessRemaining.innerHTML= `{11-numGuess}`;
        userInput.removeAttribute("disabled")
        startOver.removeChild(p);
        playGame=true;
      })
}
function endGame()
{
    userInput.value="";
    userInput.setAttribute("disabled","");
    p.classList.add("button");
    p.innerHTML="<h2>Start New Game</h2>"
    p.setAttribute("id","newGame");
    playGame=false;
    startOver.appendChild(p)
    newGame();
}