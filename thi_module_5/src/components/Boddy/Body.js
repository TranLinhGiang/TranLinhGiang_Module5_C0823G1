import {Table} from "@mui/material";
import "./Body.css";
import React, {useEffect, useState} from "react";
import * as method from "../../Method/method";
import {Link} from 'react-router-dom';
function Body() {
    const [clothingList, setClothingList] = useState([]);
    useEffect(() => {
        const getAll = async () => {
            let data = await method.getAllClothingList();
            setClothingList(data);
        }
        getAll();
    }, []);


    const sortClothing= async ()=>{
        try {
            let sortedClothing = await method.getAllClothingList();
            sortedClothing.sort((a, b) => a.counts - b.counts); // Sắp xếp theo wage
            setClothingList(sortedClothing);
        } catch (error) {
            console.error("Lỗi khi sắp xếp:", error);
        }
    }
    return (
        <>
            <h1>Danh sách Clothing</h1>
            <button onClick={sortClothing} >Sắp xếp số lượng tăng dần</button>
            <button className={"margin"}>Thêm mới</button>
            <input/><button>Tìm kiếm</button>
            <Table className={"table"}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Ngày nhập</th>
                    <th>Số lượng</th>
                    <th>Loại sản phẩm</th>
                    <th>Chi tiết</th>
                    <th>Chỉnh sửa</th>
                    <th>Xóa</th>
                </tr>
                </thead>
                <tbody>
                {clothingList.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.productName}</td>
                        <td>{item.date}</td>
                        <td>{item.counts}</td>
                        <td>{item.productType.productTypeName}</td>
                        <td>
                            <button>Chi tiết</button>
                        </td>
                        <td>
                            <Link to={`/editClothing/${item.id}`}>
                                <button>Chỉnh sửa</button>
                            </Link>
                        </td>
                        <td>
                            <button>Xóa</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    )
}

export default Body;