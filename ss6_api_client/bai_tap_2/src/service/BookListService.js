import axios from "axios";
export const getAllBook= async () =>{
    try {
      let request = await axios.get("http://localhost:8080/book");
      return request.data
    }catch (e) {
        return undefined;
    }
}