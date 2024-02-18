import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import * as method from "../../Method/method";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router";
import { Link } from "react-router-dom";
function EditSpotify() {
    const navigate = useNavigate();
    const id = useParams();
    const [spotify, setSpotify] = useState();
    useEffect(() => async () => {
        const editSpotify = async () => {
            const edit = await method.getEditSpotify(id);
            setSpotify(edit);
        }
        editSpotify();
    }, [id]);
    if (!spotify) {
        return null;
    }

    return (
        <>
            <Formik
                initialValues={
                    {
                        id: spotify.id,
                        name: spotify.name,
                        singer: spotify.singer,
                        view: spotify.view,
                        broadcastTime: spotify.broadcastTime
                    }
                }
                onSubmit={values => {
                    const edit = async (spotify) => {
                        await method.editSpotify(spotify);
                        toast("Chỉnh sửa thành công !")
                        navigate("/")
                    }
                    edit(values);
                }}
            >
                <Form>
                    <Link to={"/"}>
                        <button className={"btn btn-success"}>Trở về</button><br/>
                    </Link>
                    <label>tên bài hát</label>
                    <Field
                        required
                        name="name"/>
                    <br/>
                    <label>tên ca sỹ</label>
                    <Field
                        required
                        name="singer"/>
                    <br/>
                    <label>số lượt xem</label>
                    <Field
                        required
                        name="view"/>
                    <br/>
                    <label>thời gian phát</label>
                    <Field
                        required
                        name="broadcastTime"/>
                    <br/>
                    <button className={"btn btn-success"}>Lưu</button>
                </Form>
            </Formik>
        </>
    )
}

export default EditSpotify;