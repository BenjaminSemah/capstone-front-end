import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCourses } from '../../redux/coursesSlice';
import Pagination from '../../components/pagination';
import './home.css';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);
  return (
    <>
      <Pagination />
    </>
  );
};

export default Home;
