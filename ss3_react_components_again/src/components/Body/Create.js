import React from "react";
import "./BlogList.css";
import { Formik, Form, Field } from "formik";
import "./BlogList.css";
import { Link } from "react-router-dom";
function Create() {
  return (
    <>
      <div className="display">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <Formik>
            <Form>
              <h1>Create Post List</h1>
              <label>Title</label>
              <br />
              <Field className={"field"}></Field>
              <br />
              <label>Category</label>
              <br />
              <Field className={"field"}></Field>
              <br />
              <label>Time</label>
              <br />
              <Field className={"field"}></Field>
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
