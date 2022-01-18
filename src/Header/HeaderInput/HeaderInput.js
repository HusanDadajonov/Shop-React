import "./HeaderInput.css"

export default ()=> {
    return (
        <div className="header__inp-box">
            <input type="serch" autoComplete="off" placeholder="Type to Search" className="border-0 p-0 header__inp form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
    )
}