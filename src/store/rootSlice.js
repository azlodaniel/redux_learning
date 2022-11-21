import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {},
});

export const { increment, decrement, incrementByAmount } = rootSlice.actions;
export default rootSlice.reducer;
