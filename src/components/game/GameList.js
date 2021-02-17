import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { useHistory } from "react-router-dom"

export const GameList = () => {
    const history = useHistory()
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()
    }, [])
    // console.log(games);
    return (
        <div>
            <header className="games__header">
                <h1>Level Up Games</h1>
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => history.push("/games/new")}
                >Register New Game</button>
            </header>
            <article className="games">
                {
                    games.map(game => {
                        return <section key={`game--${game.id}`} className="game">
                            <div className="game__edit">
                                <button className="btn btn-3"
                                    onClick={e => history.push(`/games/${game.id}/edit`)}
                                    >Edit</button>
                            </div>
                            <div className="game__title">{game.title} by {game.gamer.bio}</div>
                            <div className="game__players">{game.number_of_players} players needed</div>
                            <div className="game__description">Description: {game.description}</div>
                            <div className="game__gametype">Game Type: {game.game_type.label}</div>
                            {/* add in up coming events associated with this game down below here */}
                        </section>
                    })
                }
            </article>
        </div>
    )
}