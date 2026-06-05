import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomeBody from './components/HomeBody';
import CategoryCard from './components/CategoryCard';
import SignUpCard from './components/SignUpCard';
import UserLoginCard from './components/UserLoginCard';
import DisplayBody from './components/DisplayBody';
import JobDetail from './components/JobDetail';
import JobApplication from './components/JobApplication';
import AppliedJobs from './components/AppliedJobs';
import RecruiterLoginCard from './components/RecruiterLoginCard';


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
            <Route path ="/jobs/:JobId/Application" element={<JobApplication />} />
            <Route path="/jobs/applied" element={<AppliedJobs />} />
            <Route path="/login/recruit" element={<UserLoginCard />} />
            <Route path="/registration/createAccount/recruit" element={<SignUpCard />} />


          </Routes>
        </Router>
      </div>

    </>
  )
}

export default App
