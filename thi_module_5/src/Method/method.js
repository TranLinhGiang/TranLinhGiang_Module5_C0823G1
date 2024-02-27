import axios from "axios";

export const getAllClothingList = async () => {
    try {
        let rs = await axios.get("http://localhost:8080/api-clothing");
        return rs.data
    } catch (e) {
        return undefined
    }
}
    export const getEditClothing = async ({id}) => {
    try {
        let rs = await axios.get(`http://localhost:8080/api-clothing/${id}`)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const editClothing = async (clothing) => {
    try {
        let rs = await axios.put(`http://localhost:8080/clothingList/${clothing.id}`, clothing)
        return rs.data
    } catch (e) {
        return undefined
    }
}