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
    <>
      <div className="pt-4">
        <table className="table reservationss">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={reservation.id}>
                <th scope="row">{index}</th>
                <td>{format(new Date(reservation.date), 'MMMM D, YYYY')}</td>
                <td>{reservation.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Reservation;
