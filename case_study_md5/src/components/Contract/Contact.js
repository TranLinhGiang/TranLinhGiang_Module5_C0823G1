import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Contact.css"
import "../../data/contact.json"
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import * as method from "../../Service/method";
import Table from "@mui/material/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {toast} from "react-toastify";
import AddIcon from '@mui/icons-material/Add';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SettingsIcon from '@mui/icons-material/Settings';
function Contact() {
    const [contactList, setContactList]= useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [contactDelete, setContactDelete] = useState(null);
    let [sort] = useState(false)
    const handleShow = async (contact) => {
        await setContactDelete(contact);
        setShow(true);
    };

    const getAll= async ()=>{
        let data= await method.getAllContact()
        setContactList(data);
    }
    getAll();


    const sortContactByDepositAmount= async ()=>{
        try {
            let sortedContact = await method.getAllContact();
            sortedContact.sort((a, b) => b.totalPaymentAmount - a.totalPaymentAmount); // Sắp xếp theo totalPaymentAmount
            setContactList(sortedContact);
        } catch (error) {
            console.error("Lỗi khi sắp xếp:", error);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const handleDelete = async ()=>{
        try {
            await method.deleteContact(contactDelete);
            const update= await method.getAllContact()
            setContactList(update);
            handleClose();
            toast(" Xóa thành công ! ")
        }catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        if (!sort ){
            getAll().then(()=>{
            });

        }else {
            sortContactByDepositAmount().then(()=>{
            });

        }
    }, [sort]);

    return (
        <>
            <div>
              <Header/>
            </div>

            <div className="my-container">

                   <h1>Danh sách hợp đồng tại furama</h1>
                   <Link to="/createContact">
                   <button className="btn btn-success"><AddIcon/> Thêm mới hợp đồng</button>
                   </Link>
                   <button className="btn btn-success positions" onClick={sortContactByDepositAmount}> <LowPriorityIcon/> Sắp xếp theo số tiền</button>
                   <Table striped bordered hover variant="dark">
                       <thead>
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
                       </thead>
                       <tbody>
                       {
                           contactList.map((item, index)=>(
                               <tr key={item.id}>
                                   <td>{index +1}</td>
                                   <td>{item.contractNumber}</td>
                                   <td>{item.startDate}</td>
                                   <td>{item.endDate}</td>
                                   <td>{item.depositAmount}</td>
                                   <td>{item.totalPaymentAmount}</td>
                                   <td>
                                       <Link to={`/editContact/${item.id}`}>
                                           <button  className="btn btn-success"><SettingsIcon/></button>
                                       </Link>
                                   </td>
                                   <td>
                                       <Link >
                                           <button onClick={() => handleShow(item)} className="btn btn-danger"><DeleteForeverIcon/></button>
                                       </Link>
                                   </td>
                               </tr>
                           ))
                       }
                       </tbody>
                   </Table>
            </div>
            <div>
                <Footer/>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xóa </Modal.Title>
                </Modal.Header>
                <Modal.Body>{`Bạn chắc chắn muốn xóa `} </Modal.Body>
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
export default Contact;