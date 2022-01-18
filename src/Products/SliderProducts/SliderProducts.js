import "./SliderProducts.css";

export default ()=> {
    return (
        <div className="slider col-4">
            <div className="slider__img--wrap">
                <img className="slider__img" src="https://lh5.googleusercontent.com/p/AF1QipPDe28myBUSMd5CrJ5DOT3sSszlIL072_NUxm68=w600-h321-p-k-no" alt="burger-img" />
            </div>
            <ul className="slider__list list-unstyled d-flex">
                <li className="slider__item slider__item--active"><img className="slider__img" src="https://lh5.googleusercontent.com/p/AF1QipPDe28myBUSMd5CrJ5DOT3sSszlIL072_NUxm68=w600-h321-p-k-no" alt="burger-img" /></li>
                <li className="slider__item"><img className="slider__img" src="https://lh5.googleusercontent.com/p/AF1QipPDe28myBUSMd5CrJ5DOT3sSszlIL072_NUxm68=w600-h321-p-k-no" alt="burger-img" /></li>
                <li className="slider__item"><img className="slider__img" src="https://lh5.googleusercontent.com/p/AF1QipPDe28myBUSMd5CrJ5DOT3sSszlIL072_NUxm68=w600-h321-p-k-no" alt="burger-img" /></li>
                <li className="slider__item"><img className="slider__img" src="https://lh5.googleusercontent.com/p/AF1QipPDe28myBUSMd5CrJ5DOT3sSszlIL072_NUxm68=w600-h321-p-k-no" alt="burger-img" /></li>
                <li className="slider__item"><img className="slider__img" src="https://lh5.googleusercontent.com/p/AF1QipPDe28myBUSMd5CrJ5DOT3sSszlIL072_NUxm68=w600-h321-p-k-no" alt="burger-img" /></li>
            </ul>
        </div>
    )
}