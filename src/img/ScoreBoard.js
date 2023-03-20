import React, {useState} from "react";


export default function Scoreboard(props) {

    const {score, setScore, bestScore, setBestScore} = props

    return (
        <div className="ScoreBoard header">
            <p>Score: {score}</p>
            <p>Best Score: {bestScore}</p>
        </div>
    )
}