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
        const token = localStorage.getItem("token")
        const res = await axios.post(`http://127.0.0.1:4000/display/jobs${params}`,
            {
                Mode: "available"
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }

            }
        )

        return res;

    } catch (error) {
        console.log(error)

    }

}

const postUserApplication = async (JobId,Resume, Msg) => {
    try {

        const token=localStorage.getItem("token");

        const res = await axios.post("http://127.0.0.1:4000/apply/newJob",
            {
                JobId:JobId,
                ResumeLink: Resume,
                Message: Msg
            },
            {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }
        )

        return res;

    } catch (error) {
        console.log(error);
    }

}

export default {
    postRegistrationData,
    loginData,
    getAvailableJobs,
    postUserApplication
};