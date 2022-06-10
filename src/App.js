import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch('http://localhost:3000/api/greetings')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="App">
      <h1>Capstone Frontend</h1>
    </div>
  );
}

export default App;
