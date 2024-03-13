import React from "react";
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
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="addmovie" element={<AddMovie />} />
          <Route path="home" element={<Home />} />
          <Route path="movie" element={<MovieList />} />
          {/* <Route path="movie" element={<Movie />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
