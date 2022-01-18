import "./NavItem.css";

export default ()=> {
    return (
        <>
            <li className="nav__item"><a className="nav__link text-decoration-none" href="#">Food Service</a></li>
            <li className="nav__item"><a className="nav__link text-decoration-none" href="#">Healthy & Beauty</a></li>
            <li className="nav__item"><a className="nav__link text-decoration-none" href="#">Industrial Ingredients</a></li>
            <li className="nav__item"><a className="nav__link text-decoration-none" href="#">Beverages</a></li>
            <li className="nav__item"><a className="nav__link text-decoration-none" href="#">Pet Supplies</a></li>
            <li className="nav__item nav__item--active"><a className="nav__link text-decoration-none" href="#">Frozen</a></li>
            <li className="nav__item"><a className="nav__link text-decoration-none" href="#">Cleaning Products</a></li>
        </>
    )
}   