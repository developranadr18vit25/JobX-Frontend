import React from 'react'
import SearchButton from './SearchButton'
import api from '../api/getData'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserLoginCard({ setuser }) {

    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [loginMsg, setloginMsg] = useState("");
    const navigate = useNavigate();

    const handleUserLogin = async () => {
        const res = await api.loginData({
            Username: Username,
            Password: Password
        })

        if (res.status === 200) {
            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("token", res.data.AccessToken);

            setuser(res.data.user);
        }

        console.log(res.data.AccessToken);
        console.log(res.data.user);
    }

    return (
        <div className="w-[70%] mx-auto mt-10">

            <div className="relative bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden flex">

         
                <div className="w-[60%] p-10">

        
                    <h1 className="text-2xl font-semibold text-gray-900 mb-6">
                        Welcome back 👋
                    </h1>

                    <p className="text-sm text-gray-500 mb-8">
                        Login to continue exploring jobs
                    </p>


                    <div className="mb-6">
                        <label className="text-sm font-medium text-gray-700">
                            Username
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your active username"
                            className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-xl
                            focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black
                            transition"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>


                    <div className="mb-6">
                        <label className="text-sm font-medium text-gray-700">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-xl
                            focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black
                            transition"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>


                    <div className="mt-8">
                        <SearchButton content="Login" onClick={handleUserLogin} />
                    </div>

                </div>


                <div className="w-[40%] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">

                    <img
                        src="https://static.vecteezy.com/system/resources/previews/021/919/677/non_2x/login-icon-in-trendy-flat-style-isolated-on-white-background-approach-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-flat-style-for-graphic-design-vector.jpg"
                        alt="Login"
                        className="w-[90%] h-auto object-contain drop-shadow-xl"
                    />

                </div>

            </div>
        </div>
    )
}

export default UserLoginCard