import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { GameContext } from "./GameProvider.js"
import { EventContext } from "./EventProvider.js"

export const EventForm = () => {
    const history = useHistory()
    const { games, getGames } = useContext(GameContext)
    const { createEvent } = useContext(EventContext)
    // default valies
    const [currentEvent, setCurrentEvent] = useState({
        location: "",
        // event_time
        eventTime: "", 
        // scheduler_id
        schedulerId: 0,
        // game_id
        gameId: 0
    })

    useEffect(() => {
        getGames()
    }, [])
    
    const changeEventState = (DOMEvent) => {
        const newEventState = Object.assign({}, currentEvent)
        newEventState[DOMEvent.target.name] = DOMEvent.target.value
        setCurrentEvent(newEventState)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select name="gameId" className="form-control"
                        value={ currentEvent.gameId }
                        onChange={ changeEventState }>
                        <option value="0">Select a game...</option>
                        {
                            games.map(game => (
                                <option></option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location: </label>
                    <input type="text" name="location" required autoFocus className="form-control"
                        value={currentEvent.location}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventTime">Date & Time: </label>
                    <input type="datetime-local" name="eventTime" required autoFocus className="form-control"
                        value={currentEvent.eventTime}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    // Create the event


                    // Once event is created, redirect user to event list
                }}
                className="btn btn-primary">Create Event</button>
        </form>
    )
}
}