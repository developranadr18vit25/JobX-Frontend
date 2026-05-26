import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import JobCard from './JobCard'
import api from '../api/getData'
import { useParams } from 'react-router-dom'
import { useState} from 'react'


function JobDetail() {

    const {JobId}=useParams();
    const [Job,setJob]=useState(null);

    useEffect(() => {

        const getJobData = async () => {

            const res = await api.getAvailableJobs(`/${JobId}`);
            console.log(res.data.Job[0]);
            setJob(res.data.Job[0]);
        }

        getJobData();

    },[JobId])

    if (!Job) return <div>Loading...</div>;

    return (

        <div className=" bg-white bg-neutral-primary-soft block w-[70%] h-[35%] mt-[3%] p-6 border-2  rounded-4xl rounded-base shadow-xs">
            <h5 className="mb-1 text-2xl font-semibold tracking-tight text-heading leading-8">{Job.Title}</h5>
            <p className="text-body mb-2">{Job.CompanyName}</p>
            <p className="text-body mb-2">Location: {Job.Location}</p>
            <p className="text-body mb-2">JobType: {Job.JobType}</p>
            <p className="text-body mb-2">Experience: {Job.Experience} years</p>

        </div>


    )
}

export default JobDetail
