import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../components/pagination';
import './home.css';

const Home = () => {
  const authuser = localStorage.getItem('userAuth');
  return (
    <>
      {!authuser ? (
        <div className="grid text-center my-4">
          <h2>
            {' '}
            To see this page you need to
          </h2>
          <h3>
            <Link to="/login" className="mt-4" style={{ textDecoration: 'none' }}>
              <span>Login</span>
            </Link>
          </h3>
        </div>
      ) : (
        <Pagination />
      )}
    </>
  );
};

export default Home;
