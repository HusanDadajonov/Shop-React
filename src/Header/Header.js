import Logo from "./Logo/Logo";
import Form from "./Form/Form";
import HeaderBtns from "./HeaderBtns/HeaderBtns";
import "./Header.css"

export default ()=> {
    return (
       <header className="header">
            <div className="header__container container">
                <div className="header__row d-flex justify-content-between align-items-center">
                    <Logo />
                    <Form />
                    <HeaderBtns />
                </div>
            </div>
       </header>
    )
}