/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { createReservation } from '../../redux/reservationSlice';

const AddReservation = ({ item }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const data = useSelector(({ course }) => course.courses);
  const coursed = item?.filter((course) => course.id);
  console.log(coursed);
  const currentUser = useSelector((state) => state.currentUserr.current);
  const createReserve = () => {
    dispatch(
      createReservation({
        city,
        date,
        user_id: currentUser.id,
        course_id: 1,
      }),
    );
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
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <button type="submit" onClick={createReserve}>
          Reserve
        </button>
      </form>
    </>
  );
};

export default AddReservation;
