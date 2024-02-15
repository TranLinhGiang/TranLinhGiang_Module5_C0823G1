import "./Service.css"
import {Field, Form, Formik} from "formik";
import {Link, useParams} from "react-router-dom";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useState} from "react";
import {useEffect} from "react";
import ReplyIcon from '@mui/icons-material/Reply';
import * as method from "../../Service/method";
function DetailService() {
    const [service, setService]= useState();
    const id= useParams();
    useEffect(()=>{
        const detailService= async ()=>{
            const service = await method.detailService(id)
            setService(service);
        }
        detailService();
    },[id])
    if (!service){
        return null;
    }
    return (
        <>
            <Header/>
            <Formik
            initialValues={{
                name: service.name,
                acreage: service.acreage,
                rentalCosts: service.rentalCosts,
                swimmingPoolArea: service.swimmingPoolArea,
                numberPerson: service.numberPerson,
                numberOfFloors: service.numberOfFloors,
                rentalType: service.rentalType,
                roomStandards:service.roomStandards,
                describe:service.describe
            }}
            >
                <Form>
                    <div className="body-form col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <Link to="/serviceList">
                                <button className="back btn btn-success"><ReplyIcon/> Trở về</button>
                            </Link>
                        </div>
                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 height">
                            <React.Fragment>
                                <h3 className={"color"}>Thông tin chi tiết dịch vụ</h3>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={3}>
                                        <h6 className={"color"}>Tên dịch vụ</h6>
                                        <Field className={"detail"} name={"name"}/>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <h6 className="color">Tổng diện tích</h6>
                                        <Field className={"detail"} name={"acreage"}/>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <h6 className="color">Chi phí thuê</h6>
                                        <Field className={"detail"} name={"rentalCosts"}/>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <h6 className="color">Diện tích hồ bơi</h6>
                                        <Field className={"detail"} name={"swimmingPoolArea"}/>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <h6 className="color">Số lượng người</h6>
                                        <Field className={"detail"} name={"numberPerson"}/>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <h6 className="color">Số tầng</h6>
                                        <Field className={"detail"} name={"numberOfFloors"}></Field>
                                    </Grid>

                                    <Grid item xs={12} sm={3}>
                                        <h6 className="color">Kiểu thuê</h6>
                                        <Field className={"detail"} name={"rentalType"}></Field>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <h6 className="color">Tiêu chuẩn phòng</h6>
                                        <Field className={"detail"} name={"roomStandards"}></Field>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <h6 className="color">Mô tả thêm</h6>
                                        <Field className={"detail"} name={"describe"}></Field>
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

export default DetailService;