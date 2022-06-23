import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
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
import { APIuserLogOut } from './redux/auth';
import Reservation from './pages/Reservation/Reservation';
import AddReservation from './pages/Reservation/AddReservation';

function App() {
  const authuser = localStorage.getItem('userAuth');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrent());
    dispatch(fetchCourses(authuser));
  }, []);

  return (
    <Router>
      <NavLink to="/login" onClick={() => dispatch(APIuserLogOut(authuser))}>
        Sign Out
      </NavLink>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route exact path="/delete-course" element={<DeleteCourse />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route exact path="/add-reservations//:course_id" element={<AddReservation />} />
          <Route exact path="/reservations" element={<Reservation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
