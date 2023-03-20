import React, { useState, useEffect } from 'react';
import "./App.scss"
import Card from './Card';
import Scoreboard from './img/ScoreBoard';

function App() {

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)



  return (
    <div className='papaDiv'>
      <Scoreboard score={score} bestScore={bestScore} />
      <div className='mamaDiv'>
        <Card score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore}/>
      
        </div>
        <div className='footer'>

        </div>
    </div>
  );
}
export default App;