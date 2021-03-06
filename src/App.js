import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchCourses } from './redux/coursesSlice';
import { fetchCurrent } from './redux/currentUserSlice';
import Register from './components/auth/Signup';
import Login from './components/auth/login';
import Home from './pages/home/home';
import DeleteCourse from './pages/deleteCourse/deleteCourse';
import DetailsPage from './pages/detailsPage/detailsPage';
import AddCourse from './pages/addCourse/AddCourse';
import Reservation from './pages/Reservation/Reservation';
import AddReservation from './pages/Reservation/AddReservation';
import Navbar from './components/Navbar/Navbar';
import NotFound from './pages/notFound/notFound';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrent());
    dispatch(fetchCourses());
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route exact path="/delete-course" element={<DeleteCourse />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route exact path="/add-reservations" element={<AddReservation />} />
          <Route exact path="/reservations" element={<Reservation />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
