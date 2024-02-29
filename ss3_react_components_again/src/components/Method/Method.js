import axios from "axios";
export const getAllConstPosts = async () => {
  try {
    let rs = await axios.get("http://localhost:8080/blogList");
    return rs.data;
  } catch (e) {
    return undefined;
  }
};
export const createConstPosts = async (task) => {
    try {
      let rs = await axios.post("http://localhost:8080/blogList", task);
      return rs.data;
    } catch (e) {
      return undefined;
    }
  };