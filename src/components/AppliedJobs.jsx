import React from 'react'
import api from "../api/getData"

function AppliedJobs() {

    return (
        <div className='h-80 w-[90%] ml-[6%] mt-[3%] bg-slate-100 pt-[2%] pl-[3%] flex flex-row '>

            <div className='bg-blue-300 h-32 w-[20%] pt-4 mr-[3%] text-xl text-center border-2 rounded-2xl'>Total Applications {}</div>
            <div className='h-32 w-[20%] bg-yellow-300  pt-4 mr-[3%] text-xl text-center border-2 rounded-2xl'>Pending</div>
            <div className='h-32 w-[20%] bg-green-400 pt-4 mr-[3%] text-xl text-center border-2 rounded-2xl'>Shortlisted</div>
            <div className='h-32 w-[20%] bg-red-500 pt-4 mr-[3%] text-xl text-center border-2 rounded-2xl'>Rejected</div>

        </div>
    )
}

export default AppliedJobs
