import React from 'react'
import { Link } from 'react-router-dom'
import api from "../api/getData"
import { useState } from 'react';
import { useEffect } from 'react';

function JobCard({ Role, role ,CompanyName, Location, JobType, Experience, JobId, ApplicantCount }) {

    const [Count, setCount] = useState(0);
    const jobid = JobId;

    // useEffect(() => {

    //     const handleApplicants = async () => {
    //         const res = await api.getJobApplicants(jobid);
    //         console.log(res.data);

    //         setCount(res.data.Applicants.length);
    //     }

    //     handleApplicants();

    // },[jobid]);


    return (
        <div className="group relative bg-white border border-gray-200 rounded-2xl p-6
        shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

            {/* subtle glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition
            bg-linear-to-r from-blue-50 via-transparent to-purple-50 pointer-events-none"></div>

            <div className="relative">

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-black">
                    {Role}
                </h2>

                {
                    role == "Recruiter" &&
                        <div className="flex justify-end">
                            <div className="bg-blue-300 p-2">
                                {ApplicantCount} Applicants
                            </div>
                        </div>
                }



                {/* Company */}
                <p className="text-sm text-gray-600 mt-1">
                    {CompanyName}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">

                    <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                        📍 {Location}
                    </span>

                    <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600">
                        {JobType}
                    </span>

                    <span className="text-xs px-3 py-1 rounded-full bg-green-50 text-green-600">
                        {Experience} yrs experience
                    </span>

                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-6">

                    <span className="text-xs text-gray-400">
                        Posted recently
                    </span>

                    {Role == "Applicant" ?

                        <Link
                            to={`/jobs/${JobId}`}
                            className="px-4 py-2 rounded-xl bg-black text-white text-sm font-medium
                        hover:bg-gray-800 transition flex items-center gap-2"
                        >
                            View Job
                            <span className="group-hover:translate-x-1 transition">→</span>
                        </Link> :

                        <Link
                            to={`/jobs/${JobId}/applicantDetails`}
                            className="px-4 py-2 rounded-xl bg-black text-white text-sm font-medium
                        hover:bg-gray-800 transition flex items-center gap-2"
                        >
                            Manage Job
                            <span className="group-hover:translate-x-1 transition">→</span>
                        </Link>

                    }

                </div>

            </div>
        </div>
    )
}

export default JobCard