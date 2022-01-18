import "./Products.css";
import SliderProducts from "./SliderProducts/SliderProducts";
import Info from "./Info/Info";

export default ()=> {
    return (
       <div className="container">
            <div className="products d-flex">
                <SliderProducts />
                <Info />
            </div>
       </div>
    )
}   