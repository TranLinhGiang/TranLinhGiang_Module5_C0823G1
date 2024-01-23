import { Link } from "@mui/material";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./CreateService.css"
function CreateService(){
    return(
        <>
        <div>
            <Header/>
        </div>
        <div className="my-container">
            <Link to="/serviceList">
                <button className="btn btn-success">Trở về</button>
            </Link>
thêm mới dịch vụ
        </div>
        <div>
            <Footer/>
        </div>
        </>
    )
}
export default CreateService;