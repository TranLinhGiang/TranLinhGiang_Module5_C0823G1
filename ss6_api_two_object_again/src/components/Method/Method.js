import axios from "axios";

export const getAllBlog = async () => {
  try {
    const res = await axios.get("http://localhost:8080/blogList");
    return res.data;
  } catch (e) {
    return e;
  }
};
export const getAllCategory = async () => {
  try {
    const res = await axios.get("http://localhost:8080/category");
    return res.data;
  } catch (e) {
    return e;
  }
};
export const createBlog = async (blog) => {
  try {
    const res = await axios.post(`http://localhost:8080/blogList`, blog);
    return res.data;
  } catch (e) {
    return e;
  }
};

export const editBlog = async (blog) => {
  try {
    const result = await axios.put(
      `http://localhost:8080/blogList/${blog.id}`,
      blog
    );
    return result.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getEditBog = async (id) => {
  const res = await axios.get(`http://localhost:8080/blogList/${id}`);
  return res.data;
};
export const editCategory = async (blog) => {
  try {
    const result = await axios.put(
      `http://localhost:8080/category/${blog.id}`,
      blog
    );
    return result.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getEditCategory = async (id) => {
  const res = await axios.get(`http://localhost:8080/category/${id}`);
  return res.data;
};
