import "./Service.css"
import Header from "../Header/Header";
import {Link} from "react-router-dom"
import Footer from "../Footer/Footer";
import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
function Service() {
    return (
        <>
            <Header/>
            <div className="my-container">
                <form className="my-table">
                    <h1>Danh sách dịch vụ tại furama</h1>
                    <button className="btn btn-success">
            <NavDropdown id="nav-dropdown-dark-example"title="Thêm mới dịch vụ"menuVariant="dark">
                <Link to="/createVilla"><NavDropdown.Item href="#action/3.1">Villa</NavDropdown.Item></Link>
              <Link to="/createRoom"><NavDropdown.Item href="#action/3.2">Room</NavDropdown.Item></Link>
              <Link to="/createHouse"><NavDropdown.Item href="#action/3.3">House</NavDropdown.Item></Link>                        
            </NavDropdown>
            </button>                 
                    <table className={"table"}>
                        <tr>
                            <th>STT</th>
                            <th>Tên dịch vụ</th>
                            <th>Chỉnh sửa</th>
                            <th>Xóa</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Dịch vụ 1</td>
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
            <Footer/>
        </>
    )
}

export default Service;