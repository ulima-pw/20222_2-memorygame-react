import BoardCell from "./BoardCell"
import React from "react"

const BoardRow = (props) => {
    return <div className="row mb-4" style={ { height : "100px"} }>
        { 
            Array(props.numCols).fill(0).map(() => {
                return <BoardCell />
            }) 
        }
    </div>
}

export default BoardRow