import NavItem from "./NavItem/NavItem"

export default ()=> {
    return (
        <nav className="nav pb-4">
            <div className="container">
                <ul className="list-unstyled nav__list p-0 m-0 d-flex align-items-center">
                    <NavItem />
                </ul>
            </div>
        </nav>
    )
}