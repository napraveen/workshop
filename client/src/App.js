import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import AddMovie from './components/AddMovie';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <Register /> */}
    </div>
  );
}

export default App;
