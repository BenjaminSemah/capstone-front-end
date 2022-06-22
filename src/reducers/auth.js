import axios from 'axios';
/* eslint-disable */
const baseUrl = 'http://localhost:3001';

const initialState = {
  name: '',
  email: '',
  loggedIn: false,
  userId: '',
  signedUp: false,
};

// Constants
const SIGN_UP = 'SIGN_UP';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Action Creators
export const signUp = (payload) => ({
  type: SIGN_UP,
  payload,
});

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const logout = (payload) => ({
  type: LOGOUT,
  payload,
});

// Reducesrs
export const userReducertrying = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_UP:
      return {
        ...payload,
      };
    case LOGIN:
      return payload;
    default:
      return state;
  }
};

const hitAPIWithSignupDetails = (details) => async (dispatch) => {
  const { name, email, password, passwordConfirmation } = details;
  try {
    const signInRespons = axios({
      method: 'post',
      url: `${baseUrl}/signup`,
      data: {
        user: {
          email,
          name,
          password,
          password_confirmation: passwordConfirmation,
        },
      },
    }).then((response) => console.log(response));

    const ress = await signInRespons;
    console.log('###########################');
    console.log(ress);
    console.log('###########################');
    dispatch(
      signUp({
        name: '',
        email: '',
        loggedIn: false,
        userId: '',
        signedUp: 'up',
      }),
    );
  } catch (error) {
    dispatch(
      signUp({
        name: '',
        email: '',
        loggedIn: false,
        userId: '',
        signedUp: 'down',
      }),
    );
  }
};

export const hitAPIWithSigninDetails = (details) => async (dispatch) => {
  const { email, password } = details;
  try {
    const signUpRespons = axios({
      method: 'post',
      url: `${baseUrl}/login`,
      data: {
        user: {
          email,
          password,
        },
      },
    });

    const res = await signUpRespons;
    // console.log(res);
    const { data } = res;

    const userData = data.data.created_date;

    const { headers } = res;

    const { authorization } = headers;
    console.log('@@@@@@@@@@@@@@@@@@@@@@@');
    console.log(authorization);
    console.log('@@@@@@@@@@@@@@@@@@@@@@@');
    const mainUser = {
      name: userData.name,
      email: userData.email,
      loggedIn: 'in',
      userId: userData.id,
      signedUp: true,
    };

    localStorage.setItem('userAuth', JSON.stringify(authorization));
    localStorage.setItem('bookDoctorUser', JSON.stringify(mainUser));

    dispatch(login(mainUser));
  } catch (error) {
    dispatch(
      login({
        name: '',
        email: '',
        loggedIn: 'err',
        userId: '',
        signedUp: false,
      }),
    );
  }
};

export const hitAPIWithLogoutDetails = (auth) => async (dispatch) => {
  const { userAuth } = auth;
  try {
    await fetch(`${baseUrl}/logout`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${userAuth}`,
      },
    });

    dispatch(
      signUp({
        ...initialState,
        loggedIn: 'out',
        signedUp: false,
      }),
    );

    localStorage.removeItem('userAuth');
    localStorage.removeItem('bookDoctorUser');
  } catch (error) {
    dispatch(
      signUp({
        name: '',
        email: '',
        loggedIn: 'out',
        userId: '',
        signedUp: false,
      }),
    );
  }
};

export default hitAPIWithSignupDetails;
