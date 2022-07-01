//gameboard
let gameBoard = [
    {
        block:0,
        id: "one"
    },
    {
        block:0,
        id: "two"
    },
    {
        block:0,
        id: "three"
    },
    {
        block:0,
        id: "four"
    },
    {
        block:0,
        id: "five"
    },
    {
        block:0,
        id: "six"
    },
    {
        block:0,
        id: "seven"
    },
    {
        block:0,
        id: "eight"
    },
    {
        block:0,
        id: "nine"
    }
]
console.log(gameBoard[0].block)


if(gameBoard[0].block == gameBoard[1].block && gameBoard[0].block == gameBoard[2].block ) {
    console.log("yes")
}

//player

let playerOne = {
turn: 1,
winner: 0
}

let playerTwo = {
    turn: 0,
    winner: 0
}


//game
const boxes = document.querySelectorAll('.box');
const instr = document.getElementById("instr")
for (const box of boxes) {
    box.addEventListener('click', function onClick() {
        let theId = box.getAttribute('id')
      console.log(theId);
      Game(theId)
    });
   
  }


function Game(theId) {
    if(playerOne.winner>0 || playerTwo.winner > 0) {
        console.log("game over")
    }
    else {

    let result = gameBoard.find(item => item.id === theId);
    console.log(result.block)

    if(result.block>0) {
        console.log("used spot")
    }
    else {

if(playerOne.turn>playerTwo.turn) {
   let team = document.getElementById(theId)
    team.setAttribute('style', 'background-color: yellow;');
    playerOne.turn = 0;
    playerTwo.turn = 1;
    instr.innerHTML = "O turn"

    for(let i=0;i<gameBoard.length; i++) {
    if(gameBoard[i].id == theId) {
     gameBoard[i].block = 1
     winner()
    }
    }
}
else {
    let teamTwo = document.getElementById(theId)
    teamTwo.setAttribute('style', 'background-color: blue;');
    playerOne.turn = 1;
    playerTwo.turn = 0;
    instr.innerHTML = "X turn"

    for(let i=0;i<gameBoard.length; i++) {
        if(gameBoard[i].id == theId) {
         gameBoard[i].block = 2
         winner()
        }
        }
}
    }
}
}
//event listener

// const boxes = document.querySelectorAll('.box');

// boxes.forEach(box => {
//   box.addEventListener('click', function handleClick(event) {
    
//     console.log('box clicked', event);
    
//     box.setAttribute('style', 'background-color: yellow;');
//   });

// });

//winner winner chicken dinner

function winner() {

     let results = gameBoard.find(item => item.block === 0);
    let title = document.getElementById("title");


    if(gameBoard[0].block == 1 && gameBoard[1].block == 1 && gameBoard[2].block == 1) {
        console.log("X wins")
        playerOne.winner = 1;
        title.innerHTML = "X wins"
        instr.innerHTML = "game over"
    }

    else if(gameBoard[0].block == 2 && gameBoard[1].block == 2 && gameBoard[2].block == 2) {
        console.log("O wins")
        playerTwo.winner = 1;
        title.innerHTML = "O wins"
        instr.innerHTML = "game over"
    }
   
    else if(gameBoard[3].block == 1 && gameBoard[4].block == 1 && gameBoard[5].block == 1) {
        console.log("X wins")
        playerOne.winner = 1;
        title.innerHTML = "X wins"
        instr.innerHTML = "game over"
    }
    else if(gameBoard[3].block == 2 && gameBoard[4].block == 2 && gameBoard[5].block == 2) {
        console.log("O wins")
        playerTwo.winner = 1;
        title.innerHTML = "O wins"
        instr.innerHTML = "game over"
    }
    else if(gameBoard[6].block == 1 && gameBoard[7].block == 1 && gameBoard[8].block == 1) {
        console.log("X wins")
        playerOne.winner = 1;
        title.innerHTML = "X wins"
        instr.innerHTML = "game over"
    }
    else if(gameBoard[6].block == 2 && gameBoard[7].block == 2 && gameBoard[8].block == 2) {
        console.log("O wins")
        playerTwo.winner = 1;
        title.innerHTML = "O wins"
        instr.innerHTML = "game over"
    }
    else if(gameBoard[0].block == 1 && gameBoard[3].block == 1 && gameBoard[6].block == 1) {
        console.log("X wins")
        playerOne.winner = 1;
        title.innerHTML = "X wins"
        instr.innerHTML = "game over"
    }
    else if(gameBoard[0].block == 2 && gameBoard[3].block == 2 && gameBoard[6].block == 2) {
        console.log("O wins")
        playerTwo.winner = 1;
        title.innerHTML = "O wins"
        instr.innerHTML = "game over"
    }
    else if(gameBoard[1].block == 1 && gameBoard[4].block == 1 && gameBoard[7].block == 1) {
        console.log("X wins")
        playerOne.winner = 1;
        title.innerHTML = "X wins"
        instr.innerHTML = "game over"
    }
    else if(gameBoard[1].block == 2 && gameBoard[4].block == 2 && gameBoard[7].block == 2) {
        console.log("O wins")
        playerTwo.winner = 1;
        title.innerHTML = "O wins"
        instr.innerHTML = "game over"
    }
    else if(gameBoard[2].block == 1 && gameBoard[5].block == 1 && gameBoard[8].block == 1) {
        console.log("X wins")
        playerOne.winner = 1;
        title.innerHTML = "X wins"
        instr.innerHTML = "game over"
    }
    else if(gameBoard[2].block == 2 && gameBoard[5].block == 2 && gameBoard[8].block == 2) {
        console.log("O wins")
        playerTwo.winner = 1;
        title.innerHTML = "O wins"
        instr.innerHTML = "game over"
    }
    else if(gameBoard[0].block == 1 && gameBoard[4].block == 1 && gameBoard[8].block == 1) {
        console.log("X wins")
        playerOne.winner = 1;
        title.innerHTML = "X wins"
        instr.innerHTML = "game over"
    }
    else if(gameBoard[0].block == 2 && gameBoard[4].block == 2 && gameBoard[8].block == 2) {
        console.log("O wins")
        playerTwo.winner = 1;
        title.innerHTML = "O wins"
        instr.innerHTML = "game over"
    }
    else if(gameBoard[2].block == 1 && gameBoard[4].block == 1 && gameBoard[6].block == 1) {
        console.log("X wins")
        playerOne.winner = 1;
        title.innerHTML = "X wins"
        instr.innerHTML = "game over"
    }
    else if(gameBoard[2].block == 2 && gameBoard[4].block == 2 && gameBoard[6].block == 2) {
        console.log("O wins")
        playerTwo.winner = 1;
        title.innerHTML = "O wins"
        instr.innerHTML = "game over"
    }

    else if(results===undefined) {
        console.log("stale mate")
        playerOne.winner = 2;
        title.innerHTML = "stale mate"
        instr.innerHTML = "game over"
    }

    }


    //restart
    document.getElementById("btn").addEventListener("click", restartGame);
    btn.addEventListener("click", restartGame);

function restartGame() {
   
    for(let i=0;i<gameBoard.length; i++) {
gameBoard[i].block =0;
box = document.getElementsByClassName("box")
box[i].removeAttribute('style')
console.log(box[i])
}
playerOne.turn = 1;
playerTwo.turn = 0;
playerOne.winner = 0;
playerTwo.winner = 0;

title.innerHTML = "TICTACTOE"
instr.innerHTML = "X turn"


}
