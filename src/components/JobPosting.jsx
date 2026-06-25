import React from "react";
import { useState } from "react";
import api from "../api/getData";



function JobPosting() {

  const [Company,setCompany]=useState("");
  const [Title,setTitle]=useState("");
  const [Location,setLocation]=useState("");
  const [Salary,setSalary]=useState(0);
  const [Exp ,setExp]=useState(0);
  const [JobType,setJobType]=useState("OnSite");
  const [Skills,setSkills]=useState([]);
  const [Description,setDescription]=useState("");

  const PublishJob=async (e)=>{

    e.preventDefault();

    const res=await api.postJob(Company,Title,Location,Salary,Exp,JobType,Skills,Description);

    console.log(res);

    return res;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Create Job Opening
        </h1>

        <p className="text-gray-500 mb-8">
          Fill in the details below to publish a new job opening.
        </p>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" >
                Company Name
              </label>
              <input onChange={(e)=>setCompany(e.target.value)}
                type="text"
                placeholder="Rakuten"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" >
                Job Title
              </label>
              <input onChange={(e)=>setTitle(e.target.value)}
                type="text"
                placeholder="Software Developer"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" >
                Location
              </label>
              <input onChange={(e)=>setLocation(e.target.value)}
                type="text"
                placeholder="Tokyo"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" >
                Salary
              </label>
              <input onChange={(e)=>setSalary(Number(e.target.value))}
                type="number"
                placeholder="4500000"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" >
                Experience
              </label>
              <input onChange={(e)=>setExp(Number(e.target.value))}
                type="number"
                placeholder="2"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" >
              Job Type
            </label>

            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black" onChange={(e)=>setJobType(e.target.value)}>
              <option>OnSite</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" >
              Required Skills
            </label>

            <input onChange={(e)=>setSkills(e.target.value.split(",").map(skill=>skill.trim()).filter(skill=>skill!==""))}
              type="text"
              placeholder="Java, Spring Boot, Backend, AI"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" >
              Job Description
            </label>

            <textarea onChange={(e)=>setDescription(e.target.value)}
              rows="6"
              placeholder="Describe responsibilities, requirements, and expectations..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black resize-none"
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition"
            onClick={PublishJob}>
              Publish Opening
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobPosting;
