import React, { useEffect, useContext } from 'react'
import { ProfileContext } from './ProfileProvider.js'
// import './Profile.css'
export const Profile = () => {
    const { profile, getProfile } = useContext(ProfileContext)

    useEffect(() => {
        getProfile()
    }, [])

    // debugger
    return (
        <article className='profile'>
            <header>
                <h1>Your Fuckin' Profile G</h1>
            </header>
            <section className='profile__info'>
                <header className='profile__header'>
                    <h3>Your Info Motherfucker</h3>
                </header>
                <div className='profile__name'>
                    Welcome: {profile.gamer && profile.gamer.user.first_name} {profile.gamer && profile.gamer.user.last_name}
                </div>
                <div className='profile__bio'>About your ass: {profile.gamer && profile.gamer.bio}</div>
            </section>
            <section className='profile__registrations'>
                <header className='registrations__header'>
                    <h3>Your Events Motherfucker</h3>
                </header>
                <div className='registrations'>
                    {
                        profile.events.map(e => {
                            return <div key={e.id} className='registration'>
                                <div className='registration__game'>{e.game.title}</div>
                                <div className='registration__location'>Meet at {e.location}</div>
                                <div className='registration__event_time'>Playing at {e.event_time}</div>
                            </div>
                        })
                    }
                </div>
            </section>
        </article>
    )
}