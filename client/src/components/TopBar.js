import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar"; // Importing AppBar
import { useNavigate } from "react-router-dom";
export default function TopBar() {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/portal/home")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/portal/addmovie")}>
            Add Movie
          </Button>
          <Button color="inherit" onClick={() => navigate("/portal/movie")}>
            Movies
          </Button>
          <Button
            style={{ marginLeft: "auto" }}
            color="inherit"
            onClick={() => navigate("/")}
          >
            Logout
          </Button>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
