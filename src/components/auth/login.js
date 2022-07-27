/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { APIuserSignIn } from '../../redux/auth';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.UserReducer);
  const { loggedIn } = state;
  const [loginSuccess, setLoginSuccess] = useState(loggedIn);
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const loginUser = (e) => {
    e.preventDefault();
    if (email === '' || password === '') return;
    const newUser = {
      email,
      password,
    };
    dispatch(APIuserSignIn(newUser));
    setEmail('');
    setPassowrd('');
  };

  useEffect(() => {
    if (loggedIn === 'in') {
      navigate('/', { replace: true });
    }
    if (loggedIn === 'err') {
      setLoginSuccess(loggedIn);
    }
  }, [state]);
  return (
    <section className="form-outline m-4 text-center">
      <h2 className=" m-4 ">Welcome back</h2>

      <form onSubmit={loginUser} className=" m-4 text-center">
        <h4>Member Login</h4>
        <div className=" m-4">
          <input
            type="email"
            className="form-control"
            id="Email1"
            placeholder="Useremail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className=" m-4">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassowrd(e.target.value)}
            value={password}
          />
        </div>
        <div className="d-flex justify-content-around">
          <button type="submit" className="btn btn-success px-4">
            Log In
          </button>
          <Link to="/register">
            <button type="button" className="btn btn-success">
              Register
            </button>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
