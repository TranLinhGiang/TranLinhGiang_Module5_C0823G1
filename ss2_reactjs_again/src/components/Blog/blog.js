import "./blog.css";
import * as method from "../Method/method";
import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
function Blog() {
  const [constposts, setConstpost] = useState([]);

  const [constDelete, setConstDelete] = useState(null);

  const handleShow = async (employee) => {
    await setConstDelete(employee);
    setShow(true);
  };

  const handleDelete = async () => {
    try {
      await method.deleteConstPosts(constDelete);
      const update = await method.getAllConstPosts();
      setConstpost(update); // Sử dụng setConstpost để cập nhật trạng thái
      handleClose();
      toast("Xóa thành công!");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getAll = async () => {
      let data = await method.getAllConstPosts();
      setConstpost(data);
    };
    getAll();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <div className="display">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <h1 className="color-text">List Posts</h1>
          <Link to={"/create"}>
            <button className="btn-add">
              <AddIcon /> <strong>Add</strong>
            </button>
          </Link>
          <br />
          <br />

          <table className="table box">
            <thead>
              <tr>
                <th style={{ background: "grey" }}>STT</th>
                <th style={{ background: "grey" }}>TITLE</th>
                <th style={{ background: "grey" }}>SLUG</th>
                <th style={{ background: "grey" }}>CATEGORY</th>
                <th style={{ background: "grey" }}>TIME</th>
                <th style={{ background: "grey" }}>EDIT</th>
                <th style={{ background: "grey" }}>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {constposts.map((item, index) => (
                <tr key={item.id}>
                  <th>{index + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.slug}</td>
                  <td>{item.category}</td>
                  <td>{item.updatedAt}</td>
                  <td>
                    <Link to={`/edit/${item.id}`}>
                      <button className="btn-edit">
                        {" "}
                        <strong>Edit</strong>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <Link>
                      <button
                        onClick={() => handleShow(item)}
                        className="btn-delete"
                      >
                        <strong>Delete</strong>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-lg-1"></div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {constDelete && `Are you sure you want to delete ${constDelete.category}`}{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Blog;
