import axios from "axios";

export const addBook= async (task)=>{
    try {
        await axios.post("http://localhost:8080/book", task)
    }catch (e) {
        return false;
    }
}