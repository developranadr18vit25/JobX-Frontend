import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomeBody from './components/HomeBody';
import CategoryCard from './components/CategoryCard';
import SignUpCard from './components/SignUpCard';
import UserLoginCard from './components/UserLoginCard';
import DisplayBody from './components/DisplayBody';
import JobDetail from './components/JobDetail';


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
            <Route path="/registration/createAccount" element={<SignUpCard />} />
            <Route path="/login" element={<UserLoginCard/>} />
            <Route path="/jobs" element={<DisplayBody />} />
            <Route path="/jobs/:JobId" element={<JobDetail />} />



          </Routes>
        </Router>
      </div>

    </>
  )
}

export default App
