import React from 'react'
import { Link } from 'react-router-dom'

function RecruiterSideBarView() {
    return (
        <>
            <aside id="separator-sidebar" className="fixed top-[10%] left-[2%] z-40 w-64 h-[90vh] overflow-y-auto transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <h1 className='text-3xl'>All filters</h1>
                <div className="h-full px-3 py-4 bg-neutral-primary-soft border-e border-default">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to="/" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/jobs" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                                <span className="ms-3">Post a Job</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Manage Jobs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/jobs/applied" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">All Applications</span>

                            </Link>
                        </li>
                        <li>
                            <Link to="/jobs/applied" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Shortlisted Candidates</span>

                            </Link>
                        </li>
                        <li>
                            <Link to="/jobs/applied" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Hired Candidates</span>

                            </Link>
                        </li>

                        <div className="border-b border-gray-700"></div>

                        <h2 className='text-2xl'> Company</h2>

                        <li>
                            <Link to="/jobs/applied" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Company Profile</span>

                            </Link>
                        </li>

                        <h2 className='text-2xl'> Tools</h2>

                        <li>
                            <Link to="/jobs/applied" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Talent Search</span>

                            </Link>
                        </li>
                        <li>
                            <Link to="/jobs/applied" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Resume Search</span>

                            </Link>
                        </li>

                    </ul>
                </div>
            </aside>
        </>
    )
}

export default RecruiterSideBarView
