/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { FaRegUser, FaUser } from 'react-icons/fa';
// import { HiOutlineMailOpen } from 'react-icons/hi';
// import { FiPhoneCall } from 'react-icons/fi';
// import { RiLockPasswordLine } from 'react-icons/ri';
import hitAPIWithSignupDetails from '../../reducers/auth';
// import styles from './Login.module.scss';

const Register = () => {
  const navigate = useNavigate();

  function goToHomePage() {
    navigate('/', { replace: true });
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
    console.log('start hit api');
    dispatch(hitAPIWithSignupDetails(newUser));
    console.log('end hit api');
    setEmail('');
    setName('');
    setPassowrd('');
    setPasswordConfirmation('');
  };

  useEffect(() => {
    setSignUpSucess(() => signedUp);
    if (signedUp === 'up') {
      setTimeout(() => goToHomePage(), 3000);
    }
  }, [state]);

  return (
    <section>
      {/* <div className={styles.loginIcon}><FaUser /></div> */}
      <h2>Welcome</h2>
      <form onSubmit={registerUser}>
        <h4>Register</h4>
        <div>
          {/* <span className={styles.icon}><HiOutlineMailOpen /></span> */}
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
          {/* <span className={styles.icon}><FaRegUser /></span> */}
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
          {/* <span className={styles.icon}><RiLockPasswordLine /></span> */}
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
          {/* <span className={styles.icon}><FiPhoneCall /></span> */}
          <input
            type="password"
            className="form-control"
            id="name"
            placeholder="Confirm password"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{' '}
        <Link to="/login" style={{ textDecoration: 'none' }}>
          Login
        </Link>
      </p>
    </section>
  );
};

export default Register;
