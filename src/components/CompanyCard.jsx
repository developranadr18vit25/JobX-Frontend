import React from 'react'

function CompanyCard({companyLink,title}) {
    return (
        <div className="w-72 p-5 border rounded-2xl shadow-sm hover:shadow-md transition">

            <div className="flex justify-center mb-4">
                <img
                    src={companyLink}
                    alt="company logo"
                    className="w-16 h-16 object-contain"
                />
            </div>

            <div className="text-center mb-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-sm text-gray-500">Software Engineering Jobs</p>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                View Jobs
                <span>→</span>
            </button>

        </div>
    )
}

export default CompanyCard
