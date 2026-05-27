import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import JobCard from './JobCard'
import api from '../api/getData'
import { useParams } from 'react-router-dom'
import { useState } from 'react'


function JobDetail() {

    const { JobId } = useParams();
    const [Job, setJob] = useState(null);

    useEffect(() => {

        const getJobData = async () => {

            const res = await api.getAvailableJobs(`/${JobId}`);
            console.log(res.data.Job[0]);
            setJob(res.data.Job[0]);
        }

        getJobData();

    }, [JobId])

    if (!Job) return <div>Loading...</div>;

    return (

        <>
            <div className="flex gap-6 items-start">

                <div className="bg-white bg-neutral-primary-soft block w-[40%] h-[40%] mt-[3%] ml-[7%] p-6 border-2 rounded-4xl rounded-base shadow-xs">
                    <h5 className="mb-1 text-2xl font-semibold tracking-tight text-heading leading-8">
                        {Job.Title}
                    </h5>

                    <p className="text-body mb-2">{Job.CompanyName}</p>
                    <p className="text-body mb-2">Location: {Job.Location}</p>
                    <p className="text-body mb-2">JobType: {Job.JobType}</p>
                    <p className="text-body mb-2">Experience: {Job.Experience} years</p>
                    <p className="text-body mb-2">Salary: {Job.Salary}</p>
                </div>

                <div className="bg-white h-300 w-[45%] mt-[3%] ml-[3%] p-6 border-2 rounded-4xl shadow-xs">
                    <h1 className='text-2xl pl-[30%]'>Job Description</h1>
                    <div className='h-[90%] bg-blue-100 mt-[5%] ml-[4%] w-[90%] p-10'>
                        {Job.Description} 
                        
                        <ul className='list-disc ml-6 mt-10'>
                            <li>Role:  {Job.Title}</li>
                            <li>Employment Type:  {Job.JobType}</li>
                            <li>Status:  {Job.Status}</li>

                        </ul>

                    </div>
                </div>

            </div>
        </>


    )
}

export default JobDetail
