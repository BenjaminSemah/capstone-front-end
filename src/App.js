/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from './redux/coursesSlice';
import './App.css';
import Home from './pages/home/home';

function App() {
  return (
    <div className="App mt-4">
      <Home />
    </div>
  );
}

export default App;
