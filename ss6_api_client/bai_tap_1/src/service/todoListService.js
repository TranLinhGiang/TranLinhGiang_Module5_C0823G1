import axios from "axios";

export const getAllToDo = async () => {
    try {
        let res = await axios.get("http://localhost:8080/todoList");
        return res.data;
    } catch (e) {
        return undefined;
    }
}
export const addTodo = async (task) => {
    try {
        await axios.post("http://localhost:8080/todoList", task)
        return true
    } catch (e) {
        return false;
    }
}