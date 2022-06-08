import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Mobile/Home/Home';
import About from './pages/Mobile/About/About';
import Services from './pages/Mobile/Services/Services';

function App() {

  return (
    <div className="App bg-[#EFEFEF] cont">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
