import React from "react"

const BoardCell = (props) => {
    // Variable de estado
    //const [ showEmoji, setShowEmoji ] = useState(false)

    const butOnClick = () => {
        //setShowEmoji(true)
        props.mostrarCasillaOnClick(props.fila, props.col)
        console.log(`Click en (${props.fila},${props.col})`)
    }

    return <div className="col" style={{ height: "100%" }}>
        <button type="button" className="btn btn-warning fs-1"
            style={{ height: "100%", width: "100%" }}
            onClick={ butOnClick }>
            {
                // Operador ternario
                //<EXP_BOOLEANA> ? VALOR SI ES TRUE : VALOR SI ES FALSE
                props.cellData.seMuestra === true ? props.cellData.emoji : ""
            }
            
        </button>
    </div>
}

export default BoardCell