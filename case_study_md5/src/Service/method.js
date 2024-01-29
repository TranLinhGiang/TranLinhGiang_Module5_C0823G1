import axios from "axios";
export const getAllEmployeeList= async () => {
    try {
        let rs = await axios.get("http://localhost:8080/employeeList")
        return rs.data
    }catch (e){
        return undefined
    }
}