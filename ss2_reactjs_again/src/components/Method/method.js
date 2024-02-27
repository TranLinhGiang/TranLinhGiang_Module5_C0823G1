import axios from "axios";
export const getAllConstPosts = async () => {
  try {
    let rs = await axios.get("http://localhost:8080/constposts");
    return rs.data;
  } catch (e) {
    return undefined;
  }
};
