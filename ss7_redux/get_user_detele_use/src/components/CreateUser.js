import React from 'react';
import { Formik ,Form, Field} from 'formik';
import * as UserService from "../service/UserService"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router";
function CreateUser() {
    let navigate= useNavigate();
return(
    <>
            <Formik
                initialValues={
                    {
                        id:"",
                        name:"",
                        email:"",
                        website:"",
                    }
                }
                onSubmit={(values => {
                    const create= async (task)=>{
                         await UserService.save(task)
                        toast("Create success!");
                         navigate("/")

                    }
                    create(values);
                })}
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
export default CreateUser;