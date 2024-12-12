import { createSlice } from "@reduxjs/toolkit";

export interface BurgerState {
  value: boolean;
}

const initialState: BurgerState = {
  value: false,
};

export const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    toggleBurger: (state) => {
      state.value = !state.value;
    },
    openBurger: (state) => {
      state.value = true;
    },
    closeBurger: (state) => {
      state.value = false;
    },
  },
});

export const { toggleBurger, openBurger, closeBurger } = burgerSlice.actions;

export default burgerSlice.reducer;
