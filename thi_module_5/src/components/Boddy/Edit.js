import {ErrorMessage, Field, Form, Formik} from "formik";
import * as method from "../../Method/method";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Body.css";
import * as Yup from "yup";

function Edit() {
    const navigate = useNavigate();
    const id = useParams();
    const [clothing, setClothing] = useState();
    useEffect(() => async () => {
        const editClothing = async () => {
            const edit = await method.getEditClothing(id);
            setClothing(edit);
        }
        editClothing();
    }, [id]);

    if (!clothing) {
        return null;
    }

    return (
        <>
            <Header/>
            <div className={"position"}>
                <div className={"col-lg-4"}><Link to={"/"}>
                    <button className={"btn btn-success"}>Trở về</button>
                </Link></div>

                <Formik
                    initialValues={
                        {
                            id: clothing.id,
                            productName: clothing.productName,
                            date: clothing.date,
                            counts: clothing.counts,
                            productType: clothing.productType
                        }
                    }
                    validationSchema={Yup.object({
                        productName:Yup.string()
                            .required("Tên sản phẩm không được để trống")
                            .max(100,"Tên sản phẩm không được quá 100 ký tự"),
                        counts:Yup.number()
                            .required("Sản phẩm không được để trống")
                            .min(0,"sản phẩm lớn hơn 0")
                    })}
                    onSubmit={values => {
                        const edit = async (clothing) => {
                            await method.editClothing(clothing);
                            toast("Chỉnh sửa thành công !")
                            navigate("/")
                        }
                        edit(values);
                    }}

                >
                    <Form>
                        <h1>Chỉnh sửa sản phẩm</h1>
                        <h5 className={"text"}>Tên sản phẩm</h5>
                        <Field className={"filed"} name={"productName"}/>
                        < ErrorMessage name='productName' component='span' className={"erro"}/>
                        <br/>
                        <h5>Ngày nhập</h5>
                        <Field className={"filed"} name={"date"} type={"date"}/><br/>
                        <h5>Số lượng</h5>
                        <Field className={"filed"} name={"counts"} type={"number"}/>
                        < ErrorMessage name='counts' component='span' className={"erro"}/>
                        <br/>
                        <h5>Loại sản phẩm</h5>
                        <Field className={"filed"} as="select" name="productType">
                            <option value="loai-1">Loại 1</option>
                            <option value="loai-2">Loại 2</option>
                            <option value="loai-3">Loại 3</option>
                        </Field><br/><br/>
                        <button className={"btn btn-success sub"}>Lưu</button>
                    </Form>

                </Formik>
                <div className={"col-lg-4"}></div>
            </div>
            <Footer/>
        </>
    )
}

export default Edit;