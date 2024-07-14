import { Formik, Form, Field, ErrorMessage } from "formik";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import * as method from "../../Service/method";
import { useNavigate, useParams } from "react-router";

import { toast } from "react-toastify";
import ReplyIcon from "@mui/icons-material/Reply";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import * as Yup from "yup";
import { useEffect } from "react";
import { create } from "lodash";
import { useState } from "react";

function EditCustomer() {
  const [editCustomer, setEditCustomer] = useState();
  const id = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const editCustomers = async () => {
      const edit = await method.getEditCustomer(id);
      setEditCustomer(edit);
    };
    editCustomers();
  }, [id]);
  if (!editCustomer) {
    return <span>Loading....</span>;
  }
  return (
    <>
      <Header></Header>

      <Formik
        initialValues={{
          id: editCustomer.id,
          name: editCustomer.name,
          dateOfBirth: editCustomer.dateOfBirth,
          gender: editCustomer.gender,
          idCard: editCustomer.idCard,
          phoneNumber: editCustomer.phoneNumber,
          email: editCustomer.email,
          categoryCustomer: editCustomer.categoryCustomer,
          address: editCustomer.address,
        }}
        onSubmit={(value) => {
          const update = async (task) => {
            await method.editCustomer(task);
            toast.success("Chỉnh sửa thành công !!");
            navigate("/customerList");
          };
          update(value);
        }}
      >
        <Form>
          <div className="body-form col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <Link to="/customerList">
                <button className="back btn btn-success">
                  <ReplyIcon /> Trở về
                </button>
              </Link>
            </div>
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 height">
              <React.Fragment>
                <h3>Chỉnh sửa khách hàng</h3>
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
                      <option>--- Hãy chọn loại khách hàng ---</option>
                      <option value="Diamond">Diamond</option>
                      <option value="Platinium">Platinium</option>
                      <option value="Gold">Gold</option>
                      <option value="Silver">Silver</option>
                      <option value="Member">Member</option>
                    </Field>
                    <ErrorMessage
                      component={"span"}
                      name={"level"}
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
          <Footer></Footer>
        </Form>
      </Formik>
    </>
  );
}
export default EditCustomer;
