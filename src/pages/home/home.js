import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
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
    <Container>
      <Pagination />
    </Container>
  );
};

export default Home;
