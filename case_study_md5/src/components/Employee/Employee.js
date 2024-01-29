import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import {useEffect} from "react";
import * as method from "../../Service/method";
import "../../data/db"
function Employee() {
    const [employeeList, setEmployeeList]= useState([])
    const getAll = async () => {
        let data = await method.getAllEmployeeList();
        console.log(data);
        setEmployeeList(data);
    } 
    useEffect(() => {
        getAll()
    }, []);
    return (
        <>
            <Header/>
            <div className="my-container">
                <form className="my-table">
                    <h1>Danh sách nhân viên tại furama</h1>
                    <Link to="/createEmployee"><button className="btn btn-success">Thêm mới nhân viên</button></Link>
                    <table className={"table"}>
                        <tr>
                            <th>STT</th>
                            <th>Họ tên khách hàng</th>
                            <th>Ngày tháng năm sinh</th>
                            <th>Số chứng minh</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Lương</th>
                            <th>Trình độ</th>
                            <th>Vị trí</th>
                            <th>Chỉnh sửa</th>
                            <th>Xóa</th>
                        </tr>
                        <tbody>
                       {employeeList.map((item, index)=>(
                        <tr key={item.id}>
                            <td>{index +1}</td>
                            <td>{item.firstName}</td>
                            <td>{item.dateOfBirth}</td>
                            <td>{item.id_code}</td>
                            <td>{item.numberPhone}</td>
                            <td>{item.email}</td>
                            <td>{item.wage}</td>
                            <td>{item.level}</td>
                            <td>{item.location}</td>
                            <td>
                                <Link to="/editEmployee">
                                    <button className="btn btn-success">Sửa</button>
                                </Link>
                            </td>
                            <td>
                                <Link to="">
                                    <button className="btn btn-danger">Xóa</button>
                                </Link>
                            </td>
                        </tr>
                        
                       ))}
                        </tbody>
                      
                    </table>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default Employee;