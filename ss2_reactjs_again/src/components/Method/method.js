import axios from "axios";
export const getAllConstPosts = async () => {
  try {
    let rs = await axios.get("http://localhost:8080/constposts");
    return rs.data;
  } catch (e) {
    return undefined;
  }
};

export const createConstPosts = async (task) => {
  try {
    let rs = await axios.post("http://localhost:8080/constposts", task);
    return rs.data;
  } catch (e) {
    return undefined;
  }
};
export const getEditConstPosts = async ({ id }) => {
  try {
    let rs = await axios.get(`http://localhost:8080/constposts/${id}`);
    return rs.data;
  } catch (e) {
    return undefined;
  }
};
export const editConstPosts = async (task) => {
  try {
    let rs = await axios.put(
      `http://localhost:8080/constposts/${task.id}`,
      task
    );
    return rs.data;
  } catch (e) {
    return undefined;
  }
};

export const deleteConstPosts = async (constPosts) => {
  try {
    let request = await axios.delete(
      `http://localhost:8080/constposts/${constPosts.id}`
    );
    return request.data;
  } catch (e) {
    console.log(e);
  }
};
