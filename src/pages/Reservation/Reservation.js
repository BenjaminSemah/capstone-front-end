import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/reservationSlice';
import './Reservation.css';

const Reservation = () => {
  const authuser = localStorage.getItem('userAuth');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservations());
  }, []);
  const res = useSelector((state) => state.reservation);
  const { reservations } = res;

  return (
    <div className="pt-5">
      {!authuser ? (
        <div className="text-center my-4">
          <h3> To see this page you need to</h3>
          <h5>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <span>Login</span>
            </Link>
          </h5>
        </div>
      ) : (
        <div className="pt-5">
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
                <tr key={Math.random()}>
                  <th scope="row">{index + 1}</th>
                  <td>{reservation.date}</td>
                  <td>{reservation.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Reservation;
