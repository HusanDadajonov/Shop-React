import "./BredCumb.css"

export default ()=> {
    return (
        <div className="breadcrumb-wrap">
            <div className="container">
                <ol className="breadcrumb breadcrumb-wrap__list">
                    <li className="breadcrumb-item breadcrumb-wrap__item"><a href="#">Frozen</a></li>
                    <li className="breadcrumb-item breadcrumb-wrap__item"><a href="#">Juice</a></li>
                    <li className="breadcrumb-item breadcrumb-wrap__item"><a href="#">Mott's Unsweetened Applesauce</a></li>
                </ol>
                <a href="#" className="breadcrumb__desc d-flex align-items-center"><i className='bx bx-arrow-back'></i>Back</a>
            </div> 
        </div>
    )
}