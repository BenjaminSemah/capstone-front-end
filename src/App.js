import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { fetchCourses } from './redux/coursesSlice';
import Home from './pages/home/home';
import DeleteCourse from './pages/deleteCourse/deleteCourse';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/delete-course" element={<DeleteCourse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
