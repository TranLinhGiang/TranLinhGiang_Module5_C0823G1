import React from "react";
import {Field, Form, Formik} from "formik";
import * as method from "../../Method/method";
import "./Body.css";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import { Link } from "react-router-dom";
function Create() {
        const navigate= useNavigate();
    return (
        <>
                <Formik initialValues={{
                    name:"",
                    singer:"",
                    view:"",
                    broadcastTime:""
                }}
                onSubmit={(values => {
                    const create = async (spotify)=>{
                        await method.createSpotify(spotify);
                        toast("Thêm mới thành công !")
                        navigate("/");
                    }
                    create(values);
                })}
                >
                    <Form>
                        <Link to={"/"}>
                            <button className={"btn btn-success"}>Trở về</button><br/>
                        </Link>

                        <label>tên bài hát</label>
                        <Field
                            required
                            placeholder="Nhập tên bài hát"
                            name="name"/>
                        <br/>
                        <label>tên ca sỹ</label>
                        <Field
                            required
                            placeholder="Nhập tên ca sỹ"
                            name="singer"/>
                        <br/>
                        <label>số lượt xem</label>
                        <Field
                            required
                            placeholder="Nhập số lượt xem"
                            name="view"/>
                        <br/>
                        <label>thời gian phát</label>
                        <Field
                            required
                            placeholder="Nhập thời gian phát"
                            name="broadcastTime"/>
                        <br/>
                        <button className={"btn btn-success"}>Lưu</button>
                    </Form>
                </Formik>
        </>
    )
}
export default Create;