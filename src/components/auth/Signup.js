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
    <section className="">
      <div className="form-outline m-4 ">
        <h2 className="mb-4 text-center">Welcome to your Home of Golf</h2>
        <form onSubmit={registerUser}>
          <h4 className="m-4 text-center">Register As New User</h4>
          <div className="form-outline mb-4">
            <input
              type="email"
              className="form-control"
              id="Email1"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
              onChange={(e) => setPassowrd(e.target.value)}
              value={password}
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              className="form-control"
              id="confirm_password"
              placeholder="Confirm password"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              value={passwordConfirmation}
            />
          </div>
          <div className="">
            <div className="row">
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-success btn-block mb-4">Register</button>
              </div>
            </div>
          </div>
        </form>
        <div className="col-md-12 col-lg-12 col-sml-12  text-center">
          <p>Already have an account?</p>
          {' '}
          <Link to="/login">
            <button type="button" className="btn btn-success btn-block mb-4 ">Login</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
