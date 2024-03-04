import axios from "axios";
export const getAllSpotify = async (page, perPage) => {
  try {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    let rs = await axios.get("http://localhost:8080/spotify");
    const total = rs.data.length;
    const total_pages = Math.ceil(total / perPage);
    const data = rs.data.slice(startIndex, endIndex);
    return { data, total, total_pages };
  } catch (e) {
    return undefined;
  }
};
export const createSpotify = async (task) => {
  try {
    let rs = await axios.post("http://localhost:8080/spotify", task);
    return rs.data;
  } catch (e) {
    return undefined;
  }
};
export const getEditSpotify = async ({ id }) => {
  try {
    let rs = await axios.get(`http://localhost:8080/spotify/${id}`);
    return rs.data;
  } catch (e) {
    return undefined;
  }
};
export const editSpotify = async (task) => {
  try {
    let rs = await axios.put(`http://localhost:8080/spotify/${task.id}`, task);
    return rs.data;
  } catch (e) {
    return undefined;
  }
};
export const deleteSpotify = async (task) => {
  try {
    let request = await axios.delete(
      `http://localhost:8080/spotify/${task.id}`
    );
    return request.data;
  } catch (e) {
    console.log(e);
  }
};
