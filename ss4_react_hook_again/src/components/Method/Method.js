import axios from 'axios'
export const getAllSpotify = async () => {
    try {
      let rs = await axios.get("http://localhost:8080/spotify");
      return rs.data;
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
      let rs = await axios.put(
        `http://localhost:8080/spotify/${task.id}`,
        task
      );
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