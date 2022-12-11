import React from 'react'
import "../component/scoreBoard.css"

const ScoreBoard = ({score,xplayer}) => {
    const {xScore,oScore}=score;
  return (
    <div className='score-board'>
        <span className={`score x-score ${!xplayer && "inactive"}`}>X={xScore}</span>
        <span className={`score o-score ${xplayer && "inactive"}`}>O={oScore}</span>
    </div>
  )
}

export default ScoreBoard
