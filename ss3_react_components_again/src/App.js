import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify" ;
 import 'react-toastify/dist/ReactToastify.css' 
import "./App.css";
import Program from "./components/Program/Program";
import Create from "./components/Body/Create";
import Edit from "./components/Body/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Program />}></Route>
          <Route path="create" element={<Create />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
