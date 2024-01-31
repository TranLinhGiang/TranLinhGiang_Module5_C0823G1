import {Form, Formik, Field} from "formik";
import * as bookService from "../service/bookService"
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {toast} from "react-toastify";

function EditBook() {
    const [task, setEditBook]= useState()
    const id= useParams()
    const navigate= useNavigate()
    useEffect(()=>{
        const bookEdit = async () =>{
            const task = await bookService.getById(id);
            setEditBook(task);
        }
        bookEdit();
    },[id]);
    if (!task){
        return null;
    }

    return (
        <>
            <Formik
                initialValues={
                    {
                        id: task.id,
                        title: task.title,
                        quantity: task.quantity
                    }
                }
                onSubmit={ values => {
                    const edit= async (task)=>{
                        await bookService.edit(task);
                        navigate("/")
                        toast("Update success !")
                    }
                    edit(values);
                }}
            >
                <Form>
                    <h1>Edit Book</h1>
                    <h3>Title</h3>
                    <Field name={"title"}/>
                    <h3>Quantity</h3>
                    <Field name={"quantity"}/><br/><br/>
                    <button className={"btn btn-success"}>Save</button>
                </Form>
            </Formik>
        </>
    )
}

export default EditBook;