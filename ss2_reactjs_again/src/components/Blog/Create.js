import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import "./blog.css";
import * as method from "../Method/method";
import { toast } from "react-toastify";
import * as Yup from "yup";
import "./blog.css";
import ReplyIcon from "@mui/icons-material/Reply";
function Create() {
  const navigate = useNavigate();
  const create = async (task) => {
    await method.createConstPosts(task);
    toast("Add success !");
    navigate("/");
  };
  return (
    <>
      <div className="display">
        <div className="col-lg-4">
          <Link to={"/"}>
            <button className="back">
              <ReplyIcon />
              <strong>Back</strong>
            </button>
          </Link>
        </div>
        <div className="col-lg-4">
          <Formik
            initialValues={{
              title: "",
              slug: "",
              category: "",
              updatedAt: "",
            }}
            validationSchema={Yup.object({
              title: Yup.string()
                .required("Title field is required !")
                .min(3, "too short")
                .max(45, "too long"),
              slug: Yup.string()
                .required("Slug field is required !")
                .min(3, "too short")
                .max(45, "too long"),
              category: Yup.string()
                .required("Category field is required !")
                .min(3, "too short")
                .max(45, "too long"),
              updatedAt: Yup.string()
                .required("Category field is required !")
                .min(3, "too short")
                .max(45, "too long"),
            })}
            onSubmit={(value) => {
              create(value);
            }}
          >
            <div className="container position">
              <h2 className="title color-text">Add ConstPosts</h2>
              <Form>
                <div className="form-group">
                  <strong>
                    <label htmlFor="song">TITLE</label>
                  </strong>

                  <Field
                    className="input"
                    type="text"
                    id="song"
                    name={"title"}
                  />
                  <ErrorMessage
                    component={"span"}
                    name="title"
                    className={"errMessage"}
                  />
                </div>
                <div className="form-group">
                  <strong>
                    <label htmlFor="song">SLUG</label>
                  </strong>
                  <Field className="input" type="text" id="song" name="slug" />
                  <ErrorMessage
                    component={"span"}
                    name="slug"
                    className={"errMessage"}
                  />
                </div>
                <div className="form-group">
                  <strong>
                    <label htmlFor="song">CATEGORY</label>
                  </strong>
                  <Field
                    className="input"
                    type="text"
                    id="song"
                    name="category"
                  />
                  <ErrorMessage
                    component={"span"}
                    name="category"
                    className={"errMessage"}
                  />
                </div>
                <div className="form-group">
                  <strong>
                    <label htmlFor="song">UPDATED</label>
                  </strong>
                  <Field
                    className="input"
                    type="text"
                    id="song"
                    name="updatedAt"
                  />
                  <ErrorMessage
                    component={"span"}
                    name="updatedAt"
                    className={"errMessage"}
                  />
                </div>
                <div>
                  <button className="submit-button">
                    <strong>Add</strong>
                  </button>
                  <br />
                  <br />
                </div>
              </Form>
            </div>
          </Formik>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </>
  );
}
export default Create;
