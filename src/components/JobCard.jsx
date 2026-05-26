import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function JobCard({Role, CompanyName, Location , JobType , Experience , JobId}) {

    const navigate=useNavigate();
    return (

        <div className=" bg-white bg-neutral-primary-soft block w-[70%] h-[35%] mt-[3%] p-6 border-2  rounded-4xl rounded-base shadow-xs">
            <h5 className="mb-1 text-2xl font-semibold tracking-tight text-heading leading-8">{Role}</h5>
            <p className="text-body mb-2">{CompanyName}</p>
            <p className="text-body mb-2">Location: {Location}</p>
            <p className="text-body mb-2">JobType: {JobType}</p>
            <p className="text-body mb-2">Experience: {Experience} years</p>

            
            <Link to={`/jobs/${JobId}`} className=" bg-blue-600 inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                Read more
                <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
            </Link>
        </div>


    )
}

export default JobCard
