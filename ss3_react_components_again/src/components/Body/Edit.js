import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Method from "../Method/Method";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "./BlogList.css";
function Edit() {
  const [blogEdit, setBlogEdit] = useState();
  const id = useParams();
  const navigate = useNavigate();
 
  useEffect(() => {
    const editBlog = async () => {
      const post = await Method.getEditConstPosts(id);
      setBlogEdit(post);
    };
    editBlog();
  }, [id]);
  if (!blogEdit) {
    return null;
  }
  return (
    <>
      <h1>Edit Post List</h1>
      <div className="display">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          {" "}
          <Formik
            initialValues={{
              id: blogEdit.id,
              title: blogEdit.title,
              category: blogEdit.category,
              time: blogEdit.time,
            }}
            onSubmit={(values) => {
              const edit = async (blogEdit) => {
                await Method.editConstPosts(blogEdit);
                toast("edit success !");
                navigate("/");
              };
              edit(values);
            }}
          >
            <Form>
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
        <div className="col-lg-4"></div>
      </div>

  
    </>
  );
}
export default Edit;
