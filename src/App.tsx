import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Auth from './pages/Auth';
import { usePuterStore } from './puter';
import { useEffect } from 'react';
import Upload from './pages/Upload';

function App() {
  const {init}=usePuterStore()
  useEffect(()=>{
    init()
  },[init])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/upload" element={<Upload/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
