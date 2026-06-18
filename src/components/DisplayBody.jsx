import React, { useState, useEffect } from 'react'
import JobCard from './JobCard'
import api from '../api/getData'
import { Link, useLocation } from "react-router-dom";
import LeftSideBar from './LeftSideBar';

function DisplayBody() {

  const [Jobs, setJobs] = useState([]);
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const role = user?.Role || null;

  const location = useLocation();

  useEffect(() => {

    const fetchAvailableJobs = async () => {

      const params = new URLSearchParams(location.search);

      let res;

      if (role == "Applicant" || role == null) {
        res = await api.getAvailableJobs("?" + params.toString());
      }
      else {
        res = await api.getRecruiterJobs();
      }

      setJobs(res.data.Jobs);
    }

    fetchAvailableJobs();

  }, [location.search])

  useEffect(() => {

    const handleApplicants = async () => {
      const jobIDs = Jobs.map(job => job.JobId);

      const res = await api.getApplicantsCount(jobIDs);
      console.log(res.data);

      // setCount(res.data.Applicants.length);
    }

    handleApplicants();

  }, [Jobs]);



  return (
    <>
      <LeftSideBar role={role} />

      <div className="ml-[28%] mt-[3%] w-[65%] min-h-screen bg-gray-50 px-6 py-6">

        {/* Header */}
        <div className="mb-6">
          {
            role == "Applicant" ? <><h1 className="text-2xl font-semibold text-gray-900">
              Explore Jobs
            </h1>
              <p className="text-sm text-gray-500 mt-1">
                Find roles matching your skills and experience
              </p>
            </>
              :
              <><h1 className="text-2xl font-semibold text-gray-900">
                Job Listings
              </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Manage and view all your job postings
                </p>
              </>
          }


        </div>

        {/* Feed container */}
        <div className="space-y-5">
          {Jobs.map(job => (
            <JobCard
              key={job.JobId}
              Role={job.Title}
              CompanyName={job.Company}
              Location={job.Location}
              JobType={job.JobType}
              Experience={job.Experience}
              JobId={job.JobId}
            />
          ))}
        </div>

      </div>
    </>
  )
}

export default DisplayBody