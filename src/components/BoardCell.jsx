const BoardCell = () => {
    return <div className="col" style={{ height: "100%" }}>
        <button id="0_0" type="button" className="btn btn-warning fs-1"
            style={{ height: "100%", width: "100%" }}
            onclick="casillaOnClick(0, 0)">
            &#129409;
        </button>
    </div>
}

export default BoardCell