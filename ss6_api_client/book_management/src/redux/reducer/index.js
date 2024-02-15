import {combineReducers} from "redux";
import bookReducer from "./book";
export const rootReducer = combineReducers({
    books : bookReducer
})