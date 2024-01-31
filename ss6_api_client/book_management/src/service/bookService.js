import axios from "axios";
export const getAllBookList= async ()=>{
    try {
        let request= await axios.get(" http://localhost:8080/bookList")
        return request.data;
    }catch (e) {
        console.log(e)
    }
}
export const save= async (task)=>{
    try {
        let request= await axios.post(" http://localhost:8080/bookList",task)
        return request.data;
    }catch (e) {
        console.log(e)
    }
}
export const edit= async (task)=>{
    try {
        let request= await axios.put(`http://localhost:8080/bookList/${task.id}`,task)
        return request.data;
    }catch (e) {
        console.log(e)
    }
}
export const getById= async ({id})=>{
    try {
        let request= await axios.get(`http://localhost:8080/bookList/${id}`)
        return request.data;
    }catch (e) {
        console.log(e)
    }
}
export const deletes = async (task)=>{
    try {
        let request= await axios.delete(`http://localhost:8080/bookList/${task.id}`)
        return request.data;
    }catch (e) {
        console.log(e)
    }
}