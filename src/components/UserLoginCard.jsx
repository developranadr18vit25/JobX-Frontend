import React from 'react'
import SearchButton from './SearchButton'

function UserLoginCard() {
    return (
        <>
            <div className='h-130 w-[70%] bg-white border-2 border-gray-400 rounded-3xl m-auto mt-[3%] flex flex-col relative'>
                <div className='h-10 w-[30%] bg-white mt-[3%] ml-[4%] pl-7 text-2xl text-black font-bold'>Login</div>

                <div className='h-100 w-[95%] bg-white ml-[3%] mt-[1%] pt-[3%] pl-[3%] flex flex-col gap-7'>
                    <div className='h-[30%] w-[55%] bg-white flex flex-col'>
                        <h1 className='text-l font-semibold'>Username</h1>
                        <input type="text" placeholder='Enter your active Username' className='w-[70%] h-13 mt-[2%] border border-gray-300 pl-4 rounded-2xl' />
                    </div>
                    <div className='h-[30%] w-[55%] bg-white flex flex-col '>
                        <h1 className='text-l font-semibold'>Password</h1>
                        <input type="text" placeholder='Enter your password' className='w-[70%] h-13 mt-[2%] border border-gray-300 pl-4 rounded-2xl' />
                    </div>

                    <div className="mt-6 ">
                        <SearchButton content="Login" />
                    </div>
                    <div className='absolute top-20 right-7 h-[75%] w-[35%] bg-white flex items-center justify-center'>
                        <img src="https://static.vecteezy.com/system/resources/previews/021/919/677/non_2x/login-icon-in-trendy-flat-style-isolated-on-white-background-approach-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-flat-style-for-graphic-design-vector.jpg" alt="Login" className='h-[95%] w-[95%]'  />

                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default UserLoginCard
