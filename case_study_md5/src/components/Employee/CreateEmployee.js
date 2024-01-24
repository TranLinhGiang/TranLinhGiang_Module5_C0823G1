import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function CreateEmployee(){
return(
    <>
    <div>
        <Header/>
    </div>
    <div>
        <div className="body-form col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">             
                <Link to="/employeeList"><button className="back btn btn-success">Trở về</button></Link>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 height">
                    <React.Fragment>
                        <h3>Thêm mới nhân viên</h3>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="Họ tên khách hàng"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label>Ngày tháng năm sinh</label> <br/>
                                <input type='date'></input>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="Số CMND"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="Số điện thoại"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="Email"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="Lương"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                        
                            <Grid item xs={12} sm={6}>
                                    <label className="color">Trình độ</label>
                                    <select className="input form-control">
                                            <option value="">--Hãy chọn trình độ--</option>
                                            <option value="csharp">Trung cấp</option>
                                            <option value="cpp">Cao đẳng</option>
                                            <option value="php">Đại học</option>
                                            <option value="ruby">Sau đại học</option>                                         
                                    </select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                    <label className="color">Vị trí</label>
                                    <select className="input form-control">
                                            <option value="">--Hãy chọn vị trí--</option>
                                            <option value="cpp">Lễ tân</option>
                                            <option value="php">phục vụ</option>
                                            <option value="ruby">chuyên viên</option>
                                            <option value="js">giám sát</option>
                                            <option value="dart">quản lý</option>
                                            <option value="dart">giám đốc</option>
                                    </select>
                            </Grid>   
                            <Grid item xs={12}>
                               <button className="save btn btn-success">Lưu</button>
                            </Grid>
                        </Grid>
                    </React.Fragment>
                </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            </div>
        </div>
    <div>
        <Footer/>
    </div>
    </>
)
}
export default CreateEmployee;