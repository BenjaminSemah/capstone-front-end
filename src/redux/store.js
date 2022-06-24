import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import courseReducer from './coursesSlice';
import { userReducer } from './auth';
import reservationSlice from './reservationSlice';
import currentUserSlice from './currentUserSlice';

const store = configureStore({
  reducer: {
    UserReducer: userReducer,
    course: courseReducer,
    reservation: reservationSlice,
    currentUserr: currentUserSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
