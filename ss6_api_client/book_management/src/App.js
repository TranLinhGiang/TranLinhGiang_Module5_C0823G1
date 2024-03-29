import {Provider} from "react-redux";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import BookList from "./components/BookList";
import CreateBook from "./components/CreateBook";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import EditBook from "./components/EditBook";
import store from "./redux/store";

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<BookList/>}></Route>
                        <Route path="/createBook" element={<CreateBook/>}></Route>
                        <Route path="/editBook/:id" element={<EditBook/>}></Route>
                    </Routes>
                </BrowserRouter>
                <ToastContainer/>
            </Provider>
        </>
    );
}

export default App;
