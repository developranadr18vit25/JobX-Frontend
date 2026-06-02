import React from 'react'

function AppliedJobCard({title,company,date,status,jobType,location}) {

  
  return (
    <div className="w-[60%] bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition ml-[20%]">

      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-500 text-sm">{company} • {location}</p>
        </div>

        <span className=" px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
          {status}
        </span>

      </div>

      <div className="mt-3 text-sm text-gray-600">
        Applied on: {date}
      </div>

      <div className="mt-4 flex gap-3">

        <button className="px-10 py-2 text-sm border rounded-lg hover:bg-gray-100">
          View Job
        </button>

      </div>
    </div>
  )
}

export default AppliedJobCard