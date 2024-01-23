import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Contact.css"
import {useEffect} from "react";
import {Link} from "react-router-dom"
function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div>
              <Header/>
            </div>
            <div className="my-container">
               <form className="my-table">
                   <h1>Danh sách hợp đồng tại furama</h1>
                   <Link to="/createContact">
                   <button className="btn btn-success">Thêm mới hợp đồng</button>
                   </Link>
                   <table className={"table"}>
                       <tr>
                           <th>STT</th>
                           <th>Số hợp đồng</th>
                           <th>Ngày bắt đầu</th>
                           <th>Ngày kết thúc</th>
                           <th>Số tiền cọc trước</th>
                           <th>Tổng số tiền thanh toán</th>
                           <th>Chỉnh sửa</th>
                           <th>Xóa</th>
                       </tr>
                       <tr>
                           <td>1</td>
                           <td>Hđ1</td>
                           <td>Hđ1</td>
                           <td>Hđ1</td>
                           <td>Hđ1</td>
                           <td>Hđ1</td>
                           <td>
                               <button className={"btn btn-primary"}>Sửa</button>
                           </td>
                           <td>
                               <button className={"btn btn-danger"}>Xóa</button>
                           </td>
                       </tr>
                   </table>
               </form>
            </div>
            <div>
                <Footer/>
            </div>

        </>
    )
}
export default Contact;