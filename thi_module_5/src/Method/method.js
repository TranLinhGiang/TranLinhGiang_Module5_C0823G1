import axios from "axios";

export const getAllSpotifyList = async () => {
    try {
        let rs = await axios.get("http://localhost:8080/spotifyList")
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const createSpotify = async (spotify) => {
    try {
        let rs = await axios.post("http://localhost:8080/spotifyList", spotify)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const getEditSpotify = async ({id}) => {
    try {
        let rs = await axios.get(`http://localhost:8080/spotifyList/${id}`)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const editSpotify = async (spotify) => {
    try {
        let rs = await axios.put(`http://localhost:8080/spotifyList/${spotify.id}`, spotify)
        return rs.data
    } catch (e) {
        return undefined
    }
}
export const deleteSpotify = async (spotify) => {
    try {
        let rs = await axios.delete(`http://localhost:8080/spotifyList/${spotify.id}`)
        return rs.data
    } catch (e) {
        return undefined
    }
}