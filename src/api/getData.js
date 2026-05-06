import axios from "axios";

const postRegistrationData=async(data)=>{
    try {
        const res=await axios.post("http://127.0.0.1:4000/signUp/newUser" , data);
        return res;

    } catch (error) {
        console.log(error);
    }
}

const loginData=async(data)=>{
    try {
        const res=await axios.post("http://127.0.0.1:4000/login/oldUser" , data);
        return res;

    } catch (error) {
        console.log(error);
        
    }
}

export default {
    postRegistrationData,
    loginData
};