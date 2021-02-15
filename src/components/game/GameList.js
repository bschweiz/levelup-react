import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { useHistory } from "react-router-dom"

export const GameList = () => {
    const history = useHistory()
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()
    }, [])

console.log(games);
    return (
        <div>
        <button className="btn btn-2 btn-sep icon-create"
            onClick={() => history.push("/games/new")}
        >Register New Game</button>
        <article className="games">
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.title} by {game.gamer.bio}</div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__description">Description: {game.description}</div>
                        <div className="game__description">Game Type: {game.game_type.label}</div>
                    </section>
                })
            }
        </article>
        </div>
    )    
}