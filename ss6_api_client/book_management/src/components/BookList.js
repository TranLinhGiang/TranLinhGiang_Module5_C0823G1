import React, {useEffect, useState} from "react";
import * as bookService from "../service/bookService"
import {Link} from "react-router-dom";
import "./BookList.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function BookList() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [bookDelete, setBookDelete] = useState(null);
    const handleShow = async (book) => {
        await setBookDelete(book);
        setShow(true);
    }
    const handleDelete =async ()=>{
        try{
            await bookService.deletes(bookDelete);
            const bookUpdate= await bookService.getAllBookList();
            setBook(bookUpdate);
            handleClose();
        }
        catch (e) {
            console.log(e);
        }
    }


    const [bookList, setBook] = useState([]);
    useEffect
    (() => {
        const getAll = async () => {
            try {
                const result = await bookService.getAllBookList()
                setBook(result)
            } catch (e) {
                console.log(e)
            }
        }
        getAll()
    }, [])
    return (
        <>
            <h1>Library</h1>
            <Link to={"/createBook"}>
                <button className={"btn btn-success float-add"}>Add book</button>
            </Link>
            <table className={"table"}>
                <thead>
                <tr>
                    <th>Stt</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    bookList.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <Link to={`/editBook/${item.id}`}>
                                    <button className={"btn btn-success"}>Edit</button>
                                </Link>
                            </td>
                            <td>

                                <Button variant="danger" onClick={() => handleShow(item)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{bookDelete &&`do you want to delete ${bookDelete.title} ?`}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
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

export default BookList;