import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import AddMovie from "./components/AddMovie";
import Register from "./components/Register";
import Login from "./components/Login";
import TopBar from "./components/TopBar";
import Portal from "./components/Portal";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="addmovie" element={<AddMovie />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
