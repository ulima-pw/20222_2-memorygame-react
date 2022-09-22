import BoardRow from "./BoardRow"
import React from "react"

const Board = (props) => {
    /*
    [1, 3, 5] => [1, 9, 25]
    [cuadrado(1), cuadrado(3), cuadrado(5) ]
    map( [1, 3, 5] , cuadrado) => [1, 9, 25]

    map( [0, 0, 0, 0, 0, 0], (elem) => {
        return <BoardRow /> 
    }) => [<BoardRow />, <BoardRow />, <BoardRow />, <BoardRow />, <BoardRow />, <BoardRow /> ]

    */

    const arrCeros = Array(props.numRows).fill(0)
    const arrBoardRows = arrCeros.map(( _ , index) => {
        return <BoardRow 
                    fila={index} 
                    numCols={ props.numCols }
                    rowData={ props.boardData[index] }/>
    })
    return <div>
        { arrBoardRows }
    </div>
}

export default Board