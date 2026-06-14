import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import JobCard from './JobCard'
import api from '../api/getData'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LeftSideBar from './leftSideBar'


function JobDetail() {

    const { JobId } = useParams();
    const [Job, setJob] = useState(null);
    const [IsApplied, setIsApplied] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        const checkIfApplied = async () => {
            try {

                const res = await api.jobAlreadyApplied(JobId);
                setIsApplied(res.data.Applied);

            } catch (error) {
                console.log(error);
            }
        }

        checkIfApplied();
    }, []);

    useEffect(() => {

        const getJobData = async () => {

            const res = await api.getDetailOfJob(`/${JobId}`);


            // console.log("FULL RESPONSE:", res);
            // console.log("DATA:", res.data);

            console.log(res.data.Job[0]);
            setJob(res.data.Job[0]);
        }

        getJobData();

    }, [JobId])

    if (!Job) return <div>Loading...</div>;

    return (

        <>

            <div className='flex'>

                <LeftSideBar />
                <div className="flex gap-6 items-start flex-1 ml-[30%]">

                    <div className="bg-white bg-neutral-primary-soft block w-[70%] h-250 mt-[3%] ml-[7%] p-6 border-2 rounded-4xl rounded-base shadow-xs">
                        <h5 className="mb-1 text-2xl font-semibold tracking-tight text-heading leading-8">
                            {Job.Title}
                        </h5>

                        <p className="text-body mb-2">{Job.Company}</p>
                        <p className="text-body mb-2">Location: {Job.Location}</p>
                        <p className="text-body mb-2">JobType: {Job.JobType}</p>
                        <p className="text-body mb-2">Experience: {Job.Experience} years</p>
                        <p className="text-body mb-2">Salary: {Job.Salary}</p>

                        {
                            IsApplied ? <p className='text-xl text-red-600'>Job already applied</p>: <button
                                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition hover:cursor-pointer  " onClick={() => {
                                    navigate("Application")
                                }}
                            >
                                Apply Now
                            </button>
                        }

                        <h1 className='text-2xl pl-[30%] pt-10'>Job Description</h1>
                        <div className='h-[60%] bg-blue-100 mt-[5%] ml-[4%] w-[90%] p-10'>
                            {Job.Description}

                            <ul className='list-disc ml-6 mt-10'>
                                <li>Role:  {Job.Title}</li>
                                <li>Employment Type:  {Job.JobType}</li>
                                <li>Status:  {Job.Status}</li>

                            </ul>

                        </div>


                    </div>

                </div>

            </div>


        </>


    )
}

export default JobDetail
