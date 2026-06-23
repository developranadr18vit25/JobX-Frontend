import React from "react";
import JobCard from "./JobCard";
import { useParams } from "react-router-dom";
import api from "../api/getData";
import { useEffect } from "react";
import { useState } from "react";

function ApplicantDetailCard() {

  const { JobId } = useParams();
  const [Applicants, setApplicants] = useState([]);


  useEffect(() => {

    const getDetails = async () => {

      const res = await api.getApplicantDetails(JobId);

      console.log(res.data.Applicants)

      setApplicants(res.data.Applicants);

      return res;
    }

    getDetails();

  }, []);

  return (
    <div className="space-y-4">

      {Applicants?.map((applicant, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
        >

          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {applicant.Name}
              </h2>
              <p className="text-sm text-gray-600">
                {applicant.Age || "No Age provided"}
              </p>
            </div>

            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
              {applicant.Experience} yrs exp
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {applicant.Skills?.map((skill, i) => (
              <span
                key={i}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-3 text-sm text-gray-600">
            <span className="font-medium text-gray-800">Qualification:</span>{" "}
            {applicant.Qualification?.join(", ")}
          </div>

          <div className="flex justify-between items-center mt-4">

            <button className="px-3 py-1 bg-black text-white text-sm rounded-lg hover:bg-gray-800">
              Shortlist
            </button>

          </div>

        </div>
      ))}

    </div>
  );
}

export default ApplicantDetailCard;