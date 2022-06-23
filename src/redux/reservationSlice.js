/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  reservations: [],
  error: '',
};

export const fetchReservations = createAsyncThunk('courses/fetchReservations', () => axios
  .get('http://localhost:3001/api/reservations')
  .then((response) => response.data));

export const createReservation = createAsyncThunk(
  'reservations/createReservation',
  async (reserve) => {
    const reserveData = await axios.post('http://localhost:3001/api/reservations', reserve);
    return reserveData.data;
  },
);

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchReservations.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      state.loading = false;
      state.reservations = action.payload;
    });
    builder.addCase(fetchReservations.rejected, (state, action) => {
      state.loading = false;
      state.reservations = [];
      state.error = action.error.message;
    });
    builder.addCase(createReservation.fulfilled, (state, action) => {
      state.reservations.unshift(action.payload);
    });
  },
});

export default reservationSlice.reducer;
