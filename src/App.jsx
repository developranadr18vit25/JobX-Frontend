import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomeBody from './components/HomeBody';
import CategoryCard from './components/CategoryCard';

function App() {
  return (
    <>
      <div className="relative min-h-screen">
        
        <div className="fixed inset-0 bg-slate-100 -z-10 min-h-screen"></div>

        <Router>
          <Navbar />
          {/* <Body /> */}

          <Routes>
            <Route path="/" element={<HomeBody />} />
          </Routes>
        </Router>
      </div>

    </>
  )
}

export default App
