import "./Carousel-Card.css"
function CarouselCards() {
    return (
        <>
            <div className="flex">
                <div className="card">
                    <img className="picture-card-carousel" src="img/baotangtranh.webp" alt=""></img>
                    <strong>Bảo Tàng Tranh 3D Art in Paradise</strong>
                </div>

                <div className="card">
                    <img className="picture-card-carousel" src="img/thegioiupnguoc.webp" alt=""></img>
                    <strong>Upside Down World</strong>
                </div>

                <div className="card">
                    <img className="picture-card-carousel" src="img/hoian.webp" alt=""></img>
                    <strong>Phố Cổ Hội An</strong>
                </div>
                <div className="card">
                    <img className="picture-card-carousel" src="img/myson.webp" alt=""></img>
                    <strong>Thánh Địa Mỹ Sơn </strong>
                </div>
            </div>

        </>
    )
}

export default CarouselCards;