import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App bg-[#EFEFEF]">
    <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
