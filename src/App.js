/* eslint-disable */
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchCourses } from './redux/coursesSlice';
import Register from './components/auth/Signup';
import Login from './components/auth/login';
import Home from './pages/home/home';
import DeleteCourse from './pages/deleteCourse/deleteCourse';
import AddCourse from './pages/addCourse/AddCourse';
import { hitAPIWithLogoutDetails } from './reducers/auth';
import Test from './pages/test';

function App() {
  const [authuser, setAuthUser] = useState([]);
  // const authuser = window.localStorage.getItem('userAuth');
  console.log(authuser);
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userAuth'));
    console.log(user);
    if (user) {
      setAuthUser(user);
    }
    dispatch(fetchCourses());
  }, []);
  return (
    <>
      <Router>
        <NavLink
          to="/test"
          onClick={() => dispatch(hitAPIWithLogoutDetails(authuser))}
        >
          Sign Out
        </NavLink>
        <div className="App">
          {/* <Navbar />
        <Routes>
          <Route exact path="/" element={<NormalRoute />} />
          <Route exact path="/protected_route" element={<WithAuth />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
        </Routes> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/test" element={<Test />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add-course" element={<AddCourse />} />
            <Route exact path="/delete-course" element={<DeleteCourse />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
