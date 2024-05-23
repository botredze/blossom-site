import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  typeFace: 1,
};

const inputSlice = createSlice({
  name: "inputSlice",
  initialState,
  reducers: {
    changeTypeFace: (state, action) => {
      state.typeFace = action.payload;
    },
  },
});

export const { changeTypeFace } = inputSlice.actions;

export default inputSlice.reducer;
