import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {useEffect} from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {Link, useNavigate} from "react-router-dom"
import * as React from 'react';
import "./CreateContact.css";
import {Formik, Form, Field} from "formik";
import * as method from "../../Service/method"
import {toast} from "react-toastify";
import ReplyIcon from '@mui/icons-material/Reply';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
function CreateContact() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Header/>
            <Formik initialValues={{
                contractNumber: "",
                startDate: "",
                endDate: "",
                depositAmount: "",
                totalPaymentAmount: ""
            }}
                    onSubmit={values => {
                        const create = async (contact) => {
                            await method.createContact(contact);
                            toast("Thêm mới thành công !");
                            navigate("/contactList");
                        }
                        create(values);
                    }}
            >
                <Form>
                    <div className="body-form col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <Link to={"/contactList"}>
                                <button className=" back btn btn-success"><ReplyIcon/> Trở về</button>
                            </Link>

                        </div>
                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 height">
                            <React.Fragment>
                                <h3>Thêm mới hợp đồng</h3>
                                <Grid container spacing={3}>

                                    <Grid item xs={12} sm={6}>
                                        <label>Số hợp đồng</label><br/>
                                        <Field className={"input"}
                                            required
                                            name="contractNumber"
                                            fullWidth
                                            autoComplete="given-name"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label>Số tiền cọc trước</label><br/>
                                        <Field className={"input"}
                                            required
                                            name="depositAmount"
                                            fullWidth
                                            autoComplete="given-name"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label>Ngày bắt đầu</label> <br/>
                                        <Field className={"input"} name={"startDate"} style={{width: '100%'}} type="date"></Field>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label>Ngày kết thúc</label> <br/>
                                        <Field className={"input"} name={"endDate"} style={{width: '100%'}} type="date"></Field>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <label>Tổng số tiền thanh toán</label><br/>
                                        <Field className={"input"}
                                            required
                                            name="totalPaymentAmount"
                                            fullWidth
                                            autoComplete="given-name"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <button className="save btn btn-success">Lưu <FileDownloadDoneIcon/></button>
                                    </Grid>
                                </Grid>
                            </React.Fragment>
                        </div>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    </div>
                </Form>
            </Formik>


            <Footer/>
        </>
    )
}

export default CreateContact;