import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from './redux/coursesSlice';
import './App.css';

function App() {
  const courses = useSelector(({ course }) => course.courses);
  console.log(courses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);
  return (
    <div className="App">
      <h1>Capstone Frontend</h1>
    </div>
  );
}

export default App;
