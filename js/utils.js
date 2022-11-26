
function renderBoard(board) {

    var strHTML = '<table><tbody>'
    for (var i = 0; i < board.length; i++) {

        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {


            const className = `cell cell-${i}-${j}`

            strHTML += `<td class="${className}" oncontextmenu="cellMarked(event, ${i}, ${j})" onclick="cellClicked(this, ${i},${j})"></td>`
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'

    const elContainer = document.querySelector('.board')
    elContainer.innerHTML = strHTML
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
    return board
}


function setMinesNegsCount(board, rowIdx, colIdx) {
    var negsCount = 0
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (i === rowIdx && j === colIdx) continue
            if (j < 0 || j >= board[0].length) continue
            var currCell = board[i][j]
            if (currCell.isMine) negsCount++

        }
    }
    return negsCount
}

function countNegs() {

    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard.length; j++) {

            var currCell = gBoard[i][j]
            currCell.minesAroundCount = setMinesNegsCount(gBoard, i, j)
        }
    }
}

function cellMarked(ev, i, j) {
    ev.preventDefault()
    console.log('i,j:', i, j)

    const cell = gBoard[i][j]
    cell.isMarkes = true

    renderCell({ i, j }, FLAG)
}


function getRandomMines(minesCount, i, j) {
    for (var i = 0; i < minesCount; i++) {
        var i = getRandomInt(0, gLevel.size)
        var j = getRandomInt(0, gLevel.size)
      gBoard[i][j].isMine = true
    }
}





function renderCell(location, value) {
    const cellSelector = '.' + getClassName(location) // cell-i-j
    const elCell = document.querySelector(cellSelector)
    elCell.innerHTML = value
}


function getClassName(location) {
    const cellClass = 'cell-' + location.i + '-' + location.j
    return cellClass
}


function timer() {
    gStartTime = Date.now()
    gTimeInterval = setInterval(() => {
        const seconds = (Date.now() - gStartTime) / 1000
        var elTime = document.querySelector('.time')
        elTime.innerText = seconds.toFixed(3)
    }, 1)
}


function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}




