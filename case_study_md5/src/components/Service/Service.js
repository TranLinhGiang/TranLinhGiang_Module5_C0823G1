import "./Service.css"
import Header from "../Header/Header";
import {Link} from "react-router-dom"
import Footer from "../Footer/Footer";
import React from "react";
function Service() {
    return (
        <>
            <Header/>
            <div className="my-container">
                <form className="my-table">
                    <h1>Danh sách dịch vụ tại furama</h1>
                    <Link to = "/createService">
                        <button className="btn btn-success">Thêm mới dịch vụ</button>
                    </Link>
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