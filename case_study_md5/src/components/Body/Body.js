import "./Body.css"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp'; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import CarouselCard from "../Carousel-Card/Carousel-Card";
import CarouselCards from "../Carousel-Card/Carousel-Cards";

function Body() {
    return (
        <>
            <div className="container-fluid px-0 mb-5">
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="img/khachsan-1.jpg" alt="Image"></img>
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-7 text-start">
                                            <p className="fs-4 text-white animated slideInRight">Chào mừng tới
                                                với <strong>Furama Đà Nẵng</strong></p>
                                            <h1 className="display-1 text-white mb-4 animated slideInRight">Khu nghĩ
                                                dưỡng bậc nhất </h1>
                                            <a href=""
                                               className="btn btn-primary rounded-pill py-3 px-5 animated slideInRight">Tìm
                                                hiểu thêm</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="img/khachsan-2.jpg" alt="Image"></img>
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-end">
                                        <div className="col-lg-7 text-end">
                                            <p className="fs-4 text-white animated slideInLeft">Chào mừng tới với
                                                <strong>Furama Đà Nẵng</strong></p>
                                            <h1 className="display-1 text-white mb-5 animated slideInLeft">Phục vụ quý
                                                khách tốt nhất</h1>
                                            <a href=""
                                               className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Tìm
                                                hiểu thêm</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-0 feature-row">
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <div className="feature-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4"
                                     style={{width: '64px', height: '64px'}}>
                                    <img className="img-fluid" src="img/icon/icon-1.png" alt="Icon"></img>
                                </div>
                                <h5 className="mb-3">Furama</h5>
                                <p className="mb-0"> Resort với bờ biển dài, cát trắng mịn, những làn gió mát mang hương
                                    thơm vị mặn của biển sẽ mang đến cho du khách một kỳ nghỉ dưỡng tuyệt vời.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <div className="feature-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4"
                                     style={{width: '64px', height: '64px'}}>
                                    <img className="img-fluid" src="img/icon/icon-2.png" alt="Icon"></img>
                                </div>
                                <h5 className="mb-3">Đội ngũ nhân viên chuyên nghiệp</h5>
                                <p className="mb-0">tự hào sở hữu một đội ngũ nhân viên chuyên nghiệp, nhiệt tình và chu
                                    đáo. Đội ngũ nhân viên của chúng tôi được đào tạo bài bản, luôn sẵn sàng đáp ứng mọi
                                    nhu cầu của quý khách.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <div className="feature-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4"
                                     style={{width: '64px', height: '64px'}}>
                                    <img className="img-fluid" src="img/icon/icon-3.png" alt="Icon"></img>
                                </div>
                                <h5 className="mb-3">Giá cả</h5>
                                <p className="mb-0"> luôn nỗ lực mang đến cho quý khách những dịch vụ chất lượng với giá
                                    cả hợp lý. Giá phòng của chúng tôi được niêm yết công khai và cạnh tranh với các
                                    khách sạn cùng hạng ở khu vực.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                            <div className="feature-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4"
                                     style={{width: '64px', height: '64px'}}>
                                    <img className="img-fluid" src="img/icon/icon-4.png" alt="Icon"></img>
                                </div>
                                <h5 className="mb-3">Hỗ trợ 24/7</h5>
                                <p className="mb-0">Chúng tôi có đội ngũ nhân viên chuyên nghiệp, nhiệt tình và chu đáo
                                    luôn túc trực để giải đáp thắc mắc, xử lý các yêu cầu của quý khách.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl about my-5">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-6">
                            <div className="h-100 d-flex align-items-center justify-content-center"
                                 style={{minHeight: '300px'}}>
                                    <img src={"img/about.jpg"} style={{width: '900px'}}/>                              
                            </div>
                        </div>
                        <div className="col-lg-6 pt-lg-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="bg-white rounded-top p-5 mt-lg-5">
                                <p className="fs-5 fw-medium text-primary">Về chúng tôi</p>
                                <h1 className="display-6 mb-4">Luôn hướng tới cho khách hàng một trải nghiệm tốt
                                    nhất</h1>
                                <p className="mb-4">cung cấp nhiều loại phòng khác nhau, từ phòng Superior đến phòng
                                    Suite, đáp ứng mọi nhu cầu của khách hàng. Tất cả các phòng đều được trang bị đầy đủ
                                    tiện nghi hiện đại, mang đến cho quý khách sự thoải mái và tiện nghi nhất.</p>
                                <div className="row g-5 pt-2 mb-5">
                                    <div className="col-sm-6">
                                        <img className="img-fluid mb-4" src="img/icon/icon-5.png" alt=""></img>
                                        <h5 className="mb-3">Dịch vụ được quản lý</h5>

                                    </div>
                                    <div className="col-sm-6">
                                        <img className="img-fluid mb-4" src="img/icon/icon-2.png" alt=""></img>
                                        <h5 className="mb-3">Phục vụ tận tâm</h5>

                                    </div>
                                </div>
                                <a className="btn btn-primary rounded-pill py-3 px-5" href="">Tìm hiểu thêm</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal modal-video fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div class="ratio ratio-16x9">
                                <iframe className="embed-responsive-item" src="" id="video" allowfullscreen
                                        allowscriptaccess="always"
                                        allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>

                        <h1 className="display-5 mb-5">Một số dịch vụ mà chúng tôi cung cấp</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item position-relative h-100">
                                <div className="service-text rounded p-5">
                                    <div className="btn-square bg-light rounded-circle mx-auto mb-4"
                                         style={{width: '100%', height: '100%'}}>
                                        <img className="img-fluid dv" src="img/phong-nghi.jpg" alt="Icon"></img>
                                    </div>
                                    <h5 className="mb-3">Phòng nghĩ cao cấp</h5>
                                    <p className="mb-0">Phòng ngủ tại Furama chúng tôi được thiết kế và chọn các chất
                                        liệu hàng đầu, mang đến cảm giác thoải mái</p>
                                </div>
                                <div className="service-btn rounded-0 rounded-bottom">
                                    <a className="text-primary fw-medium" href="">Đọc thêm<NavigateNextSharpIcon/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item position-relative h-100">
                                <div className="service-text rounded p-5">
                                    <div className="btn-square bg-light rounded-circle mx-auto mb-4"
                                         style={{width: '100%', height: '100%'}}>
                                        <img className="img-fluid dv" src="img/nha-hang.jpg" alt="Icon"></img>
                                    </div>
                                    <h5 className="mb-3">Nhà hàng</h5>
                                    <p className="mb-0">Cung cấp các sơn hào hải vị, các đầu bếp có tay nghề lâu năm và
                                        có nhiều kinh nghiệm, chúc quan khách ngon miệng</p>
                                </div>
                                <div className="service-btn rounded-0 rounded-bottom">
                                    <a className="text-primary fw-medium" href="">
                                        Đọc thêm<NavigateNextSharpIcon/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item position-relative h-100">
                                <div className="service-text rounded p-5">
                                    <div className="btn-square bg-light rounded-circle mx-auto mb-4"
                                         style={{width: '100%', height: '100%'}}>
                                        <img className="img-fluid dv" src="img/ho-boi.jpg" alt="Icon"></img>
                                    </div>
                                    <h5 className="mb-3">Hồ bơi<i></i></h5>
                                    <p className="mb-0">Hồ bơi sạch sẽ, chế độ lọc nước một ngày một lần, bể bởi Furama
                                        là bể bơi 4 mùa</p>
                                </div>
                                <div className="service-btn rounded-0 rounded-bottom">
                                    <a className="text-primary fw-medium" href="">Đọc thêm<NavigateNextSharpIcon/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item position-relative h-100">
                                <div className="service-text rounded p-5">
                                    <div className="btn-square bg-light rounded-circle mx-auto mb-4"
                                         style={{width: '100%', height: '100%'}}>
                                        <img className="img-fluid dv" src="img/phong-gym.jpg" alt="Icon"></img>
                                    </div>
                                    <h5 className="mb-3">Phòng gym</h5>
                                    <p className="mb-0">Phòng gym đầy đủ máy móc </p>
                                </div>
                                <div className="service-btn rounded-0 rounded-bottom">
                                    <a className="text-primary fw-medium" href="">Đọc thêm<NavigateNextSharpIcon/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item position-relative h-100">
                                <div className="service-text rounded p-5">
                                    <div className="btn-square bg-light rounded-circle mx-auto mb-4"
                                         style={{width: '100%', height: '100%'}}>
                                        <img className="img-fluid dv" src="img/spa.jpg" alt="Icon"></img>
                                    </div>
                                    <h5 className="mb-3">Spa</h5>
                                    <p className="mb-0">Dịch vụ spa miễn phí </p>
                                </div>
                                <div className="service-btn rounded-0 rounded-bottom">
                                    <a className="text-primary fw-medium" href="">Đọc thêm<NavigateNextSharpIcon/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item position-relative h-100">
                                <div className="service-text rounded p-5">
                                    <div className="btn-square bg-light rounded-circle mx-auto mb-4"
                                         style={{width: '100%', height: '100%'}}>
                                        <img className="img-fluid dv" src="img/du-lich.jpg" alt="Icon"></img>
                                    </div>
                                    <h5 className="mb-3">Du lịch</h5>
                                    <p className="mb-0">Gồm nhiều gói du lịch</p>
                                </div>
                                <div className="service-btn rounded-0 rounded-bottom">
                                    <a className="text-primary fw-medium" href="">Đọc thêm<NavigateNextSharpIcon/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           <h1 className="display-5 mb-5">Các địa điểm du lịch mà Furama cung cấp</h1>
            <Carousel className="container" showThumbs={false}>
                    <CarouselCard/>
                   <CarouselCards/>
            </Carousel>


            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="fs-5 fw-medium text-primary">Báo giá</p>
                            <h1 className="display-5 mb-4">Cần sự trợ giúp từ chuyên gia của chúng tôi? Đã từng ở
                                đây!</h1>
                            <p>Bạn muốn tìm hiểu về chúng tôi, đừng ngần ngại, hãy liên hệ với chúng tôi, bằng cách
                                điền
                                thông tin ở bên cạnh</p>
                            <p className="mb-4">Hoặc có thể gọi trực tiếp vào đường dây nóng !!!</p>
                            <a className="d-inline-flex align-items-center rounded overflow-hidden border border-primary"
                               href="">
                        <span className="btn-lg-square bg-info" style={{width: '55px', height: '55px'}}>
                                <LocalPhoneSharpIcon/>
                        </span>
                                <span className="fs-5 fw-medium mx-4">0814742505</span>
                            </a>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <h2 className="mb-4">Điền thông tin vào đây</h2>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name"
                                               placeholder="Your Name"/>
                                        <label for="name">Họ và tên</label>

                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="mail"
                                               placeholder="Your Email"/>
                                        <label for="mail">Email</label>

                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="mobile"
                                               placeholder="Your Mobile"/>
                                        <label for="mobile">Số điện thoại</label>

                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <select className="form-select" id="service">
                                            <option selected>Du lịch</option>
                                            <option value="">Spa</option>
                                            <option value="">Bơi</option>
                                            <option value="">Nhà hàng</option>
                                        </select>
                                        <label for="service">Chọn một dịch vụ</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea class="form-control" placeholder="Leave a message here" id="message"
                                                  style={{height: '130px'}}></textarea>
                                        <label for="message">Lời nhắn</label>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Gửi</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl pt-5">
                <div className="container">
                    <div className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp" data-wow-delay="0.1s"
                         style={{maxWidth: '500px'}}>
                        <p className="fs-5 fw-medium text-primary">đánh giá</p>
                        <h1 className="display-5 mb-5">Feedback của khách hàng về dịch vụ tại furama</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
                            <img className="mb-4" src="img/testimonial-1.jpg" alt=""></img>
                            <p className="mb-4">Quả thực là một trải nghiệm đáng nhớ, nhân viên thân thiện good</p>
                            <h5>Ally</h5>
                            <span className="text-primary">Profession</span>
                        </div>
                        <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
                            <img className="mb-4" src="img/testimonial-2.jpg" alt=""></img>
                            <p className="mb-4">Thực sự chu đáo từ khi bước vào đến lúc ra về, một chuyến đi thật
                                đầy ý
                                nghĩa</p>
                            <h5>Peter</h5>
                            <span className="text-primary">Profession</span>
                        </div>
                        <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
                            <img className="mb-4" src="img/testimonial-3.jpg" alt=""></img>
                            <p className="mb-4">Tôi yêu đất nước Việt Nam, từ con người đến cảnh quan thực sự tuyệt
                                vời</p>
                            <h5>Hanry</h5>
                            <span className="text-primary">Profession</span>
                        </div>
                        <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
                            <img className="mb-4" src="img/testimonial-4.jpg" alt=""></img>
                            <p className="mb-4">Tôi sẽ ghé đây lần nữa, tuyệt vời Đà Nẵng ơi</p>
                            <h5>Marry</h5>
                            <span className="text-primary">Profession</span>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#"
               class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><ArrowUpwardSharpIcon/></a>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
            <script src="lib/wow/wow.min.js"></script>
            <script src="lib/easing/easing.min.js"></script>
            <script src="lib/waypoints/waypoints.min.js"></script>
            <script src="lib/owlcarousel/owl.carousel.min.js"></script>
            <script src="lib/lightbox/js/lightbox.min.js"></script>
            <script src="js/main.js"></script>

        </>
    )
}

export default Body;