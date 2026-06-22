import React from "react";
import JobCard from "./JobCard";

function ApplicantDetailCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">


      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            John Doe
          </h2>
          <p className="text-sm text-gray-600">
            johndoe@gmail.com
          </p>
        </div>

        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
          2 yrs exp
        </span>
      </div>


      <div className="flex flex-wrap gap-2 mt-3">
        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
          React
        </span>
        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
          Node.js
        </span>
        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
          MongoDB
        </span>
      </div>


      <div className="flex justify-between items-center mt-4">

        <a
          href="#"
          className="text-sm text-blue-600 hover:underline"
        >
          View Resume
        </a>

        <button className="px-3 py-1 bg-black text-white text-sm rounded-lg hover:bg-gray-800">
          Shortlist
        </button>

      </div>

    </div>
  );
}

export default ApplicantDetailCard;