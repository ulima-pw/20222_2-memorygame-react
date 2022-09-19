import React from "react"



const BoardCell = (props) => {
    const butOnClick = () => {
        console.log(`Click en (${props.fila},${props.col})`)
    }

    return <div className="col" style={{ height: "100%" }}>
        <button type="button" className="btn btn-warning fs-1"
            style={{ height: "100%", width: "100%" }}
            onClick={ butOnClick }>
            &#129409;
        </button>
    </div>
}

export default BoardCell