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



function timer() {
    var timer = document.querySelector('.timer span')
    var start = Date.now()

    gTimerInterval = setInterval(function () {
        var currTs = Date.now()
        var secs = parseInt((currTs - start) / 1000)
        var ms = (currTs - start) - secs * 1000
        ms = '000' + ms
        ms = ms.substring(ms.length - 2, ms.length)

        timer.innerText = `\n ${secs}:${ms}`
    }, 100)
}


function restartGame(elBtn) {
    onInitGame()
}


function beginner(elBtn){
    gLevel = {
        size: 4,
        mines: 2
    }
}

function Intermediate(elBtn){
    gLevel = {
        size: 8,
        mines: 14
    }
}