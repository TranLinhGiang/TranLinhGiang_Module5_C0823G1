import Header from "../Header/Header";
import Sideba from "../Sideba/Sideba";
import "../Css.css";
import * as Method from "../Method/Method";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
function SpotifyList() {
  const [spotify, setSpotify] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [show, setShow] = useState(false); // chức năng modal xóa
  const handleClose = () => setShow(false); // chức năng modal xóa
  const [constDelete, setConstDelete] = useState(null); // chức năng modal xóa

  const getAll = async () => {
    try {
      const data = await Method.getAllSpotify();
      setSpotify(data);
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
      const upadte = await Method.getAllSpotify();
      setSpotify(upadte);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAll();
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after a simulated delay
    }, 1000); // Adjust the delay as needed
  }, []);

  return (
    <>
      <Header />

      <div className="display">
        <div className="col-lg-3 sideba">
          <Sideba />
        </div>
        {isLoading ? (
          <div className="loading-indicator loading">
            <span>
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            </span>
          </div> // Display loading indicator
        ) : (
          <div className="col-lg-9">
            <h2>Danh sách nhạc</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Stt</th>
                  <th>Tên bài hát</th>
                  <th>Tên ca sĩ</th>
                  <th>Thể loại nhạc</th>
                  <th>Chỉnh sửa</th>
                  <th>Xóa</th>
                </tr>
              </thead>
              <tbody>
                {spotify.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.songName}</td>
                    <td>{item.singerName}</td>
                    <td>{item.category}</td>
                    <td>
                      <Link to={`/edit/${item.id}`}>
                        <button className="button-edit">Sửa</button>
                      </Link>
                    </td>
                    <td>
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
