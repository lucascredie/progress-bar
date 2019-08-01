import React from 'react';
import ProgressBar from '../src/progress-bar/progress-bar'
import './App.css';

function App() {
  return (
    <div className="App">

      <ProgressBar 
        className="coolBarClass"
        id="sweetId" 

        progress="50"
        total="100"

        type="line" 
        width="250"
        height="50"
        outerRadius="50px"
        radius="20px"

        innerColor="#2e4735"
        outterColor="#46f073"
        animationDuration="300ms"
      />
      
    </div>
  );
}

export default App;
