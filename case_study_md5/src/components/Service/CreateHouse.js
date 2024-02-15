import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Form, Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import ReplyIcon from '@mui/icons-material/Reply';
import { Formik } from "formik";
function CreateHouse() {
    return(
        <>
        
            <Header/>
       
       
            <Formik 
            initialValues={{

            }}>
                <Form>
                <div className="body-form col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">             
                <Link to="/serviceList"><button className="back btn btn-success"><ReplyIcon/> Trở về</button></Link>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 height">
                    <React.Fragment>
                        <h3>Thêm mới House</h3>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    name="houseName"
                                    label="Tên dịch vụ"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    name="houseAcreage"
                                    label="Diện tích sử dụng"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    name="HouseRentalCosts"
                                    label="Chi phí thuê"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                        
                            <Grid item xs={12} sm={6}>
                                    <label className="color">Số lượng người</label>
                                    <select name="HouseNumberPerson" className="input form-control">
                                            <option value="">--Hãy chọn số lượng người--</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                    </select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                    <label className="color">Dịch vụ miễn phí đi kèm</label>
                                    <select name="HouseAccompaniedService" className="input form-control">
                                            <option value="">--Hãy chọn dịch vụ miễn phí--</option>
                                            <option value="massage">massage</option>
                                            <option value="eat">thức ăn</option>
                                            <option value="karaok">karaoke</option>
                                            <option value="drink">nước uống</option>
                                            <option value="car">thuê xe di chuyển tham quan </option>
                                    </select>
                            </Grid>
                           
                            <Grid item xs={12} sm={6}>
                                    <label className="color"> Kiểu thuê</label>
                                    <select name="rentalType" className="input form-control">
                                            <option value="">--Hãy chọn kiểu thuê--</option>
                                            <option value="oclock">Theo giờ</option>
                                            <option value="day">Theo ngày</option>
                                            <option value="month">Theo tháng</option>
                                            <option value="year">Theo năm</option>
                                    </select>
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
};
export default CreateHouse