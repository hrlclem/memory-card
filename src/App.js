import './App.css';
import React, { useState } from 'react';
import Header from './components/Header.js';
import Cardboard from './components/Cardboard';

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [reset, setReset] = useState("true");

  const checkEndGame = () => {
      if(currentScore>highScore){
        setHighScore(currentScore);
      }
      setCurrentScore(0);
      setReset(true);
  }

  const checkHighScore = () => {
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }  
  }

  const incrementScore = () => {
    setCurrentScore (() => currentScore + 1)
    setReset(false);
  }

  return (
    <div className="App">
      <Header 
        score={currentScore} 
        highScore={highScore}
        />

      <Cardboard 
        reset={reset}
        checkEndGame={checkEndGame}
        checkHighScore={checkHighScore}
        incrementScore={incrementScore}
      />
    </div>
  );
}

export default App;
