import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  id: number;
  value: number;
}

const initialState: CounterState[] = [];

export const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      const counter = state.find((counter) => counter.id === action.payload);
      if (counter) {
        counter.value += 1;
      } else {
        state.push({ id: action.payload, value: 2 });
      }
    },
    decrement: (state, action: PayloadAction<number>) => {
      const counter = state.find((counter) => counter.id === action.payload);
      if (counter && counter.value > 1) {
        counter.value -= 1;
      }
    },
    reset: (state, action: PayloadAction<number>) => {
      const counter = state.find((counter) => counter.id === action.payload);
      if (counter) {
        counter.value = 1;
      }
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
