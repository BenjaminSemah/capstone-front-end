/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import APIuserSignUp from '../../redux/auth';

const Register = () => {
  const navigate = useNavigate();

  function navigateToHome() {
    navigate('/', { replace: true });
    window.location.reload();
  }
  const dispatch = useDispatch();
  const state = useSelector((state) => state.UserReducer);
  const { signedUp } = state;
  const [signUpSuccess, setSignUpSucess] = useState(signedUp);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [password, setPassowrd] = useState('');
  const registerUser = (e) => {
    e.preventDefault();
    if (email === '' || name === '' || password === '') return;
    const newUser = {
      email,
      name,
      passwordConfirmation,
      password,
    };
    dispatch(APIuserSignUp(newUser));
    setEmail('');
    setName('');
    setPassowrd('');
    setPasswordConfirmation('');
  };

  useEffect(() => {
    setSignUpSucess(() => signedUp);
    if (signedUp === 'up') {
      setTimeout(() => navigateToHome(), 2800);
    }
  }, [state]);

  return (
    <section>
      <h2>Welcome</h2>
      <form onSubmit={registerUser}>
        <h4>Register</h4>
        <div>
          <input
            type="email"
            className="form-control"
            id="Email1"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter full name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
            onChange={(e) => setPassowrd(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <input
            type="password"
            className="form-control"
            id="confirm_password"
            placeholder="Confirm password"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?
        {' '}
        <Link to="/login" style={{ textDecoration: 'none' }}>
          Login
        </Link>
      </p>
    </section>
  );
};

export default Register;
