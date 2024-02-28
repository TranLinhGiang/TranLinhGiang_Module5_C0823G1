import { Field, Formik, Form,ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as method from "../Method/method";
import ReplyIcon from "@mui/icons-material/Reply";
import React from "react";
import "./blog.css";
import { toast } from "react-toastify";
import * as Yup from "yup";
function Edit() {
  const [constposts, setConstpost] = useState();
  const id = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const editConstPosts = async () => {
      const posts = await method.getEditConstPosts(id);
      setConstpost(posts);
    };
    editConstPosts();
  }, [id]);
  if (!constposts) {
    return null;
  }
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
              title: constposts.title,
              slug: constposts.slug,
              category: constposts.category,
              updatedAt: constposts.updatedAt,
              id: constposts.id,
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
            onSubmit={(values) => {
              const edit = async (constposts) => {
                await method.editConstPosts(constposts);
                toast("Edit success !");
                navigate("/");
              };
              edit(values);
            }}
          >
            <Form className="position">
              <h1 className="color-text">Edit Constposts</h1>
              <div class="form-group">
                <strong>
                  <label htmlFor="title">TITLE</label>
                </strong>
                <Field type="text" className="input" name="title" />
                <ErrorMessage
                    component={"span"}
                    name="title"
                    className={"errMessage"}
                  />
              </div>
              <div class="form-group">
                <strong>
                  <label htmlFor="slug">SLUG</label>
                </strong>
                <Field type="text" className="input" name="slug" />
                <ErrorMessage
                    component={"span"}
                    name="slug"
                    className={"errMessage"}
                  />
              </div>
              <div class="form-group">
                <strong>
                  <label htmlFor="category">CATEGORY</label>
                </strong>

                <Field type="text" className="input" name="category" />
                <ErrorMessage
                    component={"span"}
                    name="category"
                    className={"errMessage"}
                  />
              </div>
              <div class="form-group">
                <strong>
                  <label htmlFor="updatedAt">UPDATED AT</label>
                </strong>
                <Field type="text" className="input" name="updatedAt" />
                <ErrorMessage
                    component={"span"}
                    name="updatedAt"
                    className={"errMessage"}
                  />
              </div>
              <div>
                <button type="submit" class="update-button">
                  <strong>Updated</strong>
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </>
  );
}
export default Edit;
