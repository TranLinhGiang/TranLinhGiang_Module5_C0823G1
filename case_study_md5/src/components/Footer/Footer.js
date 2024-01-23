import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
return(
    <>
        <div className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-4">Liên hệ</h4>
                        <p className="mb-2"><LocationOnIcon/>280 Trần Hưng Đạo, Sơn Trà, Đà
                            Nẵng</p>
                        <p className="mb-2"><LocalPhoneIcon/>0814742505</p>
                        <p className="mb-2"><EmailIcon/>linhgiang123@gmail.com</p>
                        <div className="d-flex pt-3">
                            <a className="btn btn-square btn-light rounded-circle me-2" href=""><FacebookIcon/></a>
                            <a className="btn btn-square btn-light rounded-circle me-2" href=""><TwitterIcon/></a>
                            <a className="btn btn-square btn-light rounded-circle me-2" href=""><EmailIcon/></a>
                            <a className="btn btn-square btn-light rounded-circle me-2" href=""><YouTubeIcon/></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-4">Đường dẫn nhanh</h4>
                        <a className="btn btn-link" href=""><NavigateNextIcon/>Về chúng tôi</a>
                        <a className="btn btn-link" href=""><NavigateNextIcon/>Liên hệ chúng tôi</a>
                        <a className="btn btn-link" href=""><NavigateNextIcon/>Dịch vụ của chúng tôi</a>
                        <a className="btn btn-link" href=""><NavigateNextIcon/>Điều khoản và điều kiện</a>
                        <a className="btn btn-link" href=""><NavigateNextIcon/>Ủng hộ</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-4">Giờ kinh doanh</h4>
                        <p className="mb-1">Tất cả các ngày trong tuần</p>
                        <h6 className="text-light">24h</h6>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-4">Góp ý</h4>
                        <p>Điền thông tin vào đây</p>
                        <div className="position-relative w-100">
                            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text"
                                   placeholder="Tên email" style={{ color: 'while'}}/>
                                <button type="button"
                                        className="btn btn-light py-2 position-absolute top-0 end-0 mt-2 me-2">Đăng nhập
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid copyright py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="fw-medium text-light" href="#">Trần Linh Giang</a>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        TLG <a className="fw-medium text-light" href="https://htmlcodex.com">C0823G1</a>
                    </div>
                </div>
            </div>
        </div>

    </>
)
}
export default Footer