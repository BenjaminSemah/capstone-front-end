import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { fetchCourses } from './redux/coursesSlice';
import Home from './pages/home/home';
import DeleteCourse from './pages/deleteCourse/deleteCourse';
import Reservation from './pages/Reservation/Reservation';
import AddReservation from './pages/Reservation/AddReservation';

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
          <Route exact path="/add-reservations" element={<AddReservation />} />
          <Route exact path="/reservations" element={<Reservation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
