import React from "react";
import {Form, Formik, Field, ErrorMessage} from "formik";
import {toast} from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup'
import {ColorRing} from "react-loader-spinner";
function FormLogin() {
    return (
        <>
            <Formik
                initialValues={{
                    userName:'',
                    dateOfBirthday:'',
                    email:''
                }}
                validationSchema={Yup.object({
                    userName: Yup.string()
                        .required('Vui lòng nhập tên ')
                        .min(2,'tên quá ngắn')
                        .max(50, 'tên quá dài'),
                    dateOfBirthday: Yup.number()
                        .min(1990,"tuổi phải lớn hơn 1990","Không được nhập chữ")
                        .required('vui lòng nhập tuổi'),
                    email: Yup.string()
                        .required('vui lòng nhập email')
                        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,6}$/,"không đúng định dạng")
                })}
                onSubmit={(values,{setSubmitting}) => {
                    setTimeout(()=>{
                        setSubmitting(false)
                        toast('Login thành công !')
                    },1000);
                }}
                >
                {
                    ({isSubmitting})=>(
                        <Form>
                            <h1>Login</h1>
                            <label>userName</label>
                            <Field name='userName'></Field> <br/>
                            <ErrorMessage name='userName' component='span' className='err'/>
                            <label>date of birthday</label>
                            <Field name='dateOfBirthday'/><br/>
                            <ErrorMessage name='dateOfBirthday' component='span' className='err'/>
                            <label>email</label>
                            <Field name='email'/><br/>
                            <ErrorMessage name='email' component='span' className='err'/>
                            {isSubmitting ? <ColorRing
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="color-ring-loading"
                                wrapperStyle={{}}
                                wrapperClass="color-ring-wrapper"
                                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                /> : <button>Submit</button>}

                        </Form>
                    )
                }

            </Formik>
            <ToastContainer/>
        </>
    )
}
export default FormLogin;