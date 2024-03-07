import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
function Header() {
    return (
        <>
         <div className="hi">
             <div className="container-fluid bg-primary text-white d-none d-lg-flex">
                 <div className="container py-3 ">
                     <div className="d-flex align-items-center">
                         <Link to={"/"}>
                             <h2 className="text-white fw-bold m-0">Furama Đà Nẵng</h2>
                         </Link>
                         <div className="ms-auto d-flex align-items-center">
                             <small className="ms-4"><LocationOnIcon/>280 Trần Hưng Đạo, Sơn Trà, Đà Nẵng</small>
                             <small className="ms-4"><MarkEmailUnreadIcon/>linhgiang123@gmail.com</small>
                             <small className="ms-4"><LocalPhoneIcon/>0796680993</small>
                             <div className="ms-3 d-flex">
                                 <a className="btn btn-sm-square btn-light text-primary rounded-circle ms-2" href="https://www.facebook.com/piter.giang.3/"><FontAwesomeIcon icon={faFacebookF}/></a>
                                 <a className="btn btn-sm-square btn-light text-primary rounded-circle ms-2" href="https://www.facebook.com/piter.giang.3/"><FontAwesomeIcon icon={faTwitter}/></a>
                                 <a className="btn btn-sm-square btn-light text-primary rounded-circle ms-2" href="https://www.facebook.com/piter.giang.3/"><FontAwesomeIcon icon={faInstagram}/></a>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>

             <div className="container-fluid bg-white sticky-top ">
                 <div className="container ">
                     <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0 ">
                         <Link to={"/"} className="navbar-brand d-lg-none">
                             <h1>Furama Đà Nẵng</h1>
                         </Link>
                         <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                             <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse" id="navbarCollapse">
                             <div className="navbar-nav">
                                 <Link to={"/"} className="nav-item nav-link active">Trang chủ</Link>

                                 <div className="nav-item dropdown">
                                     <a href="#" className="nav-link" data-bs-toggle="dropdown">Quản lý Furama  
                                     <FontAwesomeIcon icon={faChevronDown}/>
                                     </a>
                                     <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                         <Link to={"/contactList"} className="dropdown-item">Hợp đồng</Link>
                                         <Link to={"/serviceList"} className="dropdown-item"> Dịch vụ</Link>
                                         <Link to={"/employeeList"} className="dropdown-item">Nhân viên</Link>
                                         <Link to={"/customerList"} className="dropdown-item">Khách hàng</Link>
                                     </div>
                                 </div>

                             </div>
                             <div className="ms-auto d-none d-lg-block">
                                 <a href="" className="btn btn-primary rounded-pill py-2 px-3">Báo giá</a>
                             </div>
                         </div>
                     </nav>
                 </div>
             </div>
         </div>
        </>
    )
}

export default Header;