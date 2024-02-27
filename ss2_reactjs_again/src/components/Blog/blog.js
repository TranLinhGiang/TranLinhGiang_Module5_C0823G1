import "./blog.css";
import * as method from "../Method/method";
import { useState, useEffect } from "react";
import React from "react";
function Blog() {
  const [constposts, setConstpost] = useState([]);
  useEffect(() => {
    const getAll = async () => {
      let data = await method.getAllConstPosts();
      setConstpost(data);
    };
    getAll();
  }, []);
  return (
    <>
      <h1>List Posts</h1>
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>TITLE</th>
            <th>SLUG</th>
            <th>CATEGORY</th>
            <th>TIME</th>
          </tr>
        </thead>
        <tbody>
          {constposts.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.slug}</td>
              <td>{item.category}</td>
              <td>{item.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Blog;
