import { Formik, Form, Field, ErrorMessage } from "formik";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import * as method from "../../Service/method";
import { useNavigate } from "react-router";

import { toast } from "react-toastify";
import ReplyIcon from "@mui/icons-material/Reply";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";

import { useEffect } from "react";
import { create } from "lodash";
function CreateCustomer() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Formik
        initialValues={{
          name: "",
          dateOfBirth: "",
          gender: "",
          idCard: "",
          phoneNumber: "",
          email: "",
          categoryCustomer: "",
          address: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Vui lòng nhập họ và tên khách hàng")
            .min(2, "Tên khách hàng quá ngắn")
            .max(45, "Tên khách hàng quá dài"),
          dateOfBirth: Yup.string()
            .required("Vui lòng điền ngày tháng năm sinh ")
            .test(
              "is-over-18",
              "Khách hàng phải đủ 18 tuổi trở lên",
              function (value) {
                const currentDate = new Date();
                const birthDate = new Date(value);
                const age = currentDate.getFullYear() - birthDate.getFullYear();
                // Kiểm tra nếu chưa đủ 18 tuổi
                return age >= 18;
              }
            ),
          gender: Yup.string().required("Vui lòng chọn giới tính"),
          idCard: Yup.string()
            .required("Vui lòng nhập số chứng minh nhân dân")
            .matches(/^[0-9]{9,12}$/, "Số chứng minh phải đủ 9 hoặc 12 số"),
          phoneNumber: Yup.string()
            .required("Vui lòng nhập số điện thoại")
            .matches(
              /^0|\+81[0-9]{9}$/,
              "Số điện thoại phải bắt đầu 0 hoawjv +81, và đủ 10 số"
            ),
          email: Yup.string()
            .required("Vui lòng nhập email")
            .matches(
              /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
              "Email không hợp lệ"
            ),
          categoryCustomer: Yup.string().required(
            "Vui lòng chọn loại khách hàng"
          ),
          address: Yup.string().required("Vui lòng nhập địa chỉ"),
        })}
        onSubmit={(value) => {
          const create = async (task) => {
            await method.createCustomer(task);
            toast.success("Thêm mới thành công !");
            navigate("/customerList");
          };
          create(value);
        }}
      >
        <Form>
          <div className="body-form col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <Link to="/employeeList">
                <button className="back btn btn-success">
                  <ReplyIcon /> Trở về
                </button>
              </Link>
            </div>
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 height">
              <React.Fragment>
                <h3>Thêm mới khách hàng</h3>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <label>Họ tên khách hàng</label>
                    <br />
                    <Field
                      className={"input"}
                      name="name"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                    />
                    <ErrorMessage
                      component={"span"}
                      name={"name"}
                      className={"errMessage"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <label>Ngày tháng năm sinh</label> <br />
                    <Field
                      className={"input"}
                      name="dateOfBirth"
                      type="date"
                    ></Field>
                    <ErrorMessage
                      component={"span"}
                      name={"dateOfBirth"}
                      className={"errMessage"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <label>Giới tính</label>
                    <br />
                    <Field as="select" name="gender" className={"input"}>
                      <option value="">-- Giới tính --</option>
                      <option value="Nam">Nam</option>
                      <option value="Nữ">Nữ</option>
                      <option value="Khác">Khác</option>
                    </Field>
                    <ErrorMessage
                      component={"span"}
                      name={"gender"}
                      className={"errMessage"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <label>Số CMND</label>
                    <br />
                    <Field
                      className={"input"}
                      name="idCard"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                    />
                    <ErrorMessage
                      component={"span"}
                      name={"idCard"}
                      className={"errMessage"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <label>Số điện thoại</label>
                    <br />
                    <Field
                      className={"input"}
                      required
                      name="phoneNumber"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                    />
                    <ErrorMessage
                      component={"span"}
                      name={"phoneNumber"}
                      className={"errMessage"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <label>Email</label>
                    <br />
                    <Field
                      className={"input"}
                      name="email"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                    />
                    <ErrorMessage
                      component={"span"}
                      name={"email"}
                      className={"errMessage"}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <label className="color">categoryCustomer</label>
                    <Field
                      className={"input"}
                      as="select"
                      name="categoryCustomer"
                    >
                      <option value="">--- Hãy chọn loại khách hàng ---</option>
                      <option value="Diamond">Diamond</option>
                      <option value="Platinium">Platinium</option>
                      <option value="Gold">Gold</option>
                      <option value="Silver">Silver</option>
                      <option value="Member">Member</option>
                    </Field>
                    <ErrorMessage
                      component={"span"}
                      name={"categoryCustomer"}
                      className={"errMessage"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <label>Địa chỉ</label>
                    <br />
                    <Field
                      className={"input"}
                      name="address"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                    />
                    <ErrorMessage
                      component={"span"}
                      name={"address"}
                      className={"errMessage"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <button className="save btn btn-success">
                      Lưu <FileDownloadDoneIcon />
                    </button>
                  </Grid>
                </Grid>
              </React.Fragment>
            </div>
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          </div>
        </Form>
      </Formik>
      <Footer />
    </>
  );
}
export default CreateCustomer;
