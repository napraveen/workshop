import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import AddMovie from './components/AddMovie';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Register /> */}
    </div>
  );
}

export default App;
