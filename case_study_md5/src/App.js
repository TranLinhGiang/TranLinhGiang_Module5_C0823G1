import './App.css';
import {
    BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Home from "./components/Home/Home";
import React from "react";
import Contact from "./components/Contract/Contact";
import Service from "./components/Service/Service";
import Customer from "./components/Employee/Customer";
import CreateContact from './components/Contract/CraeteContact';
import CreateService from './components/Service/CreateService';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"contactList"} element={<Contact/>}></Route>
                <Route path={"serviceList"} element={<Service/>}></Route>
                <Route path={"customerList"} element={<Customer/>}></Route>
                <Route path={"createContact"} element={<CreateContact/>}></Route>
                <Route path={"createService"} element={<CreateService/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
