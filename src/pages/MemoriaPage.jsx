import Board from "../components/Board"
import Header from "../components/Header"

const MemoriaPage = () => {
    return <div className="container">
        <Header />
        <Board numRows={ 8 } numCols={ 2 }/>
    </div>
}

export default MemoriaPage