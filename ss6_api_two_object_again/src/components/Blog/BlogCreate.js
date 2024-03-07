import { Formik, Form, Field } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import * as Method from "../Method/Method";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function CreateBlog() {
  const [categories, setCategories] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    Method.getAllCategory().then((res) => setCategories(res));
  }, []);
  if (!categories) {
    return null;
  }
  return (
    <>
      <NavLink to={"/"}>Trang chủ / </NavLink>
      <NavLink to={"/list"}>Trang list / </NavLink>
      <NavLink to={"/create"}>Trang create </NavLink>
      <h1>Trang create</h1>
      <Formik
        initialValues={{
          blogName: "",
          poster: "",
          category: "",
        }}
        onSubmit={(value) => {
          const blog = {
            ...value,
            category: JSON.parse(value.category),
          };
          Method.createBlog(blog).then((res) => {
            console.log(res.data);
            toast.success("Thêm mới thành công !");
            navigate("/list");
          });
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
              Chọn loại bài viết
            </option>
            {categories.map((category) => (
              <option value={JSON.stringify(category)} key={category.id}>
                {category.name}
              </option>
            ))}
          </Field>
          <br />
          <br />
          <button type="submit">Thêm </button>
        </Form>
      </Formik>
    </>
  );
}
export default CreateBlog;
