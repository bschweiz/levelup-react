import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EventContext } from "./EventProvider.js"
import "./Event.css"


export const EventList = () => {
    const history = useHistory()
    const { events, getEvents, joinEvent } = useContext(EventContext)

    useEffect(() => {
        getEvents()
    }, [])

    console.log(events);

    return (
        <article className="events__list">
            <header className="events__header">
                <h1>Level Up Game Events</h1>
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => history.push("/events/new")}
                >Schedule New Event</button>
            </header>
            {
                events.map(event => {
                    
                    {/* const attending = profile.events.some(evt => evt.id === event.id) */}

                    return <section key={event.id} className="registration">
                        <div className="registration__game">{event.game.title}</div>
                        <div>Location: {event.location}</div>
                        <div>
                            Starts at:  {
                                new Date(event.event_time).toLocaleDateString("en-US",
                                    {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        hour: 'numeric'
                                    })
                            }
                        </div>
                        <button className="btn btn-2"
                                onClick={()=> joinEvent(event.id)}>
                                    Join this event
                                </button>
                    </section>
                })
            }
        </article >
    )
}