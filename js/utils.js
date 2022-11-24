
function renderBoard(board) {

    var strHTML = '<table><tbody>'
    for (var i = 0; i < board.length; i++) {

        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            // var currCell = board[i][j]



            const className = `cell cell-${i}-${j}`

            // const cell = (board[i][j].isMine) ? `${MINE}` : `${negs}`
            // if (board.isShown === true) cell



            strHTML += `<td class="${className}" oncontextmenu="cellMarked(event, ${i}, ${j})" onclick="cellClicked(this, ${i},${j})"></td>`
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'

    const elContainer = document.querySelector('.board')
    elContainer.innerHTML = strHTML
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
}
function cellClicked(elCell, i, j) {

    // console.log('i,j:', i,j)
    console.log('gBoard[i][j]:', gBoard[i][j])

    const cell = gBoard[i][j]
    cell.isShown = true

    const cellContent = (cell.isMine) ? MINE : cell.minesAroundCount

    renderCell({ i, j }, cellContent)
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










