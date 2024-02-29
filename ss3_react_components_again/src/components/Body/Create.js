import React from "react";
import "./BlogList.css";
import { Formik, Form, Field } from "formik";
import "./BlogList.css";
import { Link, useNavigate } from "react-router-dom";
import * as Method from "../Method/Method";
import { toast } from "react-toastify";
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
            onSubmit={(value) => {
              create(value);
            }}
          >
            <Form>
              <h1>Create Post List</h1>
              <label>Title</label>
              <br />
              <Field className={"field"} name={"title"}></Field>
              <br />
              <label>Category</label>
              <br />
              <Field className={"field"} name={"category"}></Field>
              <br />
              <label>Time</label>
              <br />
              <Field className={"field"} name={"time"}></Field>
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
