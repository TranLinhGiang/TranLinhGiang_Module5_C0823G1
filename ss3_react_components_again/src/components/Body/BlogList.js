import "./BlogList.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import * as Method from "../Method/Method";
import ReactPaginate from "react-paginate"; // import phân trang


function BlogList() {
  const [blogList, setBlogList] = useState([]); // show list

  const [show, setShow] = useState(false); // chức năng modal xóa
  const handleClose = () => setShow(false); // chức năng modal xóa
  const [constDelete, setConstDelete] = useState(null); // chức năng modal xóa
  const [currentPage, setCurrentPage] = useState(0); // chức năng phân trang
  const itemsPerPage = 5; // chức năng phân trang
  const [totalPages, setTotalPages] = useState(0); // chức năng phân trang
  const [sort, setSort] = useState(false); // chức năng sắp xếp
  const [initialBlogList, setInitialBlogList] = useState([]); // chức năng phụ của sắp xếp để nhấn thêm lần nữa để quay lại trạng thái ban đầu

  const [searchValue, setSearchValue] = useState(""); // chức năng tìm kiếm

  const filteredBlogList = initialBlogList.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  ); // chức năng tìm kiếm

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

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    getAll();
  };

  const sortByTitle = async () => {
    setSort(!sort); // đảo ngược tráng thái
    try {
      const sorted = [...blogList].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setBlogList(sorted);
    } catch (e) {
      console.log("Lỗi sắp xếp" + e);
    }
  };

  const getAll = async () => {
    try {
      const res = await Method.getAllConstPosts(currentPage + 1, itemsPerPage);
      if (res && res.data) {
        setInitialBlogList(res.data);
        setTotalPages(res.total_pages);
        if (sort) {
          // Sắp xếp nếu được đánh dấu
          res.data.sort((a, b) => a.title.localeCompare(b.title));
        }
        setBlogList(res.data);
        setTotalPages(res.total_pages);
      }
      if (searchValue) {
        // Áp dụng lọc nếu có từ khóa tìm kiếm
        const filteredData = res.data.filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setBlogList(filteredData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAll();
  }, [currentPage, sort]); // dependency phân trang
  return (
    <>
      <h1>List Posts</h1>
      <Link to={"/create"}>
        <button className="button-add">Add</button>
      </Link>
      <button className="button-sort" onClick={sortByTitle}>
        Sort by title
      </button>

      <input
        className="input-search"
        type="text"
        placeholder="Search by title"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

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
          {filteredBlogList.map((item, index) => (
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
      <span className="floats">
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
      </span>

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
