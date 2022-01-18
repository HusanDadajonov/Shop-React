import "./DropDown.css"

export default ()=> {
    return (
        <div className="dropdown">
            <button className="btn p-0  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">All Categories</button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#"> Retail </a></li>
                <li><a className="dropdown-item" href="#"> Foodservice </a></li>
                <li><a className="dropdown-item" href="#"> Industrial </a></li>
                <li><a className="dropdown-item" href="#"> Specials </a></li>
                <li><a className="dropdown-item" href="#"> Non-Food </a></li>
                <li><a className="dropdown-item" href="#"> K12/Schools </a></li> 
            </ul>
        </div>
    )
}