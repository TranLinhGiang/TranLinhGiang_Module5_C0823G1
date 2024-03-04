import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SortIcon from "@mui/icons-material/Sort";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link, NavLink } from "react-router-dom";
function Sideba() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <NavLink to={"/"} className="button-sideba">
          <Button style={{ color: "white" }}>
            <ModeStandbyIcon className="icon" /> <h6>Khám phá </h6>
          </Button>
        </NavLink>
      </Stack>
      <hr />
      <Stack direction="row" spacing={2}>
        <Link to={"/list"} className="button-sideba">
          <Button style={{ color: "white" }}>
            <LibraryMusicIcon className="icon" /> <h6>Thư viện nhạc</h6>
          </Button>
        </Link>
      </Stack>
      <hr />
      <Stack direction="row" spacing={2}>
        <Link to={"/create"} className="button-sideba">
          <Button style={{ color: "white" }}>
            <PostAddIcon className="icon" /> <h6>Thêm nhạc</h6>
          </Button>
        </Link>
      </Stack>
      <hr />
      <Stack direction="row" spacing={2}>
        <Link className="button-sideba">
          <Button style={{ color: "white" }}>
            <SortIcon className="icon" />
            <h6> Bảng xếp hạng</h6>
          </Button>
        </Link>
      </Stack>
    </>
  );
}
export default Sideba;
