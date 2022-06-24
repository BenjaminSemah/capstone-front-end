import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './detailsPage.css';
import { fetchCourseID } from '../../redux/coursesSlice';

const DetailsPage = () => {
  const courseDetails = useSelector(({ course }) => course.detail);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourseID(id));
  }, [id]);
  return (
    <>
      <section className="detail-page-course pt-4">
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
            <div className="reserve">
              <Link to={{ pathname: `/add-reservations/${id}` }}>
                <button type="button" className="detail_btn">
                  Reserve
                  <img
                    src="https://www.svgrepo.com/show/310612/caret-right.svg"
                    alt="left"
                  />
                </button>
              </Link>
            </div>
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
