import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import courseReducer from './coursesSlice';
import { userReducertrying } from '../reducers/auth';

const store = configureStore({
  reducer: {
    UserReducer: userReducertrying,
    course: courseReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
