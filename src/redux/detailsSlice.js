/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  courses: [],
  error: '',
  details: [],
};

export const fetchCoursesId = createAsyncThunk('courses/fetchCoursesId', (id) => axios.delete(`http://localhost:3000/api/courses/${id}`).then((response) => {
  if (response.status === 200) {
    return id;
  }
  return false;
}));

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCoursesId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCoursesId.fulfilled, (state, action) => {
      state.loading = false;
      state.courses.id = action.payload;
    });
    builder.addCase(fetchCoursesId.rejected, (state, action) => {
      state.loading = false;
      state.courses.id = [];
      state.error = action.error.message;
    });
  },
});

export default detailSlice.reducer;
