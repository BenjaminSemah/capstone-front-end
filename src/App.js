import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import AddCourse from './pages/addCourse/AddCourse';
import Home from './pages/home/home';

function App() {
  return (
    <Router>
      <div className="App mt-4">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add-course" element={<AddCourse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
