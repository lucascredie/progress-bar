import React from 'react';
import ProgressBar from '../src/progress-bar/progress-bar'
import './App.css';

function App() {
  return (
    <div className="App">

      <ProgressBar
        type="line"
        name="myBar"
        width="240"
        height="50"
        progress="50"
        total="100"
      />
      
    </div>
  );
}

export default App;
