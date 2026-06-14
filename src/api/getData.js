import axios from "axios";

const postRegistrationData = async (data) => {
    try {
        const res = await axios.post("http://127.0.0.1:4000/signUp/newUser", data);
        return res;

    } catch (error) {
        console.log(error);
    }
}

const loginData = async (data) => {
    try {
        const res = await axios.post("http://127.0.0.1:4000/login/oldUser", data);
        return res;

    } catch (error) {
        console.log(error);
    }
}

const getAvailableJobs = async (params) => {
    try {
        const res = await axios.get(`http://127.0.0.1:4000/display/jobs`);
        return res;

    } catch (error) {
        console.log(error)

    }
}

const getDetailOfJob=async(params)=>{
    const token= localStorage.getItem("token");
    try {
        const res=await axios.post(`http://127.0.0.1:4000/display/jobs${params}`, 
            {},
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }

            }
        );
        return res;

    } catch (error) {
        console.log(error);   
    }

}

const postUserApplication = async (JobId, Resume, Msg , Email) => {
    try {

        const token = localStorage.getItem("token");

        const res = await axios.post("http://127.0.0.1:4000/apply/newJob",
            {
                JobId: JobId,
                Email:Email,
                ResumeLink: Resume,
                Message: Msg
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        return res;

    } catch (error) {
        console.log(error.status);
    }
}

const jobAlreadyApplied = async (JobId) => {

    const token = localStorage.getItem("token");

    const res = await axios.post("http://127.0.0.1:4000/apply/newJob/check",
        {
            JobId: JobId
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }

        }
    )

    return res;
}


const displayAppliedJobs=async()=>{

    const token=localStorage.getItem("token");

    const res=await axios.get("http://127.0.0.1:4000/display/jobs/applied" , 
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    )

    return res;

}

const logout=async ()=>{

    const token=localStorage.getItem("token");

    const res=await axios.put("http://127.0.0.1:4000/logOut/site" , 
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    )
    return res;
}

export default {
    postRegistrationData,
    loginData,
    getAvailableJobs,
    postUserApplication,
    jobAlreadyApplied,
    displayAppliedJobs,
    logout,
    getDetailOfJob
};