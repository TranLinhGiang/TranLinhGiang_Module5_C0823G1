import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./createEmpoyee.css"
import {useEffect} from "react";
import * as method from "../../Service/method";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import "../../data/db"
import SettingsIcon from '@mui/icons-material/Settings';
import {toast} from "react-toastify";
import Table from "@mui/material/Table";
import AddIcon from '@mui/icons-material/Add';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
function Employee() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    let [sort,setSort] = useState(false)
    const [employeeList, setEmployeeList] = useState([]);
    const [employeeDelete, setEmployeeDelete] = useState(null);

    const handleShow = async (employee) => {
        await setEmployeeDelete(employee);
        setShow(true);
    };

    const getAll = async () => {
        let data = await method.getAllEmployeeList();
        setEmployeeList(data);
    };
    const sortEmployee = async () => {
        try {
            let sortedEmployees = await method.getAllEmployeeList();
            sortedEmployees.sort((a, b) => a.firstName.localeCompare(b.firstName)); // Sắp xếp trên biến tạm sortedEmployees
            setEmployeeList(sortedEmployees); // Cập nhật state với danh sách đã sắp xếp
        } catch (error) {
            console.error("Lỗi khi sắp xếp:", error);
        }
    };
    const sortEmployeeByWage= async ()=>{
        try {
            let sortedEmployees = await method.getAllEmployeeList();
            sortedEmployees.sort((a, b) => b.wage - a.wage); // Sắp xếp theo wage
            setEmployeeList(sortedEmployees);
        } catch (error) {
            console.error("Lỗi khi sắp xếp:", error);
        }
    }

    const handleDelete = async () => {
        try {
            await method.deletes(employeeDelete)
            const update = await method.getAllEmployeeList();
            setEmployeeList(update);
            handleClose();
            toast("xóa thành công !")
        } catch (e) {
            console.log(e);
        }
    };


    useEffect(() => {
        if (!sort ){
            getAll().then(()=>{
            });

        }else {
            sortEmployee().then(()=>{
            });

        }

    }, [sort]);
   function change() {
       setSort(prevSort => !prevSort);
   }
    return (
        <>
            <Header/>
            <div className="my-container">
                    <h1>Danh sách nhân viên </h1>
                    <Link to="/createEmployee">
                        <button className="btn btn-success"><AddIcon/> Thêm mới nhân viên</button>
                    </Link>

                    <button className={"btn btn-success position"} onClick={()=>{change()}}><LowPriorityIcon/> Sắp xếp theo tên (A-z)</button>

                    <button className={"btn btn-success positions"} onClick={sortEmployeeByWage}><LowPriorityIcon/> Sắp xếp theo lương</button>
                    <Table striped bordered hover variant="dark">
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
                        {employeeList.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.firstName}</td>
                                <td>{item.dateOfBirth}</td>
                                <td>{item.id_code}</td>
                                <td>{item.numberPhone}</td>
                                <td>{item.email}</td>
                                <td>{item.wage}</td>
                                <td>{item.level}</td>
                                <td>{item.location}</td>
                                <td>
                                    <Link to={`/editEmployee/${item.id}`}>
                                        <button className="btn btn-success"><SettingsIcon/></button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to="">
                                        <button onClick={() => handleShow(item)} className="btn btn-danger"><DeleteForeverIcon/></button>
                                    </Link>
                                </td>
                            </tr>

                        ))}
                        </tbody>
                    </Table>
                <br/>
            </div>
            <Footer/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xóa </Modal.Title>
                </Modal.Header>
                <Modal.Body>{employeeDelete && `Bạn chắc chắn muốn xóa ${employeeDelete.firstName}`} </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Employee;