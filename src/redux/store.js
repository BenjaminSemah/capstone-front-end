import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import courseReducer from './coursesSlice';
import detailsReducer from './detailsSlice';

const store = configureStore({
  reducer: {
    course: courseReducer,
    detail: detailsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
