import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReservation } from '../../redux/reservationSlice';
import decoded from '../../helpers/token';

const AddReservation = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');

  const createReserve = () => {
    dispatch(createReservation({
      city,
      date,
      user_id: decoded.sub,
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
      <form className="delete-courses">
        <label htmlFor="city">
          City:
          <br />
          <input id="city" name="city" onChange={handleCity} />
        </label>
        <label htmlFor="date">
          Date:
          <br />
          <input id="date" name="date" onChange={handleDate} />
        </label>
        <button type="submit" onClick={createReserve}>Reserve</button>
      </form>
    </>
  );
};

export default AddReservation;
