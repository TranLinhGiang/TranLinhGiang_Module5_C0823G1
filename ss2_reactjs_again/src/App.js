import "./App.css";
import Blog from "./components/Blog/blog";
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Blog/Create";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Edit from "./components/Blog/Edit";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Blog />}></Route>
          <Route path={"create"} element={<Create />}></Route>
          <Route path={"/edit/:id"} element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
