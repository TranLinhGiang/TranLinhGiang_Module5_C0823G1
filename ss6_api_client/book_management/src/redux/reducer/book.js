import {CREATE_BOOK, GET_ALL_BOOK} from "../action/types";

const initialState = []
const bookReducer= (books =initialState, action)=>{
const {type, payload}= action
    switch(type){
        case GET_ALL_BOOK :
            return payload;
        case CREATE_BOOK:
            return [payload,...books]
        default:
            return books;
    }
}
export default bookReducer;