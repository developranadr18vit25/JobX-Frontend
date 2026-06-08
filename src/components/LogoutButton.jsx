import React from 'react'
import api from '../api/getData'


function LogoutButton({setuser}) {

    const handleUserLogout=async()=>{
        const res=await api.logout();

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setuser(null);

        console.log(res);
        return res;
    }

  return (
    <>
    <div className='h-10 w-10'>
        <button className='bg-red-500' onClick={handleUserLogout}>Click me </button>
      
    </div>
    </>
  )
}

export default LogoutButton
