import "./BlogList.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import * as Method from "../Method/Method";
import ReactPaginate from "react-paginate"; // import phân trang 


function BlogList() {
  const [blogList, setBlogList] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [constDelete, setConstDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(0); // phân trang
  const itemsPerPage = 5; // phân trang
  const [totalPages, setTotalPages] = useState(0); // phân trang

  const handleShow = async (consts) => {
    await setConstDelete(consts);
    setShow(true);
  };

  const handleDelete = async (consts) => {
    try {
      await Method.deleteConstPosts(constDelete);
      const updateList = await Method.getAllConstPosts();
      setBlogList(updateList);
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  const handlePageClick = ({selected}) => {
    setCurrentPage(selected);
};

  const getAll = async () => {
    try {
      const res = await Method.getAllConstPosts(currentPage + 1, itemsPerPage); // phân trang
      if (res && res.data) {
        setBlogList(res.data);
        setTotalPages(res.total_pages);
      }
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    getAll();
  }, [currentPage]); // dependency phân trang
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
                <Link to={`/edit/${item.id}`}>
                  <button className="button-edit">Edit</button>
                </Link>

                <button
                  onClick={() => handleShow(item)}
                  className="button-delete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <ReactPaginate // chỗ này nhớ thêm để làm chức năng phân trang 
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={totalPages}
                    previousLabel="< previous"

                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa </Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Are you sure you want to delete`} </Modal.Body>
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
export default BlogList;
