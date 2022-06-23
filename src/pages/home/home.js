/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Pagination from '../../components/pagination';
import './home.css';

const Home = () => {
  const authuser = localStorage.getItem('userAuth');
  return (
    <>
      {!authuser ? (
        <h2 className="d-flex justify-content-center">
          {' '}
          you need to
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <span className="fs-6">Login</span>
          </Link>
        </h2>
      ) : (
        <Pagination />
      )}
    </>
  );
};

export default Home;
