import './App.css';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Ap from './components/AppMd5/Ap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from "./components/Boddy/Create";
import React from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditSpotify from "./components/Boddy/EditSpotify";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Ap/>}></Route>
                    <Route path="/createSpotify" element={<Create/>}></Route>
                    <Route path="/editSpotify/:id" element={<EditSpotify/>}></Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
}

export default App;
