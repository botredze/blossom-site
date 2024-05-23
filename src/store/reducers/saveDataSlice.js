import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tokenA: "",
  listfavorites: [],
  listBasket: [],
};

const saveDataSlice = createSlice({
  name: "saveDataSlice",
  initialState,
  reducers: {
    changeTokenA: (state, action) => {
      state.tokenA = action.payload;
    },
    changeFavorites: (state, action) => {
      state.listfavorites = action.payload;
    },
    /// add counter
    addListBasket: (state, action) => {
      const existingOrderIndex = state.listBasket.findIndex(
        (obj) => +obj.codeid === +action.payload.codeid
      );
      if (existingOrderIndex !== -1) {
        // Если заказ с таким codeid уже существует, увеличиваем count
        state.listBasket = state.listBasket.map((obj, index) => {
          if (index === existingOrderIndex) {
            return { ...obj, count: obj.count + 1 };
          }
          return obj;
        });
      } else {
        // Иначе добавляем новый заказ
        state.listBasket = [
          ...state.listBasket,
          { count: 1, ...action.payload },
        ];
      }
    },
    /// delete counter
    delListBasket: (state, action) => {
      const codeid = action.payload;
      state.listBasket = state.listBasket
        ?.map((obj) => {
          if (+obj.codeid === +codeid && obj.count > 0) {
            return { ...obj, count: obj.count - 1 };
          }
          return obj;
        })
        .filter((obj) => {
          return obj.count > 0;
        });
    },
    //// для удаления всего объекта сразу
    delEveryBasket: (state, action) => {
      const { codeid } = action.payload;
      state.listBasket = state.listBasket.filter(
        (obj) => obj.codeid !== codeid
      );
    },
    //// для очистки
    clearBasket: (state, action) => {
      state.listBasket = [];
    },
  },
});

export const {
  changeTokenA,
  changeFavorites,
  addListBasket,
  delListBasket,
  delEveryBasket,
  clearBasket,
} = saveDataSlice.actions;

export default saveDataSlice.reducer;
