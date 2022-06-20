import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Mobile/Home/Home';
import About from './pages/Mobile/About/About';
import Services from './pages/Mobile/Services/Services';
import 'animate.css';
import MobHomeTwo from './pages/Mobile/Home/MobHomeTwo';
import MobHomeThree from './pages/Mobile/Home/MobHomeThree';
function App() {

  return (
    <div className="App bg-[#EFEFEF] ">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/home2" element={<MobHomeTwo />} />
        <Route path="/home3" element={<MobHomeThree />} />
      </Routes>
    </div>
  );
}

export default App;
