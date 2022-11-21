import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  firstName: null,
  llastName: null,
  status: 'not-logged-in',
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = detailsSlice.actions;
export default detailsSlice.reducer;
