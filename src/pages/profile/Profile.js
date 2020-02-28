import React from "react"
import {Link} from "react-router-dom"
import './Profile.css'

import Settings from "./Settings"
import Info from "./Info"

function Profile() {
    return (
        <div>
            <h1>Profile Page</h1>
            <ul>
                <li><Link to="/profile/info">Profile Info</Link></li>
                <li><Link to="/profile/settings">Profile Settings</Link></li>
            </ul>
            
            
        </div>
    )
}

export default Profile