/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  courses: [],
  error: '',
};

export const fetchCourses = createAsyncThunk('course/fetchCourses', () => axios
  .get('http://localhost:3000/api/courses')
  .then((response) => response.data));

const courseSlice = createSlice({
  name: 'course',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    });
    builder.addCase(fetchCourses.rejected, (state, action) => {
      state.loading = false;
      state.courses = [];
      state.error = action.error.message;
    });
  },
});

export default courseSlice.reducer;
