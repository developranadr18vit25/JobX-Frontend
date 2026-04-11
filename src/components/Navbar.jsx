import React from 'react'
import SearchButton from './SearchButton'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Navbar() {
    const navigate=useNavigate();
    return (
        <>
            <nav className=" sticky top-0  bg-white after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center mr-20">
                                jobx
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <Link to="/" aria-current="page" className="rounded-md  px-3 py-2 text-m font-medium text-black hover:cursor-pointer">Home</Link>
                                    <a href="#" className="rounded-md px-3 py-2 text-m font-medium text-black hover:bg-white/5 hover:cursor-pointer">Jobs</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-m font-medium text-black hover:bg-white/5 hover:cursor-pointer">About</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-m font-medium text-black hover:bg-white/5 hover:cursor-pointer">Contact</a>
                                </div>
                            </div>
                            
                        </div>
                        <button className='bg-white h-12 w-23 mr-6 rounded-br-4xl rounded-bl-4xl rounded-tl-4xl rounded-tr-4xl border-2 font-bold ' onClick={()=>navigate("/login")}>Login</button>
                        <button className='bg-orange-600 h-12 w-23 mr-6 rounded-br-4xl rounded-bl-4xl rounded-tl-4xl rounded-tr-4xl font-bold text-white' onClick={()=>navigate("/registration/createAccount")}>Register</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
