import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { filterJobType, filterExperience, filterSalary, filterSkills } from '../hooks/sideBarFilters'

function UserSideBarView() {

    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);

    return (
        <aside className="fixed top-[10%] left-[2%] z-40 w-80 h-[90vh] overflow-y-auto rounded-2xl
        bg-linear-to-b from-white via-gray-50 to-white
        border border-gray-200 shadow-2xl backdrop-blur-xl">

        
            <div className="px-5 py-5 border-b bg-white/60 backdrop-blur-md rounded-t-2xl">
                <h1 className="text-lg font-semibold text-gray-800 tracking-tight">🎯 Job Filters</h1>
                <p className="text-xs text-gray-500">Refine your opportunities</p>
            </div>

            <div className="p-4 space-y-5">

       
                <div className="rounded-xl bg-white shadow-sm border p-3 space-y-1">
                    <Link to="/" className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium transition">Dashboard</Link>
                    <Link to="/jobs" className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium transition">Browse Jobs</Link>

                    <Link to="#" className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium transition">
                        Internships
                        <span className="text-[10px] px-2 py-0.5 bg-black text-white rounded-full">PRO</span>
                    </Link>

                    <Link to="/jobs/applied" className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium transition">
                        Track Applications
                    </Link>
                </div>

 
                <div className="space-y-4">

            
                    <div className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition">
                        <h2 className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wider">Job Type</h2>

                        <div className="space-y-2">
                            {["Remote", "Hybrid", "OnSite"].map(type => (
                                <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="jobType"
                                        value={type}
                                        checked={params.get("JobType") === type}
                                        onChange={(e) => filterJobType(e.target.value, navigate, location)}
                                        className="accent-black scale-110"
                                    />
                                    <span className="text-sm text-gray-700 group-hover:text-black transition">
                                        {type}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    
                    <div className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition">
                        <h2 className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wider">Experience</h2>

                        <div className="space-y-2">
                            <label className="flex gap-3 items-center cursor-pointer">
                                <input type="radio" name="Experience" className="accent-black" checked={params.get("minExp") === "0"} onChange={() => filterExperience(0, 2, navigate, location)} />
                                <span className="text-sm">0–2 yrs</span>
                            </label>

                            <label className="flex gap-3 items-center cursor-pointer">
                                <input type="radio" name="Experience" className="accent-black" checked={params.get("minExp") === "2"} onChange={() => filterExperience(2, 4, navigate, location)} />
                                <span className="text-sm">2–4 yrs</span>
                            </label>

                            <label className="flex gap-3 items-center cursor-pointer">
                                <input type="radio" name="Experience" className="accent-black" checked={params.get("minExp") === "4"} onChange={() => {
                                    const p = new URLSearchParams(location.search)
                                    p.set("minExp", 4)
                                    navigate(`${window.location.pathname}?${p.toString()}`)
                                }} />
                                <span className="text-sm">4+ yrs</span>
                            </label>
                        </div>
                    </div>

                    
                    <div className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition">
                        <h2 className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wider">Salary</h2>

                        <div className="space-y-2">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" className="accent-black" checked={params.get("minSalary") === "0"} onChange={() => filterSalary(0, 300000)} />
                                <span className="text-sm">0–3 LPA</span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" className="accent-black" checked={params.get("minSalary") === "300000"} onChange={() => filterSalary(300000, 600000, navigate, location)} />
                                <span className="text-sm">3–6 LPA</span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" className="accent-black" checked={params.get("minSalary") === "600000"} onChange={() => filterSalary(600000, 1000000, navigate, location)} />
                                <span className="text-sm">6–10 LPA</span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" className="accent-black" checked={params.get("minSalary") === "1000000"} onChange={() => {
                                    const p = new URLSearchParams(location.search)
                                    p.set("minSalary", 1000000)
                                    p.delete("maxSalary")
                                    navigate(`${window.location.pathname}?${p.toString()}`)
                                }} />
                                <span className="text-sm">10+ LPA</span>
                            </label>
                        </div>
                    </div>

                    <div className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition">
                        <h2 className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wider">Location</h2>

                        <input
                            type="text"
                            placeholder="Gurgaon / Remote / Bangalore"
                            className="w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
                            onChange={(e) => {
                                const p = new URLSearchParams(location.search)
                                if (e.target.value) p.set("location", e.target.value)
                                else p.delete("location")
                                navigate(`${window.location.pathname}?${p.toString()}`)
                            }}
                        />
                    </div>

            
                    <div className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition">
                        <h2 className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wider">Skills</h2>

                        <div className="grid grid-cols-2 gap-2 text-sm">
                            {["React", "NodeJs", "JavaScript", "Tailwind", "Angular"].map(skill => (
                                <label key={skill} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="accent-black"
                                        onChange={(e) => filterSkills(skill, e.target.checked, navigate, location)}
                                    />
                                    <span className="text-gray-700 hover:text-black transition">{skill}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                </div>

        
                <div className="rounded-xl bg-black text-white p-4 shadow-lg">
                    <h2 className="text-xs uppercase tracking-wider text-gray-300 mb-3">Quick Actions</h2>

                    <div className="space-y-2">
                        <Link to="#" className="block px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm transition">
                            Upload Resume
                        </Link>
                        <Link to="#" className="block px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm transition">
                            Track Applications
                        </Link>
                    </div>
                </div>

            </div>
        </aside>
    )
}

export default UserSideBarView