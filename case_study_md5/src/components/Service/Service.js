import "./Service.css"
import Header from "../Header/Header";
import {Link} from "react-router-dom"
import Footer from "../Footer/Footer";
import React, {useEffect, useState} from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Table from "@mui/material/Table";
import * as method from "../../Service/method";
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InfoIcon from '@mui/icons-material/Info';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {     toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Service() {
    const [serviceList, setServiceList] = useState([]);
 

    const getAll = async () => {
        let data = await method.getAllServiceList()
        setServiceList(data);
    }
    

    useEffect(() => {
        getAll();
        window.scrollTo(0, 0);
    }, []);

    const [serviceDelete, setServiceDelete] = useState(null);
    const handleShow = async (employee) => {
        await setServiceDelete(employee);
        setShow(true);
    };
    const handleDelete = async () => {
        try {
            await method.deleteService(serviceDelete)
            const update = await method.getAllServiceList();
            setServiceList(update);
            handleClose();
            toast("xóa thành công !")
        } catch (e) {
            console.log(e);
        }
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
  
    return (
        <>
            <Header/>
            <div className="my-container">
                <form className="my-table">
                    <h1>Danh sách dịch vụ tại furama</h1>
                    <button className="btn btn-success">
                        <NavDropdown id="nav-dropdown-dark-example" title="Thêm mới dịch vụ" menuVariant="dark">
                            <Link to="/createVilla"><NavDropdown.Item href="#action/3.1">Villa</NavDropdown.Item></Link>
                            <Link to="/createRoom"><NavDropdown.Item href="#action/3.2">Room</NavDropdown.Item></Link>
                            <Link to="/createHouse"><NavDropdown.Item href="#action/3.3">House</NavDropdown.Item></Link>
                        </NavDropdown>
                    </button>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên dịch vụ</th>
                            <th>Chi tiết</th>
                            <th>Chỉnh sửa</th>
                            <th>Xóa</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            serviceList.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <Link to={`/detailService/${item.id}`}>
                                            <button className={"btn btn-primary"}><InfoIcon/></button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/editService/${item.id}`}>
                                            <button className={"btn btn-primary"}><SettingsIcon/></button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button type="button" className={"btn btn-danger"} onClick={() => handleShow(item)}><DeleteForeverIcon/></button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </form>
            </div>
            <Footer/>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn xóa!</Modal.Body>
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

export default Service;