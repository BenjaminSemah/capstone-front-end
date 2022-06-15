/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  courses: [],
  error: '',
};

export const fetchCourses = createAsyncThunk('courses/fetchCourses', () => axios
  .get('http://localhost:3000/api/courses')
  .then((response) => response.data));

export const deleteCourse = createAsyncThunk('courses/deleteCourse', (id) => axios.delete(`http://localhost:3000/api/courses/${id}`).then((response) => {
  if (response.status === 200) {
    return id;
  }
  return false;
}));

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
    builder.addCase(deleteCourse.fulfilled, (state, action) => {
      if (action.payload) {
        state.courses = state.courses.filter((c) => c.id !== action.payload);
      }
    });
  },
});

export default courseSlice.reducer;
