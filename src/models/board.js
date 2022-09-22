
// [ [ { seMuestra : false, emoji : "112312312" } , {...}], [{...}, {...}] , [{...}, {...}]  ]

let board; // global
const arrEmojisDisponibles = ["🦁", "🐱", "🐰", "🐷", "🐵"]


function createBoard(numRows, numCols) {
    // Creamos arreglo de emojis del tablero
    const arrEmojis = []
    for (let emoji of arrEmojisDisponibles) {
        arrEmojis.push(emoji)
        arrEmojis.push(emoji)
    }



    const rows = []

    for (let i = 0; i < numRows; i++) {
        const casillas = []

        // crear casillas
        for (let j = 0; j < numCols; j++) {
            const posAleatoria = Math.floor(
                Math.random() * (arrEmojis.length - 1)
            )

            // Sacamos emoji del arrEmojis
            const emoji = arrEmojis.splice(posAleatoria, 1)[0]

            casillas.push({
                seMuestra : false,
                emoji : emoji
            })
        }

        rows.push(casillas)
    }

    return rows
}

function printBoard(board) {
    for (let row of board) {
        let rowStr = ""
        for (let casilla of row) {
            rowStr = rowStr + casilla + " "
        }
        console.log(rowStr)
    }
}

function setValue(board, row, col, value) {
    board[row][col] = value
}

//function getValue(board, row, col) {
const getValue = (board, row, col) => {
    return board[row][col]
}

export default createBoard