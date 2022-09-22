import { useState } from "react"
import Board from "../components/Board"
import Header from "../components/Header"
import createBoard from "../models/board"

const MemoriaPage = () => {

    // Variable de estado
    const [ board, setBoard ] = useState(createBoard(5, 2))

    const mostrarCasilla = (fila, col) => {
        const newBoard = [...board]  // spread operator (clona)
        newBoard[fila][col].seMuestra = true
        setBoard(newBoard)
    }

    return <div className="container">
        <Header />
        <Board 
            numRows={ 5 } 
            numCols={ 2 } 
            boardData={ board }
            mostrarCasillaOnClick={ mostrarCasilla }/>
    </div>
}

export default MemoriaPage