import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { filterJobType } from '../hooks/sideBarFilters';
import { filterExperience } from '../hooks/sideBarFilters';
import { filterSalary } from '../hooks/sideBarFilters';
import { filterSkills } from '../hooks/sideBarFilters';

function userSideBarView() {

    const location = useLocation();
    const navigate = useNavigate();
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
                                <span className="ms-3">Browse Jobs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Internships</span>
                                <span className="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">Pro</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/jobs/applied" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Track Application Status</span>

                            </Link>
                        </li>

                        <div className="border-b border-gray-700"></div>

                        <h2 className='text-2xl'> Filters</h2>

                        <li className="group relative">
                            <div className="flex items-center px-2 py-1.5 cursor-pointer">
                                Job Type
                            </div>

                            <ul className="hidden group-hover:block pl-10 text-sm space-y-1">
                                <li>
                                    <label className="flex items-center gap-2 cursor-pointer">

                                        <input
                                            type="radio"
                                            name="jobType"
                                            value="Remote"
                                            checked={new URLSearchParams(location.search).get("JobType") === "Remote"}
                                            onChange={(e) => {

                                                const value = e.target.value;

                                                filterJobType(value, navigate, location);
                                            }}
                                        />

                                        <span>Remote</span>
                                    </label>
                                </li>

                                <li>
                                    <label className="flex items-center gap-2 cursor-pointer">

                                        <input
                                            type="radio"
                                            name="jobType"
                                            value="Hybrid"
                                            checked={new URLSearchParams(location.search).get("JobType") === "Hybrid"}
                                            onChange={(e) => {

                                                const value = e.target.value;

                                                filterJobType(value, navigate, location);

                                            }}
                                        />

                                        <span>Hybrid</span>
                                    </label>
                                </li>

                                <li>
                                    <label className="flex items-center gap-2 cursor-pointer">

                                        <input
                                            type="radio"
                                            name="jobType"
                                            value="OnSite"
                                            checked={new URLSearchParams(location.search).get("JobType") === "OnSite"}
                                            onChange={(e) => {

                                                const value = e.target.value;

                                                filterJobType(value, navigate, location);

                                            }}
                                        />

                                        <span>OnSite</span>
                                    </label>
                                </li>
                            </ul>
                        </li>
                        <li className="group relative">
                            <div className="flex items-center px-2 py-1.5 cursor-pointer">
                                Experience
                            </div>

                            <ul className="hidden group-hover:block pl-10 text-sm space-y-1">
                                <li>
                                    <label className="flex items-center gap-2 cursor-pointer">

                                        <input
                                            type="radio"
                                            name="Experience"
                                            value="0-2"
                                            checked={new URLSearchParams(location.search).get("minExp") === "0"}
                                            onChange={(e) => {

                                                filterExperience(0, 2, navigate, location);

                                            }}
                                        />

                                        <span>0-2 yrs</span>
                                    </label>
                                </li>

                                <li>
                                    <label className="flex items-center gap-2 cursor-pointer">

                                        <input
                                            type="radio"
                                            name="Experience"
                                            value="2-4"
                                            checked={new URLSearchParams(location.search).get("minExp") === "2"}
                                            onChange={(e) => {

                                                filterExperience(2, 4, navigate, location);
                                            }}
                                        />

                                        <span>2-4 yrs</span>
                                    </label>
                                </li>

                                <li>
                                    <label className="flex items-center gap-2 cursor-pointer">

                                        <input
                                            type="radio"
                                            name="Experience"
                                            value="4+"
                                            checked={new URLSearchParams(location.search).get("minExp") === "4"}
                                            onChange={(e) => {

                                                const params = new URLSearchParams(location.search);

                                                params.set("minExp", 4);

                                                const newUrl = `${window.location.pathname}?${params.toString()}`;

                                                navigate(newUrl);

                                            }}
                                        />

                                        <span>4+ yrs</span>
                                    </label>
                                </li>
                            </ul>
                        </li>
                        <li className="group relative">
                            <div className="flex items-center px-2 py-1.5 cursor-pointer">
                                Salary
                            </div>

                            <ul className="hidden group-hover:block pl-10 text-sm space-y-1">
                                <li>
                                    <label className="flex items-center gap-2 cursor-pointer">

                                        <input
                                            type="radio"
                                            name="Salary"
                                            value="0-3"
                                            checked={new URLSearchParams(location.search).get("minSalary") === "0"}
                                            onChange={(e) => {

                                                filterSalary(0, 300000);


                                            }}
                                        />

                                        <span>0-3 LPA</span>
                                    </label>
                                </li>

                                <li>
                                    <label className="flex items-center gap-2 cursor-pointer">

                                        <input
                                            type="radio"
                                            name="Salary"
                                            value="3-6"
                                            checked={new URLSearchParams(location.search).get("minSalary") === "300000"}
                                            onChange={(e) => {

                                                filterSalary(300000, 600000, navigate, location);

                                            }}
                                        />

                                        <span>3-6 LPA</span>
                                    </label>
                                </li>

                                <li>
                                    <label className="flex items-center gap-2 cursor-pointer">

                                        <input
                                            type="radio"
                                            name="Salary"
                                            value="6-10"
                                            checked={new URLSearchParams(location.search).get("minSalary") === "600000"}
                                            onChange={(e) => {

                                                filterSalary(600000, 1000000, navigate, location);

                                            }}
                                        />

                                        <span>6-10 LPA</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-2 cursor-pointer">

                                        <input
                                            type="radio"
                                            name="Salary"
                                            value="10+"
                                            checked={new URLSearchParams(location.search).get("minSalary") === "1000000"}
                                            onChange={(e) => {

                                                const params = new URLSearchParams(location.search);

                                                params.set("minSalary", 1000000);
                                                params.delete("maxSalary");

                                                const newUrl = `${window.location.pathname}?${params.toString()}`;

                                                navigate(newUrl);

                                            }}
                                        />

                                        <span>10+ LPA</span>
                                    </label>
                                </li>
                            </ul>
                        </li>
                        <li className="px-2 py-2">
                            <div className="text-body font-medium mb-1">
                                Location
                            </div>

                            <input
                                type="text"
                                placeholder="Enter location (e.g. Gurgaon, Remote)"
                                className="w-full px-2 py-1 border rounded text-sm"
                                onChange={(e) => {
                                    const value = e.target.value;

                                    const params = new URLSearchParams(location.search);

                                    if (value) {
                                        params.set("location", value);
                                    }
                                    else {
                                        params.delete("location")
                                    }

                                    const newUrl = `${window.location.pathname}?${params.toString()}`;

                                    navigate(newUrl)
                                }}
                            />
                        </li>

                        <li className="group relative">
                            <div className="flex items-center px-2 py-1.5 cursor-pointer">
                                Popular Skills
                            </div>

                            <ul className="hidden group-hover:block pl-10 text-sm space-y-2">

                                <li>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox"
                                            onChange={(e) => {
                                                const value = e.target.checked;

                                                filterSkills("React", value, navigate, location);

                                            }}

                                        />
                                        <span>React</span>
                                    </label>
                                </li>

                                <li>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox"
                                            onChange={(e) => {

                                                const value = e.target.checked;

                                                filterSkills("NodeJs", value, navigate, location);

                                            }}

                                        />
                                        <span>Node JS</span>
                                    </label>
                                </li>

                                <li>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox"
                                            onChange={(e) => {
                                                const value = e.target.checked;

                                                filterSkills("JavaScript", value, navigate, location);

                                            }}

                                        />
                                        <span>JavaScript</span>
                                    </label>
                                </li>

                                <li>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox"
                                            onChange={(e) => {
                                                const value = e.target.checked;

                                                filterSkills("Tailwind", value, navigate, location);

                                            }}

                                        />
                                        <span>Tailwind</span>
                                    </label>
                                </li>

                                <li>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox"
                                            onChange={(e) => {
                                                const value = e.target.checked;

                                                filterSkills("Angular", value, navigate, location);
                                            }}

                                        />
                                        <span>Angular</span>
                                    </label>
                                </li>

                            </ul>
                        </li>
                    </ul>

                    <div className="border-b border-gray-700"></div>

                    <h2 className='text-2xl'>Quick Actions</h2>



                    <ul className="pt-4 mt-1">
                        <li>
                            <Link to="#" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Upload Resume</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Track Applications</span>
                            </Link>
                        </li>
                        <div>
                            <div className="border-b border-gray-700"></div>

                            <h2 className='text-2xl'>Profile Completion</h2>

                            <ul>
                                <li>
                                    <Link to="#" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                                        <span className="flex-1 ms-3 whitespace-nowrap">Salary</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                                        <svg className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" />
                                        </svg>
                                        <span className="flex-1 ms-3 whitespace-nowrap">Salary</span>
                                    </Link>
                                </li>
                            </ul>

                            <Link to="#" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                                <svg className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">PRO version</span>
                            </Link>
                        </div>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default userSideBarView
