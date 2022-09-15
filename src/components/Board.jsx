const Board = () => {
    return <div className="row mb-4" style={ { height : "100px"} }>
        <div className="col" style={ { height : "100%"} }>
            <button id="0_0" type="button" className="btn btn-warning fs-1"
                style={ { height : "100%", width : "100%"} }
                onclick="casillaOnClick(0, 0)">
                &#129409;
            </button>
        </div>
        <div className="col" style={ { height : "100%"} }>
            <button id="0_1" onclick="casillaOnClick(0, 1)" 
                type="button" className="btn btn-warning fs-1" 
                style={ { height : "100%", width : "100%"} }>
                    &#129409;
            </button>
        </div>
        <div className="col" style={ { height : "100%"} }>
            <button id="0_2" onclick="casillaOnClick(0, 2)" 
                type="button" className="btn btn-warning fs-1" 
                style={ { height : "100%", width : "100%"} }>
                    &#129409;
            </button>
        </div>
        <div className="col" style={ { height : "100%"} }>
            <button id="0_3" onclick="casillaOnClick(0, 3)" 
                type="button" className="btn btn-warning fs-1" 
                style={ { height : "100%", width : "100%"} }>
                    &#129409;
            </button>
        </div>
    </div>
}

export default Board