import "./BlogList.css";
import React, { useEffect, useState } from "react";
import * as Method from "../Method/Method";
import { Link } from "react-router-dom";
function BlogList() {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      let data = await Method.getAllConstPosts();
      setBlogList(data);
    };
    getAll();
  }, []);
  return (
    <>
      <h1>List Posts</h1>
      <Link to={"/create"}>
        <button className="button-add">Add</button>
      </Link>
      <br />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th style={{ background: "#4b5563", color: "white" }}>STT</th>

            <th style={{ background: "#4b5563", color: "white" }}>TITLE</th>

            <th style={{ background: "#4b5563", color: "white" }}>CATEGORY</th>

            <th style={{ background: "#4b5563", color: "white" }}>TIME</th>

            <th style={{ background: "#4b5563", color: "white" }}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {blogList.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.time}</td>
              <td>
                <button className="button-edit">Edit</button>
                <button className="button-delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default BlogList;
