import {Field, Form, Formik, useFormik} from "formik";
import React, {useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function FormCreate() {
    const [data, setData]=useState("");
    const formCreate= useFormik(
        {
           initialValues :{
               name: '',
               age: '',
               email: ''
           },
            onSubmit: (values)=>{
                toast("thêm mới thành công")
            }
        }
    );
return(
<>
<h1>Form đăng ký</h1>
    <Formik>
        <Form onSubmit={formCreate.handleSubmit}>
            <label>Họ và tên</label>
            <Field name='name' onChange={formCreate.handleChange} value={formCreate.values.name}/>
            <br/><br/>
            <label>Năm sinh</label>
            <Field name= 'age' onChange={formCreate.handleChange} value={formCreate.values.age} />
            <br/><br/>
            <label>email</label>
            <Field name='email' onChange={formCreate.handleChange} value={formCreate.values.email}/>
            <br/><br/>
            <button type='submit' className="btn btn-success">Đăng ký</button>
        </Form>
    </Formik>
    <ToastContainer />
</>
)
}
export default FormCreate;