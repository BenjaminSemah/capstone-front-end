/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { createReservation } from '../../redux/reservationSlice';

const AddReservation = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [cousreID, setCourse] = useState();
  const data = useSelector(({ course }) => course.courses);
  const navigate = useNavigate();
  const authuser = localStorage.getItem('userAuth');
  const currentUser = useSelector((state) => state.currentUserr.current);
  const createReserve = (event) => {
    event.preventDefault();
    dispatch(
      createReservation({
        city,
        date,
        user_id: currentUser.id,
        course_id: cousreID,
      }),
    );
    navigate('/reservations');
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleCourse = (e) => {
    setCourse(e.target.value);
  };

  return (
    <div className="mt-5">
      {!authuser ? (
        <div className="text-center my-4">
          <h2> To see this page you need to</h2>
          <h3>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <span>Login</span>
            </Link>
          </h3>
        </div>
      ) : (
        <form className="reserve-form mt-5 pt-5" onSubmit={createReserve}>
          <Form.Control
            type="text"
            placeholder="City"
            id="city"
            name="city"
            onChange={handleCity}
          />
          <br />
          <Form.Control
            type="date"
            placeholder="Date"
            id="date"
            name="date"
            onChange={handleDate}
          />
          <br />
          <Form.Select
            onChange={handleCourse}
            aria-label="Default select example"
            defaultValue={cousreID}
          >
            <option disabled>Open this select menu</option>
            {data.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </Form.Select>
          <button className="btn btn-success mt-4" type="submit">
            Reserve
          </button>
        </form>
      )}
    </div>
  );
};

export default AddReservation;
