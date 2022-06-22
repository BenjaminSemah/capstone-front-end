import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import courseReducer from './coursesSlice';
import authReducer from '../reducers/auth';

const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
