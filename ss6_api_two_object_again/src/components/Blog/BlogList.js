import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import * as Method from "../Method/Method";

function BlogList() {
  const [blogList, setBlogList] = useState([]);

  const getAll = async () => {
    try {
      const res = await Method.getAllBlog();
      setBlogList(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <NavLink to={"/"}>Trang chủ / </NavLink>
      <NavLink to={"/list"}>Trang list / </NavLink>
      <NavLink to={"/create"}>Trang create</NavLink>
      <h1>Blog List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Stt</th>
            <th>Tên bài đăng</th>
            <th>Tên người đăng</th>
            <th>Loại bài đăng</th>
            <th>Chỉnh sửa</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {blogList.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.blogName}</td>
              <td>{item.poster}</td>
              <td>{item.category.name}</td>
              <td>
                <Link to={`/edit/${item.id}`}>
                  <button>Sửa</button>
                </Link>
              </td>
              <td>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default BlogList;
