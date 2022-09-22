import Board from "../components/Board"
import Header from "../components/Header"
import createBoard from "../models/board"



const MemoriaPage = () => {

    const board = createBoard(5, 2)

    return <div className="container">
        <Header />
        <Board numRows={ 5 } numCols={ 2 } boardData={ board }/>
    </div>
}

export default MemoriaPage