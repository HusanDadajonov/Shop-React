import HeaderInput from "../HeaderInput/HeaderInput";
import DropDown from "../DropDown/DropDown";
import SearchBtn from "../SearchBtn/SearchBtn";
import "./Form.css"

export default ()=> {
    return (
        <form className="header__form">
            <div className="header__wrap d-flex align-items-center">
                <SearchBtn />
                <HeaderInput />
                <DropDown />
            </div>
        </form>
    )
}