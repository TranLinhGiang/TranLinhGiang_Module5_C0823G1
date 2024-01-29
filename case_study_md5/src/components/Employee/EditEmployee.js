import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";
import {Link} from "react-router-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

function EditEmployee() {
    return (
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
                            <h3>Chỉnh sửa nhân viên</h3>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required

                                        name="firstName"
                                        label="Họ tên khách hàng"
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <label>Ngày tháng năm sinh</label> <br/>
                                    <input name='dateOfBirth' type='date'></input>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        name="id_code"
                                        label="Số CMND"
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required

                                        name="numberPhone"
                                        label="Số điện thoại"
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        name="email"
                                        label="Email"
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required

                                        name="wage"
                                        label="Lương"
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="standard"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <label className="color">Trình độ</label>
                                    <select className="input form-control" name='level'>
                                        <option>--Hãy chọn trình độ--</option>
                                        <option value="trungcap">Trung cấp</option>
                                        <option value="caodang">Cao đẳng</option>
                                        <option value="daihoc">Đại học</option>
                                        <option value="saudaihoc">Sau đại học</option>
                                    </select>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <label className="color">Vị trí</label>
                                    <select className="input form-control" name='location'>
                                        <option value="">--Hãy chọn vị trí--</option>
                                        <option value="letan">Lễ tân</option>
                                        <option value="phucvu">phục vụ</option>
                                        <option value="chuyenvien">chuyên viên</option>
                                        <option value="giamsat">giám sát</option>
                                        <option value="quanly">quản lý</option>
                                        <option value="giamdoc">giám đốc</option>
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

export default EditEmployee;