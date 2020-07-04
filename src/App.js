import React from 'react';
import heart from './heart.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={heart} className="App-logo" alt="logo" />
        <h1>I love you more!</h1>
      </header>
    </div>
  );
}

export default App;
