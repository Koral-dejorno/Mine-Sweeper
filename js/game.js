'use strict'
const MINE = '💣'
const FLAG = '🚩'
const NORMAL = '😄'
const DEAD = '😷'
const WIN = '😎'

var gBoard = {
    minesAroundCount: 4,
    isShown: false,
    isMine: false,
    isMarked: true
}
var gLevel = {
    SIZE: 4,
    MINES: 2
}

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}



function initGame() {
    gBoard = buildBoard()
    console.table(gBoard)
    renderBoard(gBoard)
    setMinesNegsCount(gBoard)
    getNumberCells(gBoard)

}

function buildBoard() {
    var isShown= false
    var size = 4
    const board = []
    for (var i = 0; i < size; i++) {
        board[i] = []
        for (var j = 0; j < size; j++) {
            board[i][j] = ''
        }
    }
    isShown = true
    board[0][1] = MINE
    board[3][0] = MINE
    return board
}



function setMinesNegsCount(board) {


    var minesAroundCount = 0
    for (var i = 0; i <= board.length + 1; i++) {
        if (i < 0 || i >= board.length) continue

        for (var j = 0; j <= board.length + 1; j++) {
            if (j < 0 || j >= board.length) continue

            var currCell = board[i][j]
            if (currCell === MINE) minesAroundCount++
        }
    }
    return minesAroundCount
}

function getNumberCells(){
	var numberCells = []

    for (var i = 0; i < gBoard.length; i++) {

        for (var j = 0; j < gBoard[i].length; j++) {
			
            if(gBoard[i][j] != MINE){
                numberCells.push(getRandomIntInt(1,4))
            
            }
        }
    }

    return numberCells
} 



function cellClicked(elCell, i, j) {
gBoard.isShown = false
}

