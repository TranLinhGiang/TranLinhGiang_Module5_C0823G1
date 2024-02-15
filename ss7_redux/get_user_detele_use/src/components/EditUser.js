import React, {useEffect, useState} from 'react';
import {Formik, Form, Field} from 'formik';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate, useParams} from "react-router";
import * as UserService from "../service/UserService"
function EditUser() {
    let navigate = useNavigate();
    const [task, setEdit] = useState();
    const id= useParams();
    useEffect(()=>{
        const userEdit= async ()=>{
          const res= await UserService.getUserById(id);
            setEdit(res);
        }
        userEdit()
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
                        name:task.name,
                        email:task.email,
                        website:task.website
                    }
                }
                onSubmit={ values => {
                    const updateUser= async (task)=>{
                        await UserService.editUser(task);
                        toast("Edit success !");
                        navigate("/");;
                    }
                    updateUser(values);
                }}
            >
                <Form>
                    <h1>Create User</h1>
                    <h3>Name</h3>
                    <Field name={"name"}/>
                    <h3>Email</h3>
                    <Field name={"email"}/>
                    <h3>Website</h3>
                    <Field name={"website"}/><br/><br/>
                    <button className={"btn btn-success"}>Submit</button>
                </Form>
            </Formik>

        </>
    )
}

export default EditUser;