import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'fecha';
import { fetchReservations } from '../../redux/reservationSlice';
import './Reservation.css';

const Reservation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservations());
  }, []);
  const res = useSelector((state) => state.reservation);
  const { reservations } = res;

  return (
    <div>
      {reservations.map((reservation) => (
        <div className="delete-courses" key={reservation.id}>
          <p>{reservation.city}</p>
          <p>{format(new Date(reservation.date), 'MMMM D, YYYY')}</p>
        </div>
      ))}
    </div>
  );
};

export default Reservation;
