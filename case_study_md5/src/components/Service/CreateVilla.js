import {Link, useNavigate} from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import * as method from "../../Service/method";
import "./Service.css"
import {toast} from "react-toastify";
import { Formik, Field, Form } from "formik";
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import ReplyIcon from '@mui/icons-material/Reply';
function CreateVilla(){
    const navigate= useNavigate();
    return(
        <>
        <div>
            <Header/>
        </div>
        <div>
            <Formik initialValues={{
                name:"",
                acreage:"",
                rentalCosts:"",
                swimmingPoolArea:"",
                numberPerson:"",
                numberOfFloors:"",
                rentalType:"",
                roomStandards:"",
                describe:""
            }}
            onSubmit={values => {
                const create= async (villa)=>{
                    await method.createService(villa)
                    toast("thêm mới dịch vụ villa thành công !")
                    navigate("/serviceList");
                }
                create(values);
            }}
            >
                <Form>
                    <div className="body-form col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <Link to="/serviceList"><button className="back btn btn-success"><ReplyIcon/> Trở về</button></Link>
                        </div>
                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 height">
                            <React.Fragment>
                                <h3 className={"color"}>Thêm mới Villa</h3>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <label>Tên dịch vụ</label><br/>
                                        <Field className={"field"}
                                            required
                                            name="name"
                                            fullWidth
                                            autoComplete="given-name"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label>Diện tích sử dụng</label><br/>
                                        <Field className={"field"}
                                            required
                                            name="acreage"
                                            fullWidth
                                            autoComplete="given-name"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label>Chi phí thuê</label><br/>
                                        <Field className={"field"}
                                            required
                                            name="rentalCosts"
                                            fullWidth
                                            autoComplete="given-name"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label>Diện tích hồ bơi</label><br/>
                                        <Field className={"field"}
                                            required
                                            name="swimmingPoolArea"
                                            fullWidth
                                            autoComplete="family-name"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label className="color">Số lượng người</label>
                                        <Field as="select" name="numberPerson"  className={"field"}>
                                            <option>--Số lượng người--</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </Field>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label className="color">Số tầng</label>
                                        <Field as="select" name="numberOfFloors" className={"field"}>
                                            <option>--Số tầng--</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </Field>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label className="color"> Kiểu thuê</label>
                                        <Field as="select" name="rentalType" className={"field"}>
                                            <option>--Hãy chọn kiểu thuê--</option>
                                            <option value="Theo giờ">Theo giờ</option>
                                            <option value="Theo ngày">Theo ngày</option>
                                            <option value="Theo tháng">Theo tháng</option>
                                            <option value="Theo tháng">Theo tháng</option>
                                            <option value="Theo năm">Theo năm</option>
                                        </Field>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label className="color">Tiêu chuẩn phòng</label>
                                        <Field as="select" name="roomStandards" className={"field"}>
                                            <option>--Hãy chọn tiêu chuẩn phòng--</option>
                                            <option value="Phòng Bungalow">Phòng Bungalow</option>
                                            <option value="Phòng Standard (STD)">Phòng Standard (STD)</option>
                                            <option value="Phòng Deluxe (DLX)">Phòng Deluxe (DLX)</option>
                                            <option value="Phòng Suite (SUT)">Phòng Suite (SUT)</option>
                                            <option value="Phòng Junior Suite">Phòng Junior Suite</option>
                                            <option value="Phòng Executive">Phòng Executive</option>
                                        </Field>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <label>Mô tả tiện nghi khác</label><br/>
                                        <Field className={"input-field"} name={"describe"}
                                            required
                                            fullWidth
                                            autoComplete="shipping country"
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
export default CreateVilla;