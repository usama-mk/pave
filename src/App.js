import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import { useState } from 'react';

function App() {
  const [home, setHome]= useState(true)
  const [about, setAbout]= useState(false)
  const [services, setServices]= useState(false)
  const [projects, setProjects]= useState(false)
  const [learn, setLearn]= useState(false)
  const [caseStudy, setCaseStudy]= useState(false)
  
  return (
    <div className="App bg-[#EFEFEF]">
    <Routes>
        <Route path="/" element={<Home home={home} />} />
      </Routes>
    </div>
  );
}

export default App;
