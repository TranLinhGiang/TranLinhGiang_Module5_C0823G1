import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Program from "./components/Program/Program";
import Create from "./components/Body/Create";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Program />}></Route>
          <Route path="create" element={<Create />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
