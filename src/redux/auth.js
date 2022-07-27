import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const initialState = {
  name: '',
  email: '',
  loggedIn: false,
  userId: '',
  signedUp: false,
};

// Constants
const SIGN_UP = 'USER/SIGN_UP';
const LOGIN = 'USER/LOGIN';
const LOGOUT = 'USER/LOGOUT';

// Actions
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
export const userReducer = (state = initialState, action) => {
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

const APIuserSignUp = (userInfo) => async (dispatch) => {
  const {
    name, email, password, passwordConfirmation,
  } = userInfo;
  try {
    const response = axios({
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
    });

    const result = await response;
    const { headers } = result;
    const { authorization } = headers;
    localStorage.setItem('userAuth', JSON.stringify(authorization));
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

export const APIuserSignIn = (cardentials) => async (dispatch) => {
  const { email, password } = cardentials;
  try {
    const response = axios({
      method: 'post',
      url: `${baseUrl}/login`,
      data: {
        user: {
          email,
          password,
        },
      },
    });

    const result = await response;
    const { data } = result;
    const userData = data.data.created_date;
    const { headers } = result;
    const { authorization } = headers;
    const currentUser = {
      name: userData.name,
      email: userData.email,
      loggedIn: 'in',
      userId: userData.id,
      signedUp: true,
    };
    localStorage.setItem('userAuth', JSON.stringify(authorization));

    dispatch(login(currentUser));
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

export const APIuserLogOut = (auth) => async (dispatch) => {
  try {
    await fetch(`${baseUrl}/logout`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${auth}`,
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

export default APIuserSignUp;
