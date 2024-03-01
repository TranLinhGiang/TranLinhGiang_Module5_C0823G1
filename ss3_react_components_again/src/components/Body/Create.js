import React from "react";
import "./BlogList.css";
import { Formik, Form, Field,ErrorMessage } from "formik";
import "./BlogList.css";
import { Link, useNavigate } from "react-router-dom";
import * as Method from "../Method/Method";
import { toast } from "react-toastify";
import * as Yup from "yup";
function Create() {
  const navigate = useNavigate();
  const create = async (task) => {
    await Method.createConstPosts(task);
    toast("Add blog success !");
    navigate("/");
  };
  return (
    <>
      <div className="display">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <Formik
            initialValues={{
              title: "",
              category: "",
              time: "",
            }}
            validationSchema={Yup.object({
              title: Yup.string()
                .required("title cannot be empty !")
                .min(2, "to short")
                .max(45, "to long"),
              category: Yup.string()
                .required("category cannot be empty !")
                .min(2, "to short")
                .max(45, "to long"),
              time: Yup.string()
                .required("time cannot be empty !")
                .min(2, "to short")
                .max(45, "to long"),
            })}
            onSubmit={(value) => {
              create(value);
            }}
          >
            <Form>
              <h1>Create Post List</h1>
              <label>Title</label>
              <br />
              <Field className={"field"} name={"title"}></Field>
              <ErrorMessage
                    component={"span"}
                    name="title"
                    className={"errMessage"}
                  />
              <br />
              <label>Category</label>
              <br />
              <Field className={"field"} name={"category"}></Field>
              <ErrorMessage
                    component={"span"}
                    name="category"
                    className={"errMessage"}
                  />
              <br />
              <label>Time</label>
              <br />
              <Field className={"field"} name={"time"}></Field>
              <ErrorMessage
                    component={"span"}
                    name="time"
                    className={"errMessage"}
                  />
              <br />
              <br />
              <button className="button">Add</button>
              <br />
              <br />
              <Link to={"/"}>
                <button className="button-back">Back to List</button>
              </Link>
            </Form>
          </Formik>
        </div>
        <div className="col-lg-4"> </div>
      </div>
    </>
  );
}
export default Create;
