import "./HeaderBtns.css"

export default ()=> {
    return (
        <ul className="header__list d-flex align-items-center p-0 m-0">
            <li className="header__item d-flex align-items-center"><i className='bx bx-medal'></i><p className="header__btns-text">Orders</p></li>
            <li className="header__item d-flex align-items-center"><i className='bx bx-cart'></i><p className="header__btns-text">Cart</p></li>
            <li className="header__item d-flex align-items-center"><i className='bx bx-user'></i><p className="header__btns-text">Profile</p></li>
        </ul>
    )
}