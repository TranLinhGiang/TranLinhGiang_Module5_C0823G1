import bookService from "../../service/bookService";
import {GET_ALL_BOOK} from "./types"
import {CREATE_BOOK} from "./types"
export const getAllBookList = () => async (dispatch) =>{
    try {
        const res = await bookService.getAllBookList()
        dispatch({
            type:'GET_ALL_BOOK',
            payload: res.data
        })
    }catch (e) {
        console.log(e)
    }
}

export const createBook = (book) => async (dispatch) =>{
    try {
        const res = await bookService.save(book);
        dispatch({
            type:'CREATE_BOOK',
            payload: res.data
        })
    }catch (e) {
        console.log(e)
    }
}