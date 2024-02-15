import Header from "../Header/Header";
import React, {useEffect, useState} from "react";
import Footer from "../Footer/Footer";
import {Field, Form, Formik} from "formik";
import {Link, useNavigate, useParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import * as method from "../../Service/method"
import {toast} from "react-toastify";
import ReplyIcon from '@mui/icons-material/Reply';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
function EditContact() {
    const [contact, setContactEdit]= useState();
    const id= useParams();
    const navigate= useNavigate();

    useEffect(()=>{
        const editContact= async ()=>{
            const contact = await method.getContactEdit(id)
            setContactEdit(contact)
        }
        editContact()
    },[id])

   if(!contact){
       return null;
   }
    return (
        <>
            <div>
                <Header/>
            </div>
            <div>
                <Formik initialValues={{
                    id: contact.id,
                    contractNumber: contact.contractNumber,
                    startDate: contact.startDate,
                    endDate: contact.endDate,
                    depositAmount: contact.depositAmount,
                    totalPaymentAmount:contact.totalPaymentAmount
                }}
                onSubmit={values => {
                    const edit= async(contact)=>{
                        await  method.editContact(contact);
                        toast("Chỉnh sửa thành công !");
                        navigate("/contactList")
                    }
                    edit(values);
                }}
                >
                    <Form>
                        <div className="body-form col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <Link to="/contactList">
                                    <button className="back btn btn-success"><ReplyIcon/> Trở về</button>
                                </Link>
                            </div>
                            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 height">
                                <React.Fragment>
                                    <h3>Chỉnh sửa thông tin hợp đồng</h3>
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
                                            <Field className={"input"} name='startDate' type='date'></Field>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <label>Ngày kết thúc</label> <br/>
                                            <Field className={"input"} name='endDate' type='date'></Field>
                                        </Grid>


                                        <Grid item xs={12} sm={12}>
                                            <label>Tổng thanh toán</label><br/>
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
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default EditContact;