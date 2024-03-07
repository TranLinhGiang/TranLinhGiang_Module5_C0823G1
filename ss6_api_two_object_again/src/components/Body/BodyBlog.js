import { NavLink } from "react-router-dom";
import "../Css.css";
function BodyBlog() {
  return (
    <>
      <NavLink to={"/"}>Trang chủ / </NavLink>
      <NavLink to={"/list"}>Trang list / </NavLink>
      <NavLink to={"/create"}>Trang create</NavLink>
      <h1>Trang chủ</h1>
    </>
  );
}
export default BodyBlog;
