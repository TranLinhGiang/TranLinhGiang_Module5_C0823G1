import * as React from 'react';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";
import "./createEmpoyee.css"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import * as method from "../../Service/method";
import {Formik, Form, Field} from 'formik';
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import ReplyIcon from '@mui/icons-material/Reply';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
function CreateEmployee() {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <Header/>
            </div>
            <div>
                <Formik
                    initialValues={{
                        firstName: "",
                        dateOfBirth: "",
                        id_code: "",
                        numberPhone: "",
                        email: "",
                        wage: "",
                        level: "",
                        customerType: "",
                        location: ""
                    }}
                    onSubmit={(values) => {
                        const create = async (task) => {
                            await method.createEmployee(task);
                            toast("Thêm mới thành công !");
                            navigate("/employeeList");
                        }
                        create(values);
                    }}>
                    <Form>
                        <div className="body-form col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <Link to="/employeeList">
                                    <button className="back btn btn-success"><ReplyIcon/> Trở về</button>
                                </Link>
                            </div>
                            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 height">
                                <React.Fragment>
                                    <h3>Thêm mới nhân viên</h3>
                                    <Grid container spacing={3}>

                                        <Grid item xs={12} sm={6}>
                                            <label>Họ tên khách hàng</label><br/>
                                            <Field className={"input"}
                                                required
                                                name="firstName"
                                                fullWidth
                                                autoComplete="given-name"
                                                variant="standard"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <label>Ngày tháng năm sinh</label> <br/>
                                            <Field className={"input"} name='dateOfBirth' type='date'></Field>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <label>Số CMND</label><br/>
                                            <Field className={"input"}
                                                required
                                                name="id_code"
                                                fullWidth
                                                autoComplete="given-name"
                                                variant="standard"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <label>Số điện thoại</label><br/>
                                            <Field className={"input"}
                                                required
                                                name="numberPhone"
                                                fullWidth
                                                autoComplete="given-name"
                                                variant="standard"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <label>Email</label><br/>
                                            <Field className={"input"}
                                                required
                                                name="email"
                                                fullWidth
                                                autoComplete="given-name"                                                variant="standard"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <label>Lương</label><br/>
                                            <Field className={"input"}
                                                required
                                                name="wage"
                                                fullWidth
                                                autoComplete="given-name"
                                                variant="standard"
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <label className="color">Trình độ</label>
                                            <Field className={"input"} as="select" name="level">
                                                <option>--- Hãy chọn trình độ ---</option>
                                                <option value="Trung cấp">Trung cấp</option>
                                                <option value="Cao đẳng">Cao đẳng</option>
                                                <option value="Giám sát">Đại học</option>
                                                <option value="Quản lý">Sau đại học</option>
                                            </Field>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <label className="color">Vị trí</label>
                                            <Field className={"input"} as="select" name="location">
                                                <option>--- Hãy chọn vị trí ---</option>
                                                <option value="Phục vụ">Phục vụ</option>
                                                <option value="Chuyên viên">Chuyên viên</option>
                                                <option value="Giám sát">Giám sát</option>
                                                <option value="Quản lý">Quản lý</option>
                                                <option value="Giám đốc">Giám đốc</option>
                                            </Field>
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

export default CreateEmployee;