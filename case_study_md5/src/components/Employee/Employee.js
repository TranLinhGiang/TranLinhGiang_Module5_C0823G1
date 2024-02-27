import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./createEmpoyee.css"
import {useEffect} from "react";
import * as method from "../../Service/method";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import "../../data/db"
import SettingsIcon from '@mui/icons-material/Settings';
import {toast} from "react-toastify";
import Table from "@mui/material/Table";
import AddIcon from '@mui/icons-material/Add';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import ReactPaginate from "react-paginate";

function Employee() {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5; // Số lượng nhân viên mỗi trang
    const [totalPages, setTotalPages] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    let [sort, setSort] = useState(false)
    const [employeeList, setEmployeeList] = useState([]);
    const [employeeDelete, setEmployeeDelete] = useState(null);
    // const [searchResult, setSearchResult] = useState([]);
    // const [searchTerm, setSearchTerm] = useState("");

    // const handleSearch = async () => {
    //     try {
    //         const res = await method.getAllEmployeeList(1, itemsPerPage, searchTerm);
    //         console.log('Search Result:', res.data); // Kiểm tra dữ liệu tìm kiếm
    //         if (res && res.data) {
    //             setEmployeeList(res.data);
    //             setSearchResult(res.data); // Đảm bảo cập nhật searchResult từ dữ liệu tìm kiếm
    //             setTotalPages(res.total_pages);
    //         }
    //     } catch (error) {
    //         console.error("Lỗi khi thực hiện tìm kiếm:", error);
    //     }
    // };
    // const handleSearchChange = (event) => {
    //     setSearchTerm(event.target.value);
    // };

    const handlePageClick = ({selected}) => {
        setCurrentPage(selected);
    };
    const handleShow = async (employee) => {
        await setEmployeeDelete(employee);
        setShow(true);
    };

    const getAll = async () => {
        try {
            const res = await method.getAllEmployeeList(currentPage + 1, itemsPerPage); // phân trang
            if (res && res.data) {
                setEmployeeList(res.data);
                setTotalPages(res.total_pages);
                // setSearchResult(res.data); // Cập nhật searchResult khi có dữ liệu mới
            }
        } catch (error) {
            console.error("Lỗi khi lấy danh sách nhân viên:", error);
        }
    };
    const sortEmployee = async () => {
        try {
            const res = await method.getAllEmployeeList(currentPage + 1, itemsPerPage); // Lấy dữ liệu của trang hiện tại
            let sortedEmployees = [...res.data]; // Tạo một bản sao của dữ liệu để tránh ảnh hưởng đến state

            sortedEmployees.sort((a, b) => a.firstName.localeCompare(b.firstName));
            setEmployeeList(sortedEmployees);
            // Không cần thay đổi trang hiện tại ở đây
        } catch (error) {
            console.error("Lỗi khi sắp xếp:", error);
        }
    };
    const sortEmployeeByWage = async () => {
        try {
            const res = await method.getAllEmployeeList(currentPage + 1, itemsPerPage); // Lấy dữ liệu của trang hiện tại
            let sortedEmployees = [...res.data]; // Tạo một bản sao của dữ liệu để tránh ảnh hưởng đến state
            sortedEmployees.sort((a, b) => b.wage - a.wage); // Sắp xếp theo wage
            setEmployeeList(sortedEmployees);
        } catch (error) {
            console.error("Lỗi khi sắp xếp:", error);
        }
    }

    const handleDelete = async () => {

        try {
            await method.deletes(employeeDelete)
            const update = await method.getAllEmployeeList(currentPage + 1, itemsPerPage);
            // Đảm bảo rằng update.data là một mảng
            if (Array.isArray(update.data)) {
                setEmployeeList(update.data);
                // setSearchResult(update.data); // Cập nhật searchResult khi có dữ liệu mới
            } else {
                console.error("Cấu trúc dữ liệu không hợp lệ sau hoạt động xóa");
            }
            handleClose();
            toast("Xóa thành công!");
        } catch (e) {
            console.error("Lỗi trong quá trình thực hiện hoạt động xóa:", e);
        }
    };

    useEffect(() => {
        if (!sort) {
            getAll().then(() => {
            });

        } else {
            sortEmployee().then(() => {
            });

        }

    }, [sort, currentPage]);

    function change() {
        setSort(prevSort => !prevSort);
    }


    return (
        <>
            <Header/>
            <div className="my-container">
                <h1>Danh sách nhân viên </h1>
                <Link to="/createEmployee">
                    <button className="btn btn-success"><AddIcon/> Thêm mới nhân viên</button>
                </Link>

                <button className={"btn btn-success position"} onClick={() => {
                    change()
                }}><LowPriorityIcon/> Sắp xếp theo tên (A-z)
                </button>

                <button className={"btn btn-success positions"} onClick={sortEmployeeByWage}><LowPriorityIcon/> Sắp xếp
                    theo lương
                </button>
                {/*<input*/}
                {/*    type="text"*/}
                {/*    value={searchTerm}*/}
                {/*    onChange={handleSearchChange}*/}
                {/*    placeholder="Nhập tên nhân viên"*/}
                {/*/>*/}
                {/*<button onClick={handleSearch}>Tìm kiếm</button>*/}
                <Table striped bordered hover variant="dark">
                    <tr>
                        <th>STT</th>
                        <th>Họ tên khách hàng</th>
                        <th>Ngày tháng năm sinh</th>
                        <th>Số chứng minh</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Lương</th>
                        <th>Trình độ</th>
                        <th>Vị trí</th>
                        <th>Chỉnh sửa</th>
                        <th>Xóa</th>
                    </tr>
                    <tbody>

                    {/*{searchTerm ? (*/}
                    {/*    searchResult.map((item, index) => (*/}
                    {/*        <tr key={item.id}>*/}
                    {/*            <td>{index + 1}</td>*/}
                    {/*            <td>{item.firstName}</td>*/}
                    {/*            <td>{item.dateOfBirth}</td>*/}
                    {/*            <td>{item.id_code}</td>*/}
                    {/*            <td>{item.numberPhone}</td>*/}
                    {/*            <td>{item.email}</td>*/}
                    {/*            <td>{item.wage}</td>*/}
                    {/*            <td>{item.level}</td>*/}
                    {/*            <td>{item.location}</td>*/}
                    {/*        </tr>*/}
                    {/*    ))*/}
                    {/*) : (*/}
                    {/*    employeeList.map((item, index) => (*/}
                    {/*        <tr key={item.id}>*/}
                    {/*            <td>{index + 1}</td>*/}
                    {/*            <td>{item.firstName}</td>*/}
                    {/*            <td>{item.dateOfBirth}</td>*/}
                    {/*            <td>{item.id_code}</td>*/}
                    {/*            <td>{item.numberPhone}</td>*/}
                    {/*            <td>{item.email}</td>*/}
                    {/*            <td>{item.wage}</td>*/}
                    {/*            <td>{item.level}</td>*/}
                    {/*            <td>{item.location}</td>*/}
                    {/*            <td>*/}
                    {/*                <Link to={`/editEmployee/${item.id}`}>*/}
                    {/*                    <button className="btn btn-success"><SettingsIcon/></button>*/}
                    {/*                </Link>*/}
                    {/*            </td>*/}
                    {/*            <td>*/}
                    {/*                <Link to="">*/}
                    {/*                    <button onClick={() => handleShow(item)} className="btn btn-danger">*/}
                    {/*                        <DeleteForeverIcon/></button>*/}
                    {/*                </Link>*/}
                    {/*            </td>*/}
                    {/*        </tr>*/}
                    {/*    ))*/}
                    {/*)}*/}
                    {employeeList.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.firstName}</td>
                            <td>{item.dateOfBirth}</td>
                            <td>{item.id_code}</td>
                            <td>{item.numberPhone}</td>
                            <td>{item.email}</td>
                            <td>{item.wage}</td>
                            <td>{item.level}</td>
                            <td>{item.location}</td>
                            <td>
                                <Link to={`/editEmployee/${item.id}`}>
                                    <button className="btn btn-success"><SettingsIcon/></button>
                                </Link>
                            </td>
                            <td>
                                <Link to="">
                                    <button onClick={() => handleShow(item)} className="btn btn-danger">
                                        <DeleteForeverIcon/></button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <ReactPaginate
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
                <br/>
            </div>
            <Footer/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xóa </Modal.Title>
                </Modal.Header>
                <Modal.Body>{employeeDelete && `Bạn chắc chắn muốn xóa ${employeeDelete.firstName}`} </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Employee;