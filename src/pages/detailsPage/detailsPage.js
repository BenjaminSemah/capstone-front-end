import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './detailsPage.css';
import { fetchCourseID } from '../../redux/coursesSlice';

const DetailsPage = () => {
  const courseDetails = useSelector(({ course }) => course.detail);
  console.log(courseDetails);
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourseID(id));
  }, [id]);
  return <div className="pt-4">{courseDetails.name}</div>;
};
export default DetailsPage;
