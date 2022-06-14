import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import courseReducer from './coursesSlice';

const store = configureStore({
  reducer: {
    course: courseReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
