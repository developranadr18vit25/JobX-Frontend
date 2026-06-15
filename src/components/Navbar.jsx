import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'

function Navbar({ user, setuser }) {

    const navigate = useNavigate();

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="flex h-16 items-center justify-between">

                    {/* LEFT - BRAND + NAV */}
                    <div className="flex items-center gap-10">

                        {/* Logo */}
                        <div className="text-xl font-bold tracking-tight text-gray-900">
                            jobx
                        </div>

                        {/* Nav Links */}
                        <div className="hidden sm:flex items-center gap-2">

                            <Link to="/" className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                                Home
                            </Link>

                            <Link to="/jobs" className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                                Jobs
                            </Link>

                            <Link to="/about" className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                                About
                            </Link>

                            <Link to="/contact" className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                                Contact
                            </Link>

                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="flex items-center gap-3">

                        {/* NOT LOGGED IN */}
                        {!user ? (
                            <>
                                {/* Employer Dropdown */}
                                <div className="relative group">

                                    <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition">
                                        For Employers ▾
                                    </button>

                                    <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition">

                                        <Link
                                            to="/registration/createAccount/recruit"
                                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                                        >
                                            Employer Signup
                                        </Link>

                                        <Link
                                            to="/login/recruit"
                                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                                        >
                                            Employer Login
                                        </Link>

                                    </div>
                                </div>

                                {/* Login */}
                                <button
                                    className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                                    onClick={() => navigate("/login")}
                                >
                                    Login
                                </button>

                                {/* Register */}
                                <button
                                    className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition"
                                    onClick={() => navigate("/registration/createAccount")}
                                >
                                    Register
                                </button>
                            </>
                        ) : (
                            <>
                                {/* USER LOGGED IN */}
                                <div className="flex items-center gap-3">

                                    <div className="px-3 py-1.5 text-sm bg-gray-100 rounded-lg text-gray-700">
                                        {user.Username}
                                    </div>

                                    <LogoutButton setuser={setuser} />
                                </div>
                            </>
                        )}

                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar