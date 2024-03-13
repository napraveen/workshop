import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import AddMovie from "./components/AddMovie";
import Register from "./components/Register";
import Login from "./components/Login";
import TopBar from "./components/TopBar";
import Portal from "./components/Portal";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Movie from "./components/Movie";
import Paper from "@mui/material/Paper";
import MovieList from "./components/MovieList";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Paper style={{ minHeight: "100vh", borderRadius: "0%" }} elevation={9}>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/portal"
              element={<Portal mode={mode} setMode={setMode} />}
            >
              <Route path="addmovie" element={<AddMovie />} />
              <Route path="home" element={<Home />} />
              <Route path="movie" element={<MovieList />} />
              {/* <Route path="movie" element={<Movie />} /> */}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
