import React from 'react'
import { Link } from 'react-router-dom'

function RecruiterSideBarView() {
    return (
        <aside className="fixed top-[10%] left-[2%] z-40 w-80 h-[90vh] overflow-y-auto rounded-2xl
        bg-linear-to-b from-white via-gray-50 to-white
        border border-gray-200 shadow-2xl backdrop-blur-xl">

            
            <div className="px-5 py-5 border-b bg-white/60 backdrop-blur-md rounded-t-2xl">
                <h1 className="text-lg font-semibold text-gray-800">🏢 Recruiter Panel</h1>
                <p className="text-xs text-gray-500">Manage hiring workflow</p>
            </div>

            <div className="p-4 space-y-4">

        
                <div className="rounded-xl border bg-white shadow-sm p-3 space-y-1">

                    <Link to="/" className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium transition">
                        Dashboard
                    </Link>

                    <Link to="/jobs" className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium transition">
                        Post a Job
                    </Link>

                    <Link to="#" className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium transition">
                        Manage Jobs
                    </Link>

                    <Link to="/jobs/applied" className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium transition">
                        All Applications
                    </Link>

                    <Link to="/jobs/applied" className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium transition">
                        Shortlisted Candidates
                    </Link>

                    <Link to="/jobs/applied" className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium transition">
                        Hired Candidates
                    </Link>
                </div>

                <div className="rounded-xl border bg-white shadow-sm p-4 space-y-2">

                    <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Company
                    </h2>

                    <Link to="#" className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm transition">
                        Company Profile
                    </Link>
                </div>

                {/* TOOLS SECTION */}
                <div className="rounded-xl border bg-white shadow-sm p-4 space-y-2">

                    <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Tools
                    </h2>

                    <Link to="#" className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm transition">
                        Talent Search
                    </Link>

                    <Link to="#" className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm transition">
                        Resume Search
                    </Link>
                </div>

              
                <div className="rounded-xl bg-black text-white p-4 shadow-lg">
                    <h2 className="text-xs uppercase tracking-wider text-gray-300 mb-3">
                        Hiring Overview
                    </h2>

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-300">Active Jobs</span>
                            <span className="font-semibold">—</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-300">Applications</span>
                            <span className="font-semibold">—</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-300">Hired</span>
                            <span className="font-semibold">—</span>
                        </div>
                    </div>
                </div>

            </div>
        </aside>
    )
}

export default RecruiterSideBarView