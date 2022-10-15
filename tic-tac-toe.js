window.addEventListener('DOMContentLoaded', ()=> {
    let squares= document.querySelectorAll("#board div");
    for (let box=0; box<squares.length; box++) {
        squares[box].classList.add("square");
    }

    const tiles= Array.from(document.querySelectorAll("#board div"));
    let gameActive= true;
    let currentPlayer= "X";
    let gameState= ["","","","","","","","",""];
    const resetButton= document.querySelector('.btn');
    const announcer= document.querySelector('#status');

    const userAction = (tile, index) => {
        if(isValidAction(tile) && gameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`.square.${currentPlayer}`);
            updateState(index);
            handleResultVal();
            changePlayer();
        }
    }

    const isValidAction = (tiles) => {
        if (tiles.innerText === 'X' || tiles.innerText === 'O'){
            return false;
        }
        return true;
    };

    const updateState =  (index) => {
        gameState[index] = currentPlayer;
    }

    const changePlayer = () => {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultVal() {
        let roundW = false;
        for (let i = 0; i <= 7; i++) {
            const winCond = winningConditions[i];
            const x = gameState[winCond[0]];
            const y = gameState[winCond[1]];
            const z = gameState[winCond[2]];
            if (x === '' || y === '' || z === '') {
                continue;
            }
            if (x === y && y === z) {
                roundW = true;
                break;
            }
        }
        if (roundW) {
            announce(currentPlayer);
            gameActive = false;
            return;
        };

    const resetState = () => {
        gameState = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        if (currentPlayer === 'O') {
            changePlayer();
        }

        tiles.forEach(tiles => {
            tiles.innerText = '';
            tiles.classList.remove('.square.X');
            tiles.classList.remove('.square.O');
        });
    }

    const announce = (type) => {
        switch(type){
            case 'X':
                announcer.classList.add('you-won');
                announcer.innerHTML = "Congratulations! X is the Winner!";
                break;
            case 'Y':
                announcer.classList.add('you-won');
                announcer.innerHTML = "Congratulations! X is the Winner!";
        }
        announcer.classList.remove('hide');
    };

    tiles.forEach( (tiles, index) => {
        tiles.addEventListener('click', () => userAction(tiles, index));
    });

    for (let colour=0; colour < squares.length; colour++){
        squares[colour].onmouseover = function() {
            this.classList.add('hover');
        }
        squares[colour].onmouseout = function() {
            this.classList.remove('hover');
        }
    }

    resetButton.addEventListener('click', resetState);
};
    /*const options = ['X','O'];
    let currentPlayer= 0;
    var stateOfGame= board.children.length;
    var nextPlayer;
    var XorO;

    for (let index = 0; index < stateOfGame; index++) {
        nextPlayer = board.children[index];
        nextPlayer.addEventListener('click', tileclick,{once:true});
    }

    function tileclick() {
        this.textContent= options[currentPlayer];
        this.classList.add(options[currentPlayer]);
        currentPlayer= currentPlayer >= options.length - 1?0 : currentPlayer + 1 ;
        if (checkWinner(squares)) {
            updateWinner.classList.add('you-won');
            updateWinner.innerHTML = "Congratulations! ${XorO} is the Winner!";
        }
    }

    for (let colour=0; colour < squares.length; colour++){
        squares[colour].onmouseover = function() {
            this.classList.add('hover');
        }
        squares[colour].onmouseout = function() {
            this.classList.remove('hover');
        }
    }

    let updateWinner= document.querySelector('#status');
    const winningConditions= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    function checkWinner(squares) {
        for (let cond of winningConditions){
            if (squares[cond[0]].textContent == squares[cond[1]].textContent &&
                squares[cond[1]].textContent == squares[cond[2]].textContent &&
                squares[cond[0]].textContent != "") {
                return true;
            }
        } {return false;}
    }

    const refresh0tn = document.querySelector('.btn');
    refresh0tn.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('#board div').forEach(square => square.innerHTML = "");
        updateWinner.classList.remove('you-won');
        updateWinner.textContent= "Move your mouse over a square and click to play an X or an O.";
    })
    //document.querySelectorAll("squares").forEach(square => square.addEventListener('click', ha))
    /*const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }
}
let squares= document.getElementsByClassName('.square');
console.log(squares);
squares.forEach(function(elem, index) {
    elem.addEventListener('mouseover', 
function(e) {
    e.target.classList.add('active');
    });
    elem.addEventListener('mouseout', 
function(e) {
        e.target.classList.remove('active');
    });
});    
*/})
