const player = document.getElementById('player')
const startModal = document.getElementById('start')
const endModal = document.getElementById('end')
const score = document.getElementById('score')
const scoreMsg = document.getElementById('score-msg')
const compImg = document.getElementById('computer-image')

let win = ''
let playerScore = 0
let compScore = 0

const getComputerChoice = () => {
    let cChoice = Math.floor(Math.random() * 3)

    if(cChoice === 0){
        return 'rock'
    } else if (cChoice === 1){
        return 'paper'
    } else if (cChoice === 2){
        return 'scissor'
    }
}

const playRound = (player, comp) => {
  if (player === comp) {
    win = 'tie'
  }

  if (
    (player === 'rock' && comp === 'scissor') ||
    (player === 'scissor' && comp === 'paper') ||
    (player === 'paper' && comp === 'rock')
  ) {
    playerScore++
    win = 'player'
  }

  if (
    (comp === 'rock' && player === 'scissor') ||
    (comp === 'scissor' && player === 'paper') ||
    (comp === 'paper' && player === 'rock')
  ) {
    compScore++
    win = 'computer'
  }
}

function isGameOver(){
    return playerScore === 5 || compScore === 5
}

player.addEventListener('click', (e) => {
    handleClick(e.target.alt)
})

function handleClick(player) {
    if (isGameOver()) {
      updateWinMessage()
      return
    }
  
    const comp = getComputerChoice()
    updateImage(comp)
    playRound(player, comp)
    updateScore()
  
    if (isGameOver()) {
      updateWinMessage()
    }
  }

function updateScore() {
    if (win === 'tie') {
        scoreMsg.innerText = "It's a tie!"
    } else if (win === 'player') {
        scoreMsg.innerText = 'You won!'
    } else if (win === 'computer') {
        scoreMsg.innerText = 'You lost!'
    }

    score.innerText = `Computer : ${compScore} vs Player : ${playerScore}`
}

function updateWinMessage(){
  if(compScore > playerScore){
    endModal.innerText = "You Lost! Please try again"
    endModal.classList.remove('hidden')
  }else if (playerScore > compScore){
    endModal.innerText = "You Won! Let's go again"
    endModal.classList.remove('hidden')
  }
}

function updateImage(comp){
  switch (comp) {
    case 'rock':
      compImg.src = "./assets/images/comp-rock.png"
      break
    case 'paper':
      compImg.src = "./assets/images/comp-paper.png"
      break
    case 'scissor':
      compImg.src = "./assets/images/comp-scissor.png"
      break
  }
}

startModal.addEventListener('click', (e) => {
    startModal.classList.add('hidden')
})

endModal.addEventListener('click', () => restartGame())

const restartGame = () => {
    playerScore = 0
    compScore = 0
    startModal.classList.remove('hidden')
    endModal.classList.add('hidden')
}

