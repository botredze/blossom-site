import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plaintiffType: 1,
  alertText: {
    text: "",
    backColor: "",
    state: false,
  },
  toggleActive: false
};

const typesSlice = createSlice({
  name: "typesSlice",
  initialState,
  reducers: {
    changePlaintiffType: (state, action) => {
      state.plaintiffType = action.payload;
    },
    changeAlertText: (state, action) => {
      state.alertText = action.payload;
    },

    toggleMenu: (state, action) => {
      state.toggleActive = action.payload;
    },
  },
});
export const { changePlaintiffType, changeAlertText,toggleMenu } = typesSlice.actions;

export default typesSlice.reducer;
