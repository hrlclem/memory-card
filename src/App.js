import './App.css';
import React, { useState } from 'react';
import Header from './components/Header.js';
import Cardboard from './components/Cardboard';

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [reset, setReset] = useState("true");



  return (
    <div className="App">
      <Header />
      <Cardboard />
    </div>
  );
}

export default App;
