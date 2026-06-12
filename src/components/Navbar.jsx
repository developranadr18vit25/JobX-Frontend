import React from 'react'
import SearchButton from './SearchButton'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import { useState } from 'react';
import { useEffect } from 'react';

function Navbar({user,setuser}) {
    const navigate = useNavigate();

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
                                    <Link to="/jobs" className="rounded-md px-3 py-2 text-m font-medium text-black hover:bg-white/5 hover:cursor-pointer">Jobs</Link>
                                    <Link to="/about" className="rounded-md px-3 py-2 text-m font-medium text-black hover:bg-white/5 hover:cursor-pointer">About</Link>
                                    <Link to="/contact" className="rounded-md px-3 py-2 text-m font-medium text-black hover:bg-white/5 hover:cursor-pointer">Contact</Link>


                                </div>
                            </div>

                        </div>

                        {!user ?
                            (
                                <>
                                    <button className='bg-white h-12 w-23 mr-6 rounded-br-4xl rounded-bl-4xl rounded-tl-4xl rounded-tr-4xl border-2 font-bold cursor-pointer ' onClick={() => navigate("/login")}>Login</button>
                                    <button className='bg-orange-600 h-12 w-23 mr-6 rounded-br-4xl rounded-bl-4xl rounded-tl-4xl rounded-tr-4xl font-bold text-white cursor-pointer hover:bg-amber-700' onClick={() => navigate("/registration/createAccount")}>Register</button>

                                    <div className="relative flex-shrink-0 group">
                                        <button className="px-4 py-2 cursor-pointer">
                                            For Employers
                                        </button>

                                        <div className="absolute right-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-32 z-50">
                                            <Link
                                                to="/registration/createAccount/recruit"
                                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                                            >
                                                Employer Registration
                                            </Link>

                                            <Link
                                                to="/login/recruit"
                                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                                            >
                                                Employer Login
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )
                            :
                            <>
                            <div>
                                {user.Username}
                            </div>

                            <div>
                                <LogoutButton setuser={setuser} />
                            </div>
                            </>
                        }

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
