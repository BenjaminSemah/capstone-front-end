import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { createReservation } from '../../redux/reservationSlice';
import decoded from '../../helpers/token';
import './detailsPage.css';
import { fetchCourseID } from '../../redux/coursesSlice';

const DetailsPage = () => {
  const courseDetails = useSelector(({ course }) => course.detail);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');

  const createReserve = () => {
    dispatch(createReservation({
      city,
      date,
      user_id: decoded.sub,
      course_id: id,
    }));
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const dispatches = useDispatch();
  useEffect(() => {
    dispatches(fetchCourseID(id));
  }, [id]);
  return (
    <>
      <section className="detail-page-course">
        <div className="detail">
          <div className="detail-img">
            <img src={courseDetails.image} alt="golf course" />
          </div>
          <div className="detail_info">
            <h2>{courseDetails.name}</h2>
            <div className="detail_description">{courseDetails.description}</div>
            <div className="detail_items neutral">
              <div>City</div>
              <div className="city">{courseDetails.location}</div>
            </div>
            <div className="detail_items">
              <div>Price of Course</div>
              <div className="price-course">
                $
                {courseDetails.price}
              </div>
            </div>
            <div className="detail_items neutral">
              <div>Duration</div>
              <div className="price-course">
                2 Days
              </div>
            </div>
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
          </div>
        </div>
        <div className="back">
          <Link to="/">
            <button type="button" className="btn1">
              <img
                src="https://www.svgrepo.com/show/310609/caret-left.svg"
                alt="left"
              />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};
export default DetailsPage;
