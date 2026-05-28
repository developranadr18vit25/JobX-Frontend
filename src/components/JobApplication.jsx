import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../api/getData';
import { useNavigate } from 'react-router-dom';

function JobApplication() {

    const [Resume,setResume]=useState("");
    const [Msg , setMsg]=useState("");
    const [Email , setEmail]=useState("");
    const [Success , setSuccess]=useState(false);

    const navigate=useNavigate();
    
    const {JobId}=useParams();

    const postFunction=async ()=>{
        const res=await api.postUserApplication(JobId,Resume,Msg , Email);


        if(res.status==201){
            setSuccess(true);

            setTimeout(() => {

                navigate("/jobs");
                
            }, 2000);
        }

        console.log(res);
    }

    return (
        <div className="bg-white h-180 w-[60%] mt-[3%] ml-[20%] p-6 border-2 rounded-4xl shadow-xs">
            <h1 className='text-3xl pl-[30%]'>APPLY FOR THE JOB</h1>
            <div className='h-[90%] bg-blue-100 mt-[5%] ml-[4%] w-[90%] p-10'>


                <div className='mb-6'>
                    <label className='block text-lg mb-2'>
                        Personal Email
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your personal Email"
                        className='w-full p-3 border-2 rounded-xl bg-white'
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                    />
                </div>

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

                {
                    Success && 
                    <p className='text-green-600 mt-4 text-lg font-semibold'> Job Applied Successfully</p>
                }

            </div>
        </div>
    )
}

export default JobApplication
