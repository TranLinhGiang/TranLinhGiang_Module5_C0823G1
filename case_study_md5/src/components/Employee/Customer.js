import "./Customer.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Customer() {
    return (
        <>
            <Header/>
            <div className="my-container">
                <form className="my-table">
                    <h1>Danh sách khách hàng tại furama</h1>
                    <table className={"table"}>
                        <tr>
                            <th>STT</th>
                            <th>Tên Khách hàng</th>
                            <th>Chỉnh sửa</th>
                            <th>Xóa</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Khách hàng 1</td>
                            <td>
                                <button className={"btn btn-primary"}>Sửa</button>
                            </td>
                            <td>
                                <button className={"btn btn-danger"}>Xóa</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default Customer