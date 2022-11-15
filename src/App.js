import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Main from './Main';
import DeretAngka from './components/DeretAngka';
import Fibonaci from './components/Fibonaci';
import Perulangan from './components/Perulangan';
import Terbilang from './components/Terbilang';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<Main/>} />
        <Route path="/deretAngka" element={<DeretAngka/>} />
        <Route path="/fibonaci" element={<Fibonaci/>} />
        <Route path="/perulangan" element={<Perulangan/>} />
        <Route path="/terbilang" element={<Terbilang/>} />
      </Routes>
    </Router>
  );
}

export default App;
