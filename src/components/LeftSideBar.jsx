import React from 'react'
import { Link } from 'react-router-dom'
import UserSideBarView from './userSideBarView';
import RecruiterSideBarView from './RecruiterSideBarView';



function LeftSideBar({role}) {
    return (
        <>

        {role=="Applicant" ? <>
        <UserSideBarView /> 
        </> :
        <>
        <RecruiterSideBarView /> 
        </>
        }
        
            
        </>
    )
}

export default LeftSideBar
