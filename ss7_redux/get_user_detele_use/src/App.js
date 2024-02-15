import { BrowserRouter } from "react-router-dom";
import './App.css';
import React from "react";
import {Routes, Route} from "react-router";
import UserList from "./components/UserList";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUser from "./components/CreateUser";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditUser from "./components/EditUser";
function App() {
  return (
      <>
    <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<UserList/>}></Route>
          <Route path={"/create"} element={<CreateUser/>}></Route>
          <Route path="/editUser/:id" element={<EditUser/>}></Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  );
}

export default App;
