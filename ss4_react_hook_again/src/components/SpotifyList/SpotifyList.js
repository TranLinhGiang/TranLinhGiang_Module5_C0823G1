import Header from "../Header/Header";
import Sideba from "../Sideba/Sideba";
import "../Css.css";
import * as Method from "../Method/Method";
import { useEffect, useState } from "react";
import { ProgressBar } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SearchIcon from "@mui/icons-material/Search";
import ReactPaginate from "react-paginate"; // import phân trang

function SpotifyList() {
  const [spotify, setSpotify] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [show, setShow] = useState(false); // chức năng modal xóa
  const handleClose = () => setShow(false); // chức năng modal xóa
  const [constDelete, setConstDelete] = useState(null); // chức năng modal xóa
  const [searchValue, setSearchValue] = useState(""); // chức năng search

  const [filteredBlogList, setFilteredBlogList] = useState(spotify); // chức năng search

  const [currentPage, setCurrentPage] = useState(0); // chức năng phân trang
  const itemsPerPage = 5; // chức năng phân trang
  const [totalPages, setTotalPages] = useState(0); // chức năng phân trang

  const handleSearch = () => {
    if (Array.isArray(spotify)) {
      const newFilteredList = spotify.filter(
        (item) =>
          item.songName &&
          item.songName.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredBlogList(newFilteredList);
    }
  };
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    getAll();
  };

  const getAll = async () => {
    try {
      const res = await Method.getAllSpotify(currentPage + 1, itemsPerPage);
      if (res && res.data) {
        setTotalPages(res.total_pages);
      }
      setSpotify(res.data);
      setSpotify(res.data.sort((a, b) => a.songName.localeCompare(b.songName)));
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };
  const handleShow = async (consts) => {
    await setConstDelete(consts);
    setShow(true);
  };

  const handleDelete = async () => {
    try {
      await Method.deleteSpotify(constDelete);
      const updatedData = await Method.getAllSpotify();
      setSpotify(updatedData);
      handleClose();
      getAll(); // Gọi lại hàm để cập nhật trang
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAll();
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after a simulated delay
    }, 400); // Adjust the delay as needed
  }, [currentPage]);

  useEffect(() => {
    handleSearch(); // Lọc dữ liệu khi giá trị tìm kiếm thay đổi
  }, [searchValue, spotify]);

  return (
    <>
      <Header />

      <div className="display test">
        <div className="col-lg-3 sideba">
          <Sideba />
        </div>
        {isLoading ? (
          <div className="loading-indicator loading">
            <span>
              {/* <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              /> */}
              <ProgressBar
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </span>
          </div> // Display loading indicator
        ) : (
          <div className="col-lg-9">
            <h2>Danh sách nhạc</h2>
            <span className="input-search">
              <input
                className="input-search"
                type="text"
                placeholder="Search by title"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                style={{ background: "none" }}
              />
            </span>
            <SearchIcon className="search" />

            <table className="table">
              <thead>
                <tr>
                  <th style={{ background: "none" }}>Stt</th>
                  <th style={{ background: "none" }}>Tên bài hát</th>
                  <th style={{ background: "none" }}>Tên ca sĩ</th>
                  <th style={{ background: "none" }}>Thể loại nhạc</th>
                  <th style={{ background: "none" }}>Chỉnh sửa</th>
                  <th style={{ background: "none" }}>Xóa</th>
                </tr>
              </thead>
              <tbody>
                {filteredBlogList.map((item, index) => (
                  <tr key={item.id}>
                    <td style={{ background: "none" }}>{index + 1}</td>
                    <td style={{ background: "none" }}>{item.songName}</td>
                    <td style={{ background: "none" }}>{item.singerName}</td>
                    <td style={{ background: "none" }}>{item.category}</td>
                    <td style={{ background: "none" }}>
                      <Link to={`/edit/${item.id}`}>
                        <button className="button-edit">Sửa</button>
                      </Link>
                    </td>
                    <td style={{ background: "none" }}>
                      <button
                        onClick={() => {
                          handleShow(item);
                        }}
                        className="button-delete"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <span className="floats">
              <ReactPaginate // chỗ này nhớ thêm để làm chức năng phân trang
                breakLabel="..."
                nextLabel="Sau >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="< Trước"
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
          </div>
        )}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa </Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Are you sure you want to delete `} </Modal.Body>
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
export default SpotifyList;
