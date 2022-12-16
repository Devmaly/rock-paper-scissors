const user = document.createElement("div")
// const userimg = document.createElement("div")
const userDisplay = new Image(135,150)

// userimg.appendChild(userDisplay)
user.id = "userDisplay"
const userText = document.createElement("div")
user.append(userDisplay,userText);

const com = document.createElement("div")
const computerDisplay = new Image(135, 150)
com.id = "computerDisplay" 
const comText = document.createElement("div")
com.append(computerDisplay,comText);
comText.innerText="Bot Choice"

const result = document.createElement("div")
const resultDisplay = new Image(135, 150)
result.id = "resultDisplay"
const resultText = document.createElement("div")
result.append(resultDisplay,resultText);
resultText.innerText = "Result"


const scorebord = document.createElement("div")
scorebord.id ="score"
const element = document.getElementById("game")
element.appendChild(scorebord)
let score = 0;
let total = 0 ;
// scorebord.innerText=`Your Score ${score}/${total}`

const gameGrid = document.getElementById("gameDisplay")
const buttonGrid = document.getElementById("gameButton")
gameGrid.append(user,com,result,)
userText.innerText = "Your Choice"

const choices = ['rock', 'paper', 'scissors']
let userChoice
let computeChoice

const handleclick = (e) => {
     userChoice = e.target.innerHTML;
    //  userText.innerText = `Your Choice`
    if(userChoice === choices[0]){
        userDisplay.src='https://www.clipartmax.com/png/middle/356-3561104_cartoon-rock-paper-scissors.png'
        //  userDisplay.style.backgroundSize = "135px 150px";
        
    }
    if(userChoice === choices[1]){
        userDisplay.src='https://www.clipartmax.com/png/middle/149-1498962_cartoon-emoji-paper-rock-scissors-icon-rock-paper-scissors-emoji.png'
        // userDisplay.style.backgroundSize = "135px 150px";
    }
    if(userChoice === choices[2]){
        userDisplay.src='https://www.clipartmax.com/png/middle/151-1517270_scissors-cartoon-cartoon-rock-paper-scissors.png'
        // userDisplay.style.backgroundSize = "135px 150px";
    }
    generateComputerChoice()
    getResul()
}

const generateComputerChoice = () =>{
    const randomChoice = choices[Math.floor(Math.random()*3)]
    computeChoice = randomChoice
    // comText.innerText = `Bot choice`;
    if(randomChoice === choices[2]){
        computerDisplay.src='https://www.clipartmax.com/png/middle/151-1517270_scissors-cartoon-cartoon-rock-paper-scissors.png'
        // computerDisplay.style.backgroundSize = "135px 150px";
    }
    if(randomChoice === choices[1]){
        computerDisplay.src='https://www.clipartmax.com/png/middle/149-1498962_cartoon-emoji-paper-rock-scissors-icon-rock-paper-scissors-emoji.png'
        // computerDisplay.style.backgroundSize = "135px 150px";
    }
    if(randomChoice === choices[0]){
        computerDisplay.src='https://www.clipartmax.com/png/middle/356-3561104_cartoon-rock-paper-scissors.png'
        // computerDisplay.style.backgroundSize = "135px 150px";
    }
}

for(let i = 0; i < choices.length; i++){
    const button = document.createElement("button")
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click',handleclick)
    buttonGrid.appendChild(button)
}

const getResul = () => {
    switch(userChoice + computeChoice){
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.src = 'http://www.i2symbol.com/pictures/emojis/e/7/6/9/e76901eec61bd9ef2decd98fde1e4cd8.png'
            // resultDisplay.style.backgroundSize = "100px 130px"
            resultText.innerText = "YOU WIN"
            score++;
            total++;
            break
         case 'paperscissors':
         case 'scissorsrock':
         case 'rockpaper':
            resultDisplay.src='https://i.pinimg.com/originals/53/e3/f9/53e3f96483502ef3dee08714be376b3f.png'
            // resultDisplay.style.backgroundSize = "100px 130px"
            resultText.innerText = "YOU LOSE"
            total++;
            break        
         case 'paperpaper':
         case 'scissorsscissors':
         case 'rockrock':
            resultDisplay.src='https://i.pinimg.com/564x/26/e7/35/26e7350ce23011e07194c7d81aa97cef.jpg'
            // resultDisplay.style.backgroundSize = "100px 130px"
            resultText.innerText = "DRAW"
            total++
             break        
    }
    scorebord.innerText=`Your Score ${score}/${total}`
}
