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
          className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                {applicant.Name}
              </h2>

              <p className="text-sm text-gray-500">
                Age: {applicant.Age || "Not provided"}
              </p>
            </div>

            <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              {applicant.Experience} Yrs Exp
            </div>
          </div>

          <div className="mt-3">
            <div className="flex flex-wrap gap-2">
              {applicant.Skills?.map((skill, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs bg-gray-100 text-gray-700 rounded-full border border-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-3 text-sm text-gray-600">
            <span className="font-medium text-gray-800">
              Qualification:
            </span>{" "}
            {applicant.Qualification?.[0]?.Graduation}
            {applicant.Qualification?.[0]?.Postgraduation &&
              ` • ${applicant.Qualification?.[0]?.Postgraduation}`}
          </div>

          <div className="mt-4 flex justify-end">
            <button className="px-4 py-1.5 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition">
              Shortlist
            </button>
          </div>
        </div>
      ))}

    </div>
  );
}

export default ApplicantDetailCard;