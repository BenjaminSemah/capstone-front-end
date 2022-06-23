/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiURL = 'http://localhost:3001/current_user';
const userToken = JSON.parse(localStorage.getItem('userAuth'));

const initialState = {
  current: {},
};

export const fetchCurrent = createAsyncThunk('user/fetchCurrent', () => fetch(`${apiURL}`, {
  headers: { Authorization: userToken },
}).then((resp) => resp.json()));

const currentUserSlice = createSlice({
  name: 'curentUser',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCurrent.fulfilled, (state, action) => {
      state.current = action.payload;
    });
  },
});

export default currentUserSlice.reducer;
