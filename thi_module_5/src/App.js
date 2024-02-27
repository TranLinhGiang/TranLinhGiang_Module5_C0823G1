import './App.css';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Edit from "./components/Boddy/Edit";
import Ap from './components/AppMd5/Ap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Ap/>}></Route>
                    <Route path={`editClothing/:id`} element={<Edit/>}></Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer/>
        </>
    );
}

export default App;
