import React, { useState, useEffect } from 'react';
import "./App.scss"
import Card from './Card';
import Scoreboard from './ScoreBoard';
import TitleScreenDom from './TitleScreen';
import "animate.css"
import Title from './Title';



function App() {

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [titleScreen, setTitleScreen] = useState(true)

  
 

  if (titleScreen) {
    return <TitleScreenDom setTitleScreen = {setTitleScreen}></TitleScreenDom>

  } else {
    return (
      <div className='papaDiv  animate__animated animate__fadeIn'>
        <Title/>
        <Scoreboard score={score} bestScore={bestScore} />
        <div className='mamaDiv'>
          <Card score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore}/>
      
          </div>

      </div>
  );
  }

  
}
export default App;