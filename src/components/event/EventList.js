import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EventContext } from "./EventProvider.js"


export const EventList = () => {
    const history = useHistory()
    const { events, getEvents } = useContext(EventContext)

    useEffect(() => {
        getEvents()
    }, [])

    console.log(events);

    return (
        <article className="events">
            <header className="events__header">
                <h1>Level Up Game Events</h1>
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => history.push("/events/new")}
                >Register New Event</button>
            </header>
            {
                events.map(event => {
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
                    </section>
                })
            }
        </article >
    )
}