import axios from "axios";

const postRegistrationData=async(data)=>{
    await axios.post("http://127.0.0.1:4000/signUp/newUser" , data);

}

export default postRegistrationData;