import {Field, Form, Formik} from "formik";
import {Link, useParams} from "react-router-dom";
import * as React from "react";
import {useState} from "react";
import {useEffect} from "react";
import {getBookById} from "../service/EditBookService";

function EditBooks() {
    const [bookEdit, setBookEdit] = useState();
    const bookId = useParams()

    useEffect(()=>{
        const getBook = async ()=>{
          const book = await getBookById(bookId)
            console.log(book)
            setBookEdit(book)
        }
        getBook();
    },[bookId])
        if(!bookEdit){
        return null
    }
    return (
        <>
            <Formik initialValues={
                {
                    id : bookEdit.id,
                    title: bookEdit.title,
                    quantity: bookEdit.quantity
                }
            }>
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
            </Formik>
        </>
    )
}

export default EditBooks;