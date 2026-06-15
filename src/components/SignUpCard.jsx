import React from 'react'
import SearchButton from './SearchButton'
import { useState } from 'react'
import api from '../api/getData'

function SignUpCard() {

    const [name, setname] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [purpose, setpurpose] = useState("");

    const handleRegistration = async () => {
        const res = await api.postRegistrationData({
            Name: name,
            Username: username,
            Password: password,
            Role: purpose
        });
        console.log(res.data.msg)
    }

    return (
        <div className="w-[75%] mx-auto mt-10">

            <div className="relative bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden flex">

                <div className="w-[65%] p-10">

                    <h1 className="text-2xl font-semibold text-gray-900">
                        Create your jobx profile 🚀
                    </h1>

                    <p className="text-sm text-gray-500 mt-2 mb-8">
                        Join as applicant or recruiter in seconds
                    </p>

            
                    <div className="mb-5">
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            placeholder="What is your name?"
                            className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-xl
                            focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition"
                            onChange={(e) => setname(e.target.value)}
                        />
                    </div>

              
                    <div className="mb-5">
                        <label className="text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            placeholder="Choose a username"
                            className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-xl
                            focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition"
                            onChange={(e) => setusername(e.target.value)}
                        />
                    </div>

          
                    <div className="mb-5">
                        <label className="text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Create a strong password"
                            className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-xl
                            focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition"
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>

             
                    <div className="mb-6">
                        <h2 className="text-sm font-medium text-gray-700 mb-3">
                            I want to join as
                        </h2>

                        <div className="flex gap-6 text-sm">

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="q1"
                                    value="Applicant"
                                    onChange={(e) => setpurpose(e.target.value)}
                                    className="accent-black"
                                />
                                Applicant
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="q1"
                                    value="Recruiter"
                                    onChange={(e) => setpurpose(e.target.value)}
                                    className="accent-black"
                                />
                                Recruiter
                            </label>

                        </div>
                    </div>

                 
                    <div className="mt-8">
                        <SearchButton content="Create Account" onClick={handleRegistration} />
                    </div>

                </div>

   
                <div className="w-[35%] bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-6">

                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0CSkXjKl0QEa4QCSXkRd5TByPC-O6LPfIXQ&s"
                        alt="signup"
                        className="w-[90%] object-contain drop-shadow-xl"
                    />

                </div>

            </div>
        </div>
    )
}

export default SignUpCard