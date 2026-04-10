import React from 'react'
import SearchButton from './SearchButton'

function SignUpCard() {
    return (
        <div className='h-170 w-[70%] bg-white border-2 border-gray-400 rounded-3xl m-auto mt-[3%] flex flex-col'>
            <div className='h-10 w-[30%] bg-white mt-[3%] ml-[4%] pl-7 text-xl text-black font-bold'> Create your jobx profile</div>

            <div className='h-[90%] w-[80%] bg-white ml-[5%] mt-[1%] pt-[3%] pl-[3%] flex flex-col gap-7'>
                <div className='h-[12%] w-[90%] bg-white flex flex-col '>
                    <h1 className='text-l font-semibold'>Full Name</h1>
                    <input type="text" placeholder='What is your name?' className='w-[70%] h-13 mt-[2%] border border-gray-300 pl-4 rounded-2xl' />
                </div>
                <div className='h-[12%] w-[90%] bg-white flex flex-col '>
                    <h1 className='text-l font-semibold'>Username</h1>
                    <input type="text" placeholder='Tell us your Username' className='w-[70%] h-13 mt-[2%] border border-gray-300 pl-4 rounded-2xl' />
                </div>
                <div className='h-[12%] w-[90%] bg-white flex flex-col '>
                    <h1 className='text-l font-semibold'>Password</h1>
                    <input type="text" placeholder='Enter your password' className='w-[70%] h-13 mt-[2%] border border-gray-300 pl-4 rounded-2xl' />
                </div>
                <div className='h-[12%] w-[90%] bg-white flex flex-col '>
                    <h1 className='text-l font-semibold'>State your purpose</h1>
                    <label>
                        <input type="radio" name="q1" value="mumbai" className='mb-[2%] mt-[2%]' /> Applicant
                    </label>
                    <label>
                        <input type="radio" name="q1" value="mumbai" /> Recruiter
                    </label>
                </div>

                {/* <div className='h-[15%] w-[90%] bg-blue-500 flex flex-col pt-10 mb-5'>
                    <h1 className='text-l font-semibold'>Purpose</h1>
                    <input type="text" placeholder='What is your name?' className='w-[70%] h-10 mt-[2%]' />
                </div> */}
                <div className="mt-6 flex justify-center">
                    <SearchButton  content="Register Now"/>
                </div>
            </div>
            {/* <SearchButton /> */}

        </div>
    )
}

export default SignUpCard
