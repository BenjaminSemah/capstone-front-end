import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchCourses } from './redux/coursesSlice';
import Home from './pages/home/home';
import DeleteCourse from './pages/deleteCourse/deleteCourse';
import AddCourse from './pages/addCourse/AddCourse';

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
          <Route path="/add-course" element={<AddCourse />} />
          <Route exact path="/delete-course" element={<DeleteCourse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
