'use strict'
const MINE = '💣'
const FLAG = '🚩'
const NORMAL = '😄'
const DEAD = '😷'
const WIN = '😎'
const EMPTY = ''

var gBoard 

var gLevel = {
    size: 4,
    mines: 2
}

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}


function initGame() {
    gBoard = buildBoard()
    console.log(gBoard)
    countNegs()
    renderBoard(gBoard)

}

function buildBoard() {
    var size = gLevel.size

    const board = []
    for (var i = 0; i < size; i++) {
        board[i] = []
        for (var j = 0; j < size; j++) {
            board[i][j] = { minesAroundCount: null, isShown: false, isMine: false, isMarked: false }
        }
    }

    board[1][1].isMine = board[3][0].isMine = true
    
    return board
}







