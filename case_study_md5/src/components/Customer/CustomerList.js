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
function CustomerList() {
  const [customerList, setCustomerList] = useState([]);

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
            {customerList.map((item, index) => (
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
                  <button className="btn btn-success">
                    <SettingsIcon />
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger">
                    <DeleteForeverIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Footer />
    </>
  );
}
export default CustomerList;
