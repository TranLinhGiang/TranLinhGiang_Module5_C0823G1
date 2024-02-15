import axios from "axios";
export const getAll = async ()=>{
    try {
        let response= await axios.get("http://localhost:8000/userList");
        return response.data;
    }catch (e) {
        console.log(e)
    }
}
export const save = async (task)=>{
    try {
        let response= await axios.post("http://localhost:8000/userList", task);
        return response.data;
    }catch (e) {
        console.log(e)
    }
}
export const getUserById = async ({id})=>{
    try {
        let response= await axios.get(`http://localhost:8000/userList/${id}`);
        return response.data;
    }catch (e) {
        console.log(e)
    }
}
export const editUser = async (task)=>{
    try {
        let response= await axios.put(`http://localhost:8000/userList/${task.id}`, task);
        return response.data;
    }catch (e) {
        console.log(e)
    }
}

export const getDeleteById = async ({id})=>{
    try {
        let response= await axios.put(`http://localhost:8000/userList/${id}`);
        return response.data;
    }catch (e) {
        console.log(e)
    }
}
export const deleteUser = async (task)=>{
    try {
        let response= await axios.delete(`http://localhost:8000/userList/${task.id}`);
        return response.data;
    }catch (e) {
        console.log(e)
    }
}
