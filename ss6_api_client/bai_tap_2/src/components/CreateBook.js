import * as React from 'react';
import {Form, Formik, Field} from 'formik';
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {addBook} from "../service/CreateBookService"
import ToastContainer from "react-bootstrap/ToastContainer";
// import 'react-toastify/dist/ReactToastify.css';

export default function CreateBook() {
    const navigate = useNavigate()
    const [book, setBook] = useState([]);
    const createBook = async (task) => {
        await addBook(task);
        setBook('')
        navigate("/")
    }

    return (
        <Formik
            initialValues={
                {
                    title: '',
                    quantity: ''
                }
            }
            // onSubmit={createBook}
        >
            <Form>
                <Link to={"/"}>
                    <button className="btn btn-success">Trở về</button>
                </Link>
                <br/>
                <label>Title</label><br/>
                <Field name="title"></Field><br/>
                <label>Quantity</label><br/>
                <Field name="quantity"/><br/>
                <button className="btn btn-success">Submit</button>
            </Form>
            <ToastContainer/>
        </Formik>

    );

}