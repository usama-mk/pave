import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import { useState } from 'react';
import MobHomeTwo from './pages/Home/MobHomeTwo';

function App() {

  return (
    <div className="App bg-[#EFEFEF] cont">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-z" element={<MobHomeTwo />} />
      </Routes>
    </div>
  );
}

export default App;
