import BoardCell from "./BoardCell"
import React from "react"

const BoardRow = (props) => {
    return <div className="row mb-4" style={ { height : "100px"} }>
        { 
            Array(props.numCols).fill(0).map((_, index) => {
                return <BoardCell col={index} fila={props.fila}/>
            }) 
        }
    </div>
}

export default BoardRow