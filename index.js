const userDisplay = document.createElement("h1")
userDisplay.id = "userDisplay"
const computerDisplay = document.createElement("h1")
computerDisplay.id = "computerDisplay" 
const resultDisplay = document.createElement("h1")
resultDisplay.id = "resultDisplay"
const gameGrid = document.getElementById("gameDisplay")
const buttonGrid = document.getElementById("gameButton")
gameGrid.append(userDisplay,computerDisplay,resultDisplay)

const choices = ['rock', 'paper', 'scissors']
let userChoice
let computeChoice

const handleclick = (e) => {
     userChoice = e.target.innerHTML;
    if(userChoice === choices[0]){
        userDisplay.style.backgroundImage = "url('https://www.clipartmax.com/png/middle/356-3561104_cartoon-rock-paper-scissors.png')"
        userDisplay.style.backgroundSize = "135px 150px";
    }
    if(userChoice === choices[1]){
        userDisplay.style.backgroundImage = "url('https://www.clipartmax.com/png/middle/149-1498962_cartoon-emoji-paper-rock-scissors-icon-rock-paper-scissors-emoji.png')"
        userDisplay.style.backgroundSize = "135px 150px";
    }
    if(userChoice === choices[2]){
        userDisplay.style.backgroundImage = "url('https://www.clipartmax.com/png/middle/151-1517270_scissors-cartoon-cartoon-rock-paper-scissors.png')"
        userDisplay.style.backgroundSize = "135px 150px";
    }
    generateComputerChoice()
    getResul()
}

const generateComputerChoice = () =>{
    const randomChoice = choices[Math.floor(Math.random()*3)]
    computeChoice = randomChoice
    if(randomChoice === choices[2]){
        computerDisplay.style.backgroundImage = "url('https://www.clipartmax.com/png/middle/151-1517270_scissors-cartoon-cartoon-rock-paper-scissors.png')"
        computerDisplay.style.backgroundSize = "135px 150px";
    }
    if(randomChoice === choices[1]){
        computerDisplay.style.backgroundImage = "url('https://www.clipartmax.com/png/middle/149-1498962_cartoon-emoji-paper-rock-scissors-icon-rock-paper-scissors-emoji.png')"
        computerDisplay.style.backgroundSize = "135px 150px";
    }
    if(randomChoice === choices[0]){
        computerDisplay.style.backgroundImage = "url('https://www.clipartmax.com/png/middle/356-3561104_cartoon-rock-paper-scissors.png')"
        computerDisplay.style.backgroundSize = "135px 150px";
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
            resultDisplay.style.backgroundImage = "url('http://www.i2symbol.com/pictures/emojis/e/7/6/9/e76901eec61bd9ef2decd98fde1e4cd8.png')"
            resultDisplay.style.backgroundSize = "100px 130px"
            break
         case 'paperscissors':
         case 'scissorsrock':
         case 'rockpaper':
            resultDisplay.style.backgroundImage = "url('https://i.pinimg.com/originals/53/e3/f9/53e3f96483502ef3dee08714be376b3f.png')"
            resultDisplay.style.backgroundSize = "100px 130px"
            break        
         case 'paperpaper':
         case 'scissorsscissors':
         case 'rockrock':
            resultDisplay.style.backgroundImage = "url('https://i.pinimg.com/564x/26/e7/35/26e7350ce23011e07194c7d81aa97cef.jpg')"
            resultDisplay.style.backgroundSize = "100px 130px"
             break        
    }
}
