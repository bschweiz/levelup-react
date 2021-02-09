import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()
    }, [])

    return (
        <article className="games">
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.title} by {game.gamer}</div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__description">Short description: {game.description}</div>
                    </section>
                })
            }
        </article>
    )    
}