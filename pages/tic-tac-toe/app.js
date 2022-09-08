const Player = (name, marker) => {
    return {name, marker}
}
const gameBoard = (() => {
    // const inputPlayer1 = 
    // const inputPlayer2 = 

    const player1 = Player("Player 1", "🐼");
    const player2 = Player("Player 2", "🐨");

    const winCombo = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
    ]

    let board = [ '', '', '',
                    '', '', '',
                    '', '', '',
                    ]

    let currentPlayer = player1;

    let counter = 0;

    currentTurn = document.getElementById("player");
    currentTurn.innerText = `${currentPlayer.name}'s turn`

    const switchPlayer = () => {
        if (currentPlayer == player1) {
            currentPlayer = player2;
            currentTurn.classList.add('bg-red-800')
            currentTurn.classList.remove('bg-emerald-700')
        }
        else {
            currentPlayer = player1;
            currentTurn.classList.remove('bg-red-800')
            currentTurn.classList.add('bg-emerald-700')
        }
    }

    const checkForWinner = () => {
        for (let i = 0; i < winCombo.length; i++) {
            if (currentPlayer.marker === board[winCombo[i][0]] && 
                currentPlayer.marker === board[winCombo[i][1]] && 
                currentPlayer.marker === board[winCombo[i][2]]) {
                return true;
            }
        }
        return false;
    }

    const startGame = () => {
        const main = document.getElementById('root')
        for (let i = 0; i < board.length; i++){
            main.children[i].addEventListener('click',markSquare)
        }
    }

    const markSquare = (square) => {
        if(square.target.innerText === ""){
            const index = square.target.dataset.grid
            square.target.innerText = currentPlayer.marker
            board[index] = currentPlayer.marker
            counter++
            
            if(checkForWinner()){
                displayWinner(counter)
            }else if(counter === 9){
                displayWinner(counter)
            }
            switchPlayer()
            currentTurn.innerText = `${currentPlayer.name}'s turn`
        }        
    }



    const restart = () => {
        const restartBtn = document.getElementById("restart");
        const modal = document.getElementById("modal");
        restartBtn.addEventListener("click", () => {
            counter = 0;
            currentTurn.innerText = `${player1.name}'s turn`
            currentPlayer = player1;
            board = []
            modal.classList.add("hidden");
        })

        const main = document.getElementById('root')
        for (let i = 0; i < board.length; i++){
            main.children[i].innerText = ''
        }
    }

    const displayWinner = (counter) => {
       const modal = document.getElementById("modal");
       const display = modal.children[0]
       modal.classList.remove("hidden");
       
       if(counter < 8){
           display.innerText = `${currentPlayer.name} won the game!`;
       }else {
            display.innerText = `Is a draw!`;
       }
       
       restart()
    }
    
    return { startGame };
})();

const Game = (() => {
    gameBoard.startGame();
})();