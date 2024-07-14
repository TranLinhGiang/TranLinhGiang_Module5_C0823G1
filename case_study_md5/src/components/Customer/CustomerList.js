import Header from "../Header/Header";
import Table from "@mui/material/Table";
import "./Customer.css";
import { useEffect, useState } from "react";
import * as method from "../../Service/method";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Footer from "../Footer/Footer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function CustomerList() {
  const [customerList, setCustomerList] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [customerDelete, setCustomerDelete] = useState();

  const [searchValue, setSearchValue] = useState("");
  const [filteredBlogList, setFilteredBlogList] = useState(customerList);

  const handleSearch = () => {
    const newFilteredList = customerList.filter(
      (item) =>
        item.name && item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredBlogList(newFilteredList);
  };

  const handleShow = async (customer) => {
    await setCustomerDelete(customer);
    setShow(true);
  };

  const handleDelete = async () => {
    try {
      await method.deleteCustomer(customerDelete);
      const updateList = await method.getAllCustomer();
      setCustomerList(updateList);
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  const getAll = async () => {
    try {
      const res = await method.getAllCustomer();
      setCustomerList(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAll();
  }, []);
  useEffect(() => {
    handleSearch();
  }, [searchValue, customerList]);
  if (!customerList) {
    return null;
  }
  return (
    <>
      <Header></Header>
      <div className="my-container">
        <h1>Danh sách Khách hàng</h1>
        <Link to={"/createCustomer"}>
          <button className="btn btn-success">
            <AddIcon />
            Thêm mới khách hàng
          </button>
        </Link>
        <input
          className="search-name"
          type="text"
          placeholder="Search by name"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Stt</th>
              <th>Họ và tên khách hàng</th>
              <th>Ngày sinh</th>
              <th>Giới tính</th>
              <th>Số CMND</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Loại khách</th>
              <th>Địa chỉ</th>
              <th>Chỉnh sửa</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {filteredBlogList.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.dateOfBirth}</td>
                <td>{item.gender}</td>
                <td>{item.idCard}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
                <td>{item.categoryCustomer}</td>
                <td>{item.address}</td>
                <td>
                  <Link to={`/editCustomer/${item.id}`}>
                    <button className="btn btn-success">
                      <SettingsIcon />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleShow(item)}
                    className="btn btn-danger"
                  >
                    <DeleteForeverIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Footer />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          {customerDelete && `Bạn chắc chắn muốn xóa ${customerDelete.name}`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            {" "}
            Đóng
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default CustomerList;
