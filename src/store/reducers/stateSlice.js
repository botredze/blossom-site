import { createSlice } from "@reduxjs/toolkit";

import roze from "../../assets/images/roze.png";
import fire from "../../assets/images/fire.png";
import klub from "../../assets/images/klubn.png";
import fruit from "../../assets/images/fruit.png";

const initialState = {
  alertText: {
    text: "",
    backColor: "",
    state: false,
  },
  listPrice: [
    { id: 0, name: "", active: true, start: 0, end: 1000000 },
    { id: 1, name: "до 2 000 сом", active: false, start: 0, end: 2000 },
    {
      id: 2,
      name: "2 0000 - 4 0000 сом",
      active: false,
      start: 2001,
      end: 4000,
    },
    {
      id: 3,
      name: "4 000 - 8 000 сом",
      active: false,
      start: 4001,
      end: 8000,
    },
    {
      id: 4,
      name: "8 000 - 15 000 сом",
      active: false,
      start: 8001,
      end: 15000,
    },
    { id: 5, name: "от 15 000 сом", active: false, start: 15001, end: 100000 },
  ],

  listCategory: [
    { id: 0, name: "Все", active: true },
    { id: 1014, name: "Цветы", active: false },
    { id: 1, name: "Розы", img: roze, active: false },
    { id: 2, name: "Микс букеты",  active: false },
    { id: 3, name: "В коробке", active: false },
    { id: 5, name: "Акции/Хиты", img: fire, active: false },
    // { id: 10413, name: "Хиты", img: fire, active: false },
    // { id: 0, name: "Акции", img: roze, active: false },
    // { id: 10437, name: "Шары", active: false },
    // { id: 10438, name: "Клубника", img: klub, active: false },
    // { id: 10439, name: "Сьедобные", img: fruit, active: false },
  ],
  lookPrice: false,
};

const stateSlice = createSlice({
  name: "stateSlice",
  initialState,
  reducers: {
    changeAlertText: (state, action) => {
      state.alertText = action.payload;
    },
    changeListPrice: (state, action) => {
      state.listPrice = action.payload;
    },
    changeListCategory: (state, action) => {
      state.listCategory = action.payload;
    },
    changeLookPrice: (state, action) => {
      state.lookPrice = action.payload;
    },
  },
});

export const {
  changeAlertText,
  changeListPrice,
  changeListCategory,
  changeLookPrice,
} = stateSlice.actions;

export default stateSlice.reducer;
