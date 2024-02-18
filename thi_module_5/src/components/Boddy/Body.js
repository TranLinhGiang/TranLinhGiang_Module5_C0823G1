import {Table} from "@mui/material";
import "./Body.css";
import "../../service/spotify";
import React, {useEffect, useState} from "react";
import * as method from "../../Method/method";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link, useNavigate} from 'react-router-dom';
import {toast} from "react-toastify";

function Body() {
    const [spotifyList, setSpotifyList] = useState([]);
    useEffect(() => {
        const getAll = async () => {
            let data = await method.getAllSpotifyList();
            console.log(data)
            setSpotifyList(data);
        }
        getAll();
    }, [])


    const toggleBroadcast = (index) => {
        // Tạo một bản sao của mảng để tránh thay đổi trực tiếp state
        const updatedList = [...spotifyList];
        // Đảo ngược trạng thái 'isPublic' cho mục được chọn
        updatedList[index].isPublic = !updatedList[index].isPublic;
        // Cập nhật state
        setSpotifyList(updatedList);
    };

    const [show, setShow] = useState(false);
    const [spotifyDelete, setSpotifyDelete] = useState(null);
    const navigate = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = async (spotify) => {
        await setSpotifyDelete(spotify);
        setShow(true);
    };
    const handleDelete = async () => {
        try {
            await method.deleteSpotify(spotifyDelete);
            const update = await method.getAllSpotifyList();
            handleClose();
            toast("Xóa thành công");
            navigate("/");
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <h2 className={"colors"}>Danh sách nhạc</h2>
            <Link to={"/createSpotify"}>
                <button className={"btn btn-success"}>Thêm mới nhạc</button>
            </Link>

            <Table responsive>
                <tr>
                    <th>Stt</th>
                    <th>Tên bài hát</th>
                    <th>Ca sỹ</th>
                    <th>Lượt xem</th>
                    <th>Thời gian phát</th>
                    <th>Chức năng</th>
                    <th>Chỉnh sửa</th>
                    <th>Xóa</th>
                </tr>
                <tbody>
                {spotifyList.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.singer}</td>
                        <td>{item.view}</td>
                        <td>{item.broadcastTime}</td>
                        <td>
                            <button className={"btn btn-success"} onClick={() => toggleBroadcast(index)}>
                                {item.isPublic ? "Không công khai" : "Công khai"}
                            </button>
                        </td>
                        <td>
                            <Link to={`/editSpotify/${item.id}`}>
                                <button className={"btn btn-success"}>Chỉnh sửa</button>
                            </Link>

                        </td>
                        <td>
                            <button onClick={() => handleShow(item)} className={"btn btn-danger"}>Xóa</button>
                        </td>
                    </tr>
                ))}
                </tbody>

            </Table>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title> Xóa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có muốn xóa bài này !
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button onClick={handleDelete} variant="danger">Xóa</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Body;