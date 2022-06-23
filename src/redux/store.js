import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import courseReducer from './coursesSlice';
import { userReducer } from './auth';
import reservationSlice from './reservationSlice';

const store = configureStore({
  reducer: {
    UserReducer: userReducer,
    course: courseReducer,
    reservation: reservationSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
