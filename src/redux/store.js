import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import courseReducer from './coursesSlice';
import { userReducer } from './auth';

const store = configureStore({
  reducer: {
    UserReducer: userReducer,
    course: courseReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
