import React from "react";
import {Form, Formik, Field} from "formik";
import {toast} from 'react-toastify';
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {createBook} from "../redux/action/book";

function CreateBook() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    return (
        <>
            <Formik initialValues={
                {
                    id: "",
                    title: "",
                    quantity: ""
                }
            }
                    onSubmit={(values) => {
                        const create = async (task) => {

                            dispatch(createBook(task))

                            toast("add book success!");
                            navigate("/")
                        }
                        create(values)
                    }}>
                <Form>
                    <h1>Add book </h1>
                    <h3>Title</h3>
                    <Field name={"title"}></Field>
                    <h3>Quantity</h3>
                    <Field name={"quantity"}></Field><br/><br/>
                    <button className={"btn btn-success"}>Save</button>
                </Form>
            </Formik>

        </>
    )
}

export default CreateBook;