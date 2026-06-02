import React, { useEffect ,useState} from 'react'
import api from "../api/getData"
import JobCard from './JobCard'
import AppliedJobCard from './AppliedJobCard';

function AppliedJobs() {

    const [TotalApp,setTotalApp]=useState(0);
    const [Pending,setPending]=useState(0);
    const [Shortlisted,setShortlisted]=useState(0);
    const [Rejected,setRejected]=useState(0);
    const [Jobs,setJobs]=useState([]);

    useEffect(() => {

        const fetchAppliedJobs = async () => {

            const res = await api.displayAppliedJobs();

            console.log(res.data);

            setTotalApp(res.data.TotalApplications);
            setPending(res.data.Pending);
            setShortlisted(res.data.Shortlisted);
            setRejected(res.data.Rejected);
            setJobs(res.data.AppliedJobs);
        }
        

        fetchAppliedJobs();

    },[]);

    return (
        <>
            <div className='h-80 w-[90%] ml-[6%] mt-[3%] bg-slate-100 pt-[2%] pl-[3%] flex flex-row '>

                <div className='bg-blue-300 h-32 w-[20%] pt-4 mr-[3%] text-xl text-center border-2 rounded-2xl'>Total Applications 
                    <div className='text-2xl font-bold'>{TotalApp}</div>
                </div>
                <div className='h-32 w-[20%] bg-yellow-300  pt-4 mr-[3%] text-xl text-center border-2 rounded-2xl'>Pending
                    <div className='text-2xl font-bold'>{Pending}</div>
                </div>
                <div className='h-32 w-[20%] bg-green-400 pt-4 mr-[3%] text-xl text-center border-2 rounded-2xl'>Shortlisted 
                    <div className='text-2xl font-bold'>{Shortlisted}</div>
                </div>
                <div className='h-32 w-[20%] bg-red-500 pt-4 mr-[3%] text-xl text-center border-2 rounded-2xl'>Rejected 
                    <div className='text-2xl font-bold'>{Rejected}</div>
                </div>
            </div>

            <div className='h-100 w-[77%] bg-amber-400 ml-[10%] text-center text-3xl'>
                <h1>Applied Jobs</h1>

                {/* <div className='h-20 w-full mt-[2%] bg-green-400 flex flex-row justify-center align-middle'>
                    <div className='h-20 w-[20%] bg-red-300 '></div>
                    <div className='h-20 w-[20%] bg-red-300 ml-[5%]'></div>
                    <div className='h-20 w-[20%] bg-red-300 ml-[5%]'></div>
                    <div className='h-20 w-[20%] bg-red-300 ml-[5%]'></div>
                </div> */}

                {Jobs.map((job)=>{
                    return <AppliedJobCard title={job.Title} company={job.Company} location={job.Location} jobType={job.JobType} status={job.Status} date={new Date(job.AppliedOn).toISOString().split("T")[0]} />
                })}

            </div>
        </>
    )
}

export default AppliedJobs
