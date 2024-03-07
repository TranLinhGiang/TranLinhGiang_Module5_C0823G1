import { Formik, Form, Field } from "formik";
import * as Method from "../Method/Method";
import "../Css.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Edit() {
  const [editBlog, setEditBlog] = useState();

  const [editCategory, setEditCategory] = useState();

  const id = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    Method.getEditBog().then(
      (res) => {
        const blog = { ...res, category: JSON.stringify(res.category) };
        setEditBlog(blog);
      },
      [id]
    );
  });

  useEffect(() => {
    Method.getEditCategory().then((res) => {
      setEditCategory(res);
    }, []);
  });
  if (!editBlog) {
    return null;
  }
  if (!editCategory) {
    return null;
  }
  return (
    <>
      <NavLink to={"/"}>Trang chủ / </NavLink>
      <NavLink to={"/list"}>Trang list / </NavLink>
      <NavLink to={"/create"}>Trang create </NavLink>
      <h1>Trang edit</h1>
      <Formik
        initialValues={{
          id: editBlog.id,
          blogName: editBlog.blogName,
          poster: editBlog.poster,
          category: editBlog.category,
        }}
        onSubmit={(value) => {
          const update = {
            ...value,
            category: JSON.parse(value.category),
          };
          update(value);
        }}
      >
        <Form>
          <label>Tên bài viết</label>
          <Field name="blogName"></Field>
          <br />
          <br />
          <label>Tên người đăng</label>
          <Field name="poster"></Field>
          <br />
          <br />
          <label>Loại bài viết</label>

          <Field name="category" as="select">
            <option value="" disabled>
              Chọn loại viết
            </option>
          </Field>
          <br />
          <br />
          <button type="submit">Thêm </button>
        </Form>
      </Formik>
    </>
  );
}
export default Edit;
