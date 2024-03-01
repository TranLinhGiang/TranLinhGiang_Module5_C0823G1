import { Formik, Form, Field ,ErrorMessage} from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Method from "../Method/Method";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
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
        <div className="col-lg-4"></div>
      </div>
    </>
  );
}
export default Edit;
