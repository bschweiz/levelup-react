import React, { useState } from 'react'

export const ProfileContext = React.createContext()

export const ProfileProvider = (props) => {
    // set a default value for 'events' so an error isn't thrown on initial render
    const [profile, setProfile] = useState({ events: [] })

    const getProfile = () => {
        return fetch("http://localhost:8000/profile", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(resonse => resonse.json())
            .then(setProfile)
    }

    return (
        <ProfileContext.Provider value={{ profile, getProfile }}>
            {props.children}
        </ProfileContext.Provider>
    )
}
