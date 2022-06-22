import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReservation } from '../../redux/reservationSlice';

const AddReservation = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');

  const createReserve = () => {
    dispatch(createReservation({
      city,
      date,
      user_id: 1,
      course_id: 1,
    }));
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <nav className="navbar">
        <h1>Reserve Your Courses</h1>
        <div className="links">
          {/* <a href="/create">Reservations</a> */}
          <a href="/">Courses</a>
        </div>
      </nav>
      <form className="delete-courses">
        <label htmlFor="city">
          City:
          <input id="city" name="city" onChange={handleCity} />
        </label>
        <label htmlFor="date">
          Date:
          <input id="date" name="date" onChange={handleDate} />
        </label>
        <button type="submit" onClick={createReserve}>Reserve</button>
      </form>
    </>
  );
};

export default AddReservation;
