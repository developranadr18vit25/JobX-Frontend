import React from 'react'

function CompanyCard() {
    return (
        <div className="w-72 p-5 border rounded-2xl shadow-sm hover:shadow-md transition">

            {/* Logo */}
            <div className="flex justify-center mb-4">
                <img
                    src="https://via.placeholder.com/80"
                    alt="company logo"
                    className="w-16 h-16 object-contain"
                />
            </div>

            {/* Text */}
            <div className="text-center mb-4">
                <h2 className="text-lg font-semibold">Google</h2>
                <p className="text-sm text-gray-500">Software Engineering Jobs</p>
            </div>

            {/* Button */}
            <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                View Jobs
                <span>→</span>
            </button>

        </div>
    )
}

export default CompanyCard
