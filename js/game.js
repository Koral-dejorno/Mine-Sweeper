'use strict'
const MINE = '💣'
const FLAG = '🚩'
const NORMAL = '😄'
const DEAD = '😷'
const WIN = '😎'
const EMPTY = ''

var gBoard
var gTimerInterval

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


function onInitGame() {
    gBoard = buildBoard()
    console.log(gBoard)
    countNegs()
    renderBoard(gBoard)


}

function cellClicked(elCell, i, j) {
    timer()
    getRandomMines(gLevel.mines, i, j)
    countNegs()
    const cell = gBoard[i][j]
    cell.isShown = true

    const cellContent = (cell.isMine) ? MINE : cell.minesAroundCount

    renderCell({ i, j }, cellContent)
}


function restartGame(elBtn) {
    onInitGame()

}


function onClickLevel(size = 4 , mines = 2) {
    gLevel.size = size
    gLevel.mines = mines
    clearInterval(gTimerInterval)
    onInitGame()
}