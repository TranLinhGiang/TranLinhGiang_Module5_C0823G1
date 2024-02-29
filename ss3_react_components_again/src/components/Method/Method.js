import axios from "axios";
export const getAllConstPosts = async (page, perPage) => {
  try {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    const rs = await axios.get(`http://localhost:8080/blogList`);

    const total = rs.data.length;
    const total_pages = Math.ceil(total / perPage);

    // Lấy chỉ số của dữ liệu từ startIndex đến endIndex
    const data = rs.data.slice(startIndex, endIndex);

    return {data, total, total_pages};
} catch (e) {
    console.error('Error:', e);
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
export const getEditConstPosts = async ({ id }) => {
  try {
    let rs = await axios.get(`http://localhost:8080/blogList/${id}`);
    return rs.data;
  } catch (e) {
    return undefined;
  }
};
export const editConstPosts = async (task) => {
  try {
    let rs = await axios.put(`http://localhost:8080/blogList/${task.id}`, task);
    return rs.data;
  } catch (e) {
    return undefined;
  }
};
export const deleteConstPosts = async (constPosts) => {
  try {
    let request = await axios.delete(
      `http://localhost:8080/blogList/${constPosts.id}`
    );
    return request.data;
  } catch (e) {
    console.log(e);
  }
};
