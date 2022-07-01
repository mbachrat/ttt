//gameboard
let gameBoard = [
    {
        block:0
    },
    {
        block:0
    },
    {
        block:0
    },
    {
        block:0
    },
    {
        block:0
    },
    {
        block:0
    },
    {
        block:0
    },
    {
        block:0
    },
    {
        block:0
    }
]
console.log(gameBoard[0].block)


if(gameBoard[0].block == gameBoard[1].block && gameBoard[0].block == gameBoard[2].block ) {
    console.log("yes")
}

//player

let playerOne = {
turn: 1
}

let playerTwo = {
    turn: 0
}


//game
const boxes = document.querySelectorAll('.box');

boxes.forEach(box =>{
    box.addEventListener('click', console.log("hello"));

})


function Game() {

if(playerOne.turn>playerTwo.turn) {
    box.setAttribute('style', 'background-color: yellow;');
    playerOne.turn = 0;
    playerTwo.turn = 1;
}
else {
    box.setAttribute('style', 'background-color: blue;');
    playerOne.turn = 1;
    playerTwo.turn = 0;
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

