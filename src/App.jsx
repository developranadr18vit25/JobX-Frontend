import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomeBody from './components/HomeBody';

function App() {
  return (
    <>
      <div className="relative min-h-screen">
        
        <div className="fixed inset-0 bg-slate-100 -z-10 min-h-screen"></div>

        <Router>
          <Navbar />
          {/* <Body /> */}
          <HomeBody />

          <Routes>
            {/* <Route path="/" element={} /> */}
          </Routes>
        </Router>
      </div>

    </>
  )
}

export default App
