import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { GameForm } from "./game/GameForm.js"
import { GameProvider } from "./game/GameProvider.js"
import { EventProvider } from "./event/EventProvider.js"
import { ProfileProvider } from "./auth/ProfileProvider.js"
import { EventList } from "./event/EventList.js"
import { EventForm } from "./event/EventForm.js"
import { Profile } from "./auth/Profile.js"
export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <ProfileProvider>
                <GameProvider>
                    <EventProvider>
                        <Route exact path="/games">
                            <GameList />
                        </Route>
                        <Route exact path="/games/:gameId(\d+)/edit" render={
                            props => <GameForm {...props}/>
                        }>  
                        </Route>
                        <Route exact path="/games/new">
                            <GameForm />
                        </Route>
                        <Route exact path="/events">
                            <EventList />
                        </Route>
                        <Route exact path="/events/new">
                            <EventForm />
                        </Route>
                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                    </EventProvider>
                </GameProvider>
            </ProfileProvider>
        </main>
    </>
}