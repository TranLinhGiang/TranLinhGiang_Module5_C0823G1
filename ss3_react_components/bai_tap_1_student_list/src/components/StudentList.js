import Table from 'react-bootstrap/Table';
const student=[
    {
        id:1,
        name: "Nguyễn Văn A",
        age:18,
        address:"Quảng Bình"
    },
    {
        id:2,
        name:"Nguyễn Văn B",
        age:20,
        address:"Đà Nẵng"
    },
    {
        id:3,
        name:"Nguyễn Văn C",
        age:21,
        address:"Hà Nội"
    },
    {
        id:4,
        name:"Nguyễn Văn C",
        age:22,
        address:"TP<Hồ Chí Minh"
    }
]
function StudentList(){  
    return(
        <>
        <Table striped bordered hover>
            <tr>     
                <th>Stt</th>          
                <th>Id</th>
                <th>Tên</th>
                <th>Tuổi</th>
                <th>Địa chỉ</th>
            </tr>
            {student.map((student,status)=>(
                <tr key={student.id}>
                    <td>{status+1}</td>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.address}</td>
                </tr>
            )
            )}
        </Table>
        </>
    )
}
export default StudentList;