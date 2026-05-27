import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../api/getData';

function JobApplication() {

    const [Resume,setResume]=useState("");
    const [Msg , setMsg]=useState("");
    
    const {JobId}=useParams();

    const postFunction=async ()=>{
        const res=await api.postUserApplication(JobId,Resume,Msg);

        console.log(res);
    }

    return (
        <div className="bg-white h-150 w-[60%] mt-[3%] ml-[20%] p-6 border-2 rounded-4xl shadow-xs">
            <h1 className='text-3xl pl-[30%]'>APPLY FOR THE JOB</h1>
            <div className='h-[90%] bg-blue-100 mt-[5%] ml-[4%] w-[90%] p-10'>


                <div className='mb-6'>
                    <label className='block text-lg mb-2'>
                        Resume Link
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your resume link"
                        className='w-full p-3 border-2 rounded-xl bg-white'
                        onChange={(e)=>{
                            setResume(e.target.value)
                        }}
                    />
                </div>

                <div className='mb-6'>
                    <label className='block text-lg mb-2'>
                        Why should we hire you ?
                    </label>

                    <textarea
                        placeholder="Write a short message..."
                        className='w-full h-40 p-3 border-2 rounded-xl bg-white resize-none'
                        onChange={(e)=>{
                            setMsg(e.target.value)
                        }}
                    />
                </div>

                <button className='bg-black text-white px-6 py-3 rounded-xl hover:cursor-pointer' onClick={postFunction}>
                    Submit Application
                </button>

            </div>
        </div>
    )
}

export default JobApplication
