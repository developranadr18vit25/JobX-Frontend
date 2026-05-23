import React from 'react'
import JobCard from './JobCard'
import api from '../api/getData'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import LeftSideBar from './LeftSideBar';
import { useLocation } from 'react-router-dom';


function DisplayBody() {

  const [Jobs, setJobs] = useState([]);

  const location=useLocation();

  useEffect(() => {

    const fetchAvailableJobs = async () => {

      const params= new URLSearchParams(location.search);

      const jobType=params.get("JobType");
      let res;

      if(jobType){
        res=await api.filterRemote(jobType);
      }
      else{
        res=await api.getAvailableJobs();
      }

      console.log(res.data.Jobs);

      setJobs(res.data.Jobs);
    }

    fetchAvailableJobs();

  }, [location.search])

  return (
    <>

      <LeftSideBar />

      <div className='w-[70%] min-h-screen bg-slate-100 ml-[28%] mt-[3%] pl-[3%] pt-[2%]'>
        {Jobs.map(job => {
          return <JobCard Role={job.Title} CompanyName={job.Company} Location={job.Location} JobType={job.JobType} Experience={job.Experience} />
        })}
      </div>

    </>

  )

}


export default DisplayBody
