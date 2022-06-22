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
      window.location.reload();
    }
    if (loggedIn === 'err') {
      setLoginSuccess(loggedIn);
    }
  }, [state]);
  return (
    <section>
      <h2>Welcome back</h2>

      <form onSubmit={loginUser}>
        <h4>Member Login</h4>
        <div>
          <input
            type="email"
            className="form-control"
            id="Email1"
            placeholder="Useremail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassowrd(e.target.value)}
            value={password}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      <p>
        New here?
        {' '}
        <Link to="/register" style={{ textDecoration: 'none' }}>
          Register
        </Link>
      </p>
    </section>
  );
};

export default Login;
