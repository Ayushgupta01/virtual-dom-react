import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="date-component">
        {new Date().toString()}
      </div>
    </div>
  );
}

export default App;
