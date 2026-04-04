import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className="relative min-h-screen">
        
        <div className="fixed inset-0 bg-purple-900 -z-10"></div>

        <Router>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={} /> */}
          </Routes>
        </Router>
      </div>

    </>
  )
}

export default App
