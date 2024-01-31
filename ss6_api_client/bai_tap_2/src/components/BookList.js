import React, {useEffect, useState} from "react";
import {getAllBook} from "../service/BookListService";
import {Link} from "react-router-dom";


function BookList() {
    const [book , setBook]= useState([])

    const getAll= async () =>{
        let data= await getAllBook()
        console.log(data)
        setBook(data)
    }
    useEffect(()=>{
        getAll()
    },[])


    return (
        <>
                    <h1>Library</h1>
            <Link to="/createBook" >
                <button className="btn btn-success">Thêm mới</button>
            </Link>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Stt</th>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            book.map((books, index) =>(
                                <tr key={books.id}>
                                    <td>{index +1}</td>
                                    <td>{books.title}</td>
                                    <td>{books.quantity}</td>
                                    <td>
                                        <Link to={`/editBook/${books.id}`}>
                                            <button className="btn btn-success">Chỉnh sửa</button>
                                        </Link>

                                        <button className="btn btn-danger">Xóa</button>
                                    </td>

                                </tr>
                            ))
                        }

                        </tbody>
                    </table>


        </>
    )
}

export default BookList;