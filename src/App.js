import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchCourses } from './redux/coursesSlice';
import Navbar from './components/navbar';
import NormalRoute from './components/NormalRoute';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './components/auth/Signup';
import Login from './components/auth/login';
import withAuth from './components/auth/withAuth';
// import Home from './pages/home/home';
// import DeleteCourse from './pages/deleteCourse/deleteCourse';
// import AddCourse from './pages/addCourse/AddCourse';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" component={NormalRoute} />
          <Route
            exact
            path="/protected_route"
            component={withAuth(ProtectedRoute)}
          />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Routes>
        {/* <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route exact path="/delete-course" element={<DeleteCourse />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
