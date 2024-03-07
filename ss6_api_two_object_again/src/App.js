import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BodyBlog from "./components/Body/BodyBlog";
import BlogList from "./components/Blog/BlogList";
import CreateBlog from "./components/Blog/BlogCreate";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit from "./components/Blog/BlogEdit";
function App() {
  return <>


  <BrowserRouter>
  <Routes>
    <Route path="/" element={<BodyBlog/>}></Route>
    <Route path="/list" element={<BlogList/>}></Route>
    <Route path="/create" element={<CreateBlog/>}></Route>
    <Route path='/edit/:id' element={<Edit/>}></Route>
  </Routes>
  </BrowserRouter>
  <ToastContainer></ToastContainer>
  </>;
}

export default App;
