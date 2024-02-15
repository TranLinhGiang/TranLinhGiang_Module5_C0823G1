import "../data/db"
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as React from "react";
import * as UserService from "../service/UserService"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {toast} from "react-toastify";
function UserList() {
    const navigate= useNavigate();
    const [show, setShow] = useState(false);
    const [useDelete, setUserDelete]= useState(null);
    const handleClose = () => setShow(false);
    const handleShow = async (user) =>{
        await setUserDelete(user);
        setShow(true);
    }
    const handleDelete =async ()=>{
        try{
            await UserService.deleteUser(useDelete);
            const userUpdate= await UserService.getAll();
            setUserList(userUpdate);
            handleClose();
            toast("Xóa thành công !")
            navigate("/")
        }
        catch (e) {
            console.log(e);
        }
    }


    const [userList, setUserList] = useState([])
    useEffect(() => {
        const getAll = async () => {
            try {
                const result = await UserService.getAll()
                setUserList(result)
            }catch (e) {
                console.log(e)
            }
        }
        getAll()
    })
    return (
        <>
            <h1>User List</h1>
            <Link to="/create">
                <button className={"btn btn-success"}>Add user</button>
            </Link>
            <br/><br/>
            <button className="btn btn-dark" onClick={()=>{
                fetch("http://localhost:8000/userList")
                    .then((response) => response.json())
                    .then((data)=> setUserList(data))
            }}>Get user</button>
            {
                userList.length > 0 && (
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Stt</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            userList.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.website}</td>
                                    <td>
                                        <Link to={`/editUser/${item.id}`}>
                                            <button className={"btn btn-success"}>Edit</button>
                                        </Link>

                                    </td>
                                    <td>
                                        <button className={"btn btn-danger"}
                                                onClick={()=> handleShow(item)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                )
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{useDelete &&`do you want to delete ${useDelete.name} ?`}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UserList;