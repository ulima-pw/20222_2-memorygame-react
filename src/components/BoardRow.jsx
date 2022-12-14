import BoardCell from "./BoardCell"
import React from "react"

const BoardRow = (props) => {
    return <div className="row mb-4" style={ { height : "100px"} }>
        { 
            Array(props.numCols).fill(0).map((_, index) => {
                return <BoardCell 
                            key={ `cell_${index}` }
                            col={index} 
                            fila={props.fila}
                            cellData={ props.rowData[index] }
                            mostrarCasillaOnClick={ props.mostrarCasillaOnClick }/>
            }) 
        }
    </div>
}

export default BoardRow