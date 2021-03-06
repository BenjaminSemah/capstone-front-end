/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  reservations: [],
  error: '',
};

const userToken = JSON.parse(localStorage.getItem('userAuth'));

export const fetchReservations = createAsyncThunk(
  'courses/fetchReservations',
  () => axios
    .get('http://localhost:3001/api/reservations', {
      headers: { Authorization: userToken },
    })
    .then((response) => response.data),
);

export const createReservation = createAsyncThunk(
  'reservations/createReservation',
  async (reserve) => {
    const response = await fetch('http://localhost:3001/api/reservations', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: userToken,
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(reserve),
    });

    const result = await response.json();

    return result;
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
