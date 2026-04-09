import React from 'react'

function SignUpCard() {
    return (
        <div className='h-300 w-[70%] bg-white border-2 border-gray-400 rounded-3xl m-auto mt-[3%] flex flex-col'>
            <div className='h-10 w-[30%] bg-white mt-[3%] ml-[4%] pl-7 text-xl text-black font-bold'> Create your jobx profile</div>

            <div className='h-[90%] w-[80%] bg-white ml-[10%] mt-[3%] pt-[5%] pl-[3%] '> 
                <div className='h-[12%] w-[90%] bg-white flex flex-col '>
                    <h1 className='text-l font-semibold'>Full Name</h1>
                    <input type="text" placeholder='What is your name?' className='w-[70%] h-10 mt-[2%] border border-gray-300 pl-4 rounded-2xl' />
                </div>
                <div className='h-[12%] w-[90%] bg-white flex flex-col '>
                    <h1 className='text-l font-semibold'>Username</h1>
                    <input type="text" placeholder='Tell us your Username' className='w-[70%] h-10 mt-[2%] border border-gray-300 pl-4 rounded-2xl' />
                </div>
                <div className='h-[12%] w-[90%] bg-white flex flex-col '>
                    <h1 className='text-l font-semibold'>Password</h1>
                    <input type="text" placeholder='Enter your password' className='w-[70%] h-10 mt-[2%] border border-gray-300 pl-4 rounded-2xl' />
                </div>
                {/* <div className='h-[15%] w-[90%] bg-blue-500 flex flex-col pt-10 mb-5'>
                    <h1 className='text-l font-semibold'>Purpose</h1>
                    <input type="text" placeholder='What is your name?' className='w-[70%] h-10 mt-[2%]' />
                </div> */}
            </div>
        </div>
    )
}

export default SignUpCard
