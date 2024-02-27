import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as method from "../../Service/method";
import "./createEmpoyee.css"
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import {toast} from "react-toastify";
import ReplyIcon from '@mui/icons-material/Reply';
import * as Yup from "yup";

function EditEmployee() {
    const [employee, setEditEmployee] = useState()
    const id = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const editEmployee = async () => {
            const employee = await method.getEditEmployee(id);
            setEditEmployee(employee);
        }
        editEmployee()
    }, [id])
    if (!employee) {
        return null;
    }

    return (
        <>
            <div>
                <Header/>
            </div>
            <Formik
                initialValues={
                    {
                        id: employee.id,
                        firstName: employee.firstName,
                        dateOfBirth: employee.dateOfBirth,
                        id_code: employee.id_code,
                        numberPhone: employee.numberPhone,
                        email: employee.email,
                        wage: employee.wage,
                        level: employee.level,
                        customerType: employee.customerType,
                        location: employee.location

                    }

                }
                onSubmit={values => {
                    const edit = async (employee) => {
                        await method.editEmployee(employee);
                        toast("Chỉnh sửa thành công !");
                        navigate("/employeeList");
                    }
                    edit(values);
                }}
                validationSchema={Yup.object({
                    location: Yup.string()
                        .required("Vui lòng chọn vị trí !"),
                    level: Yup.string()
                        .required("Vui lòng chọn trình độ !"),
                    wage: Yup.number()
                        .min(0, "Lương không được nhỏ hơn 0")
                        .required("Lương không được để trống !"),

                    email: Yup.string()
                        .required("email không được để trống")
                        .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
                            'Email không hợp lệ'),
                    firstName: Yup.string()
                        .required("Họ tên khách hàng không được để trống !")
                        .min(3, "Họ tên khách hàng quá ngắn")
                        .max(45, "Họ tên khách hàng quá dài"),
                    dateOfBirth: Yup.date()
                        .required("Ngày sinh không được để trống !")
                        .test('is-over-18', 'Khách hàng phải đủ 18 tuổi trở lên', function (value) {
                            const currentDate = new Date();
                            const birthDate = new Date(value);
                            const age = currentDate.getFullYear() - birthDate.getFullYear();
                            // Kiểm tra nếu chưa đủ 18 tuổi
                            return age >= 18;
                        }),
                    id_code: Yup.string()
                        .required("Số chứng minh nhân dân không được để trống !")
                        .matches(/^[0-9]{9,12}$/, 'Số chứng minh nhân dân không hợp lệ, phải đủ 9 hoặc 12 số'),
                    numberPhone: Yup.string()
                        .required("số điện thoại không được để trống !")
                        .matches(/^0|\+81[0-9]{9}$/, 'Số điện thoại không hợp lệ, bắt đầu bằng 0 hoặc +81 và đủ 10 số ')
                })}
            >
                <Form>
                    <div className="body-form col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <Link to="/employeeList">
                                <button className="back btn btn-success"><ReplyIcon/> Trở về</button>
                            </Link>
                        </div>
                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 height">
                            <React.Fragment>
                                <h3>Chỉnh sửa thông tin nhân viên</h3>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <label>Tên khách hàng</label><br/>
                                        <Field className={"input"}
                                               name="firstName"
                                               fullWidth
                                               autoComplete="given-name"
                                               variant="standard"
                                        />
                                        <ErrorMessage component={"span"} name={"firstName"}
                                                      className={"errMessage"}/>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label>Ngày tháng năm sinh</label> <br/>
                                        <Field className={"input"} name='dateOfBirth' type='date'></Field>
                                        <ErrorMessage component={"span"} name={"dateOfBirth"}
                                                      className={"errMessage"}/>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label>Số CMND</label><br/>
                                        <Field className={"input"}
                                               name="id_code"
                                               fullWidth
                                               autoComplete="given-name"
                                               variant="standard"
                                        />
                                        <ErrorMessage component={"span"} name={"id_code"}
                                                      className={"errMessage"}/>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label>Số điện thoại</label><br/>
                                        <Field className={"input"}
                                               name="numberPhone"
                                               fullWidth
                                               autoComplete="given-name"
                                               variant="standard"
                                        />
                                        <ErrorMessage component={"span"} name={"numberPhone"}
                                                      className={"errMessage"}/>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label>Email</label><br/>
                                        <Field className={"input"}
                                               name="email"
                                               fullWidth
                                               autoComplete="given-name"
                                               variant="standard"
                                        />
                                        <ErrorMessage component={"span"} name={"email"}
                                                      className={"errMessage"}/>
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
                                        <ErrorMessage component={"span"} name={"wage"}
                                                      className={"errMessage"}/>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <label className="color">Trình độ</label>
                                        <Field className={"input"} as="select" name="level">
                                            <option value="Trung cấp">Trung cấp</option>
                                            <option value="Cao đẳng">Cao đẳng</option>
                                            <option value="Giám sát">Đại học</option>
                                            <option value="Quản lý">Sau đại học</option>
                                        </Field>
                                        <ErrorMessage component={"span"} name={"level"}
                                                      className={"errMessage"}/>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label className="color">Vị trí</label>
                                        <Field className={"input"} as="select" name="location">
                                            <option value="Phục vụ">Phục vụ</option>
                                            <option value="Chuyên viên">Chuyên viên</option>
                                            <option value="Giám sát">Giám sát</option>
                                            <option value="Quản lý">Quản lý</option>
                                            <option value="Giám đốc">Giám đốc</option>
                                        </Field>
                                        <ErrorMessage component={"span"} name={"location"}
                                                      className={"errMessage"}/>
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
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default EditEmployee;