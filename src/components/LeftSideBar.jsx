import React from 'react'
import { Link } from 'react-router-dom'
import UserSideBarView from './UserSideBarView';
import RecruiterSideBarView from './RecruiterSideBarView';

function LeftSideBar({ role }) {

    return (
        <>

            {!role ? (<UserSideBarView />) : role == "Applicant" ? (<UserSideBarView />) : (<RecruiterSideBarView />)
            }

        </>
    )
}

export default LeftSideBar
