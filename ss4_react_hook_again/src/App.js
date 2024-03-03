import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import SpotifyList from "./components/SpotifyList/SpotifyList";
import CreateSpotify from "./components/SpotifyCreate/SpotifyCreate";
import { ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import EditSpotify from "./components/SpotifyEdit/SpotifyEdit";
import NotFount from "./components/NotFount/NotFount";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/list" element={<SpotifyList/>}></Route>
          <Route path="/create" element={<CreateSpotify/>}></Route>
          <Route path="/edit/:id" element={<EditSpotify/>}></Route>
          <Route path="*" element={<NotFount/>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
