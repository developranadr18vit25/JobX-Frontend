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

// const filterRemote = async (jobType) => {
//     try {

//         const token = localStorage.getItem("token");

//         const res = await axios.post(`http://127.0.0.1:4000/display/jobs?JobType=${jobType}`,
//             {
//                 Mode: "available"
//             },
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             }
//         );
//         return res;

//     } catch (error) {
//         console.log(error);

//     }
// }

// const filterExperience = async (minExp, maxExp) => {
//     try {

//         const token = localStorage.getItem("token");
//         let url=`http://127.0.0.1:4000/display/jobs?minExp=${minExp}`;

//         if(maxExp){
//             url+=`&maxExp=${maxExp}`;
//         }

//         const res = await axios.post(,
//             {
//                 Mode: "available"
//             },
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             }
//         );

//         return res;

//     } catch (error) {
//         console.log(error);
//     }
// }

export default {
    postRegistrationData,
    loginData,
    getAvailableJobs
};