import axios from "axios";

export const getBookById= async  ({id})=>{
    try {
        const res= await axios.get(`http://localhost:8080/book/${id}`)
        return res.data
    }catch (e) {
        return false
    }
}
export const EditBook = async(task) =>{
    try {
        await axios.put("http://localhost:8080/book", task)
    }catch (e) {
        return false
    }
}