import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from "./components/BookList";
import React from "react";
import {Routes, Route} from "react-router-dom";
import CreateBook from "./components/CreateBook";
import EditBooks from "./components/EditBook";

function App() {
    return (
            <Routes>
                <Route path={"/"} element={<BookList/>}></Route>
                <Route path={"/createBook"} element={<CreateBook/>}></Route>
                <Route path={"/editBook/:id"} element={<EditBooks/>}/>

            </Routes>

    );
}
export default App;
