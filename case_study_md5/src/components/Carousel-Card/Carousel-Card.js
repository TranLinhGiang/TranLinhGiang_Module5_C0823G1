import "./Carousel-Card.css"

function CarouselCard() {
    return (
        <>
            <div className="flex">
                <div className="card">
                    <img className="picture-card-carousel" src="img/ngu-hanh-son.webp" alt=""></img>
                    <strong>Ngũ Hành Sơn</strong>
                </div>

                <div className="card">
                    <img className="picture-card-carousel" src="img/ban-dao-son-tra.webp" alt=""></img>
                    <strong>Bán Đảo Sơn Trà</strong>
                </div>

                <div className="card">
                    <img className="picture-card-carousel" src="img/banahill.webp" alt=""></img>
                    <strong>Bà Nà Hill</strong>
                </div>

                <div className="card">
                    <img className="picture-card-carousel" src="img/suoikhoang.webp" alt=""></img>
                    <strong>Công viên suối khoáng núi Thần tài</strong>
                </div>
            </div>
        </>
    )
}

export default CarouselCard;