import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../data/types";

const cart = createSlice({
  name: "cart",
  initialState: {
    cardsItem: [
      {
        amount: 0,
        id: 0,
        image: "",
        price: 0,
        productDescription: "",
        productTitle: "",
      } as IData,
    ],
    total: 0,
  },
  reducers: {
    calculateTheTotalPurchase(state) {
      const cart = state.cardsItem.reduce(
        (acc, value) => {
          const total = value.price * value.amount;
          acc.total += total;
          return acc;
        },
        { total: 0 }
      );
      state.total = cart.total;
    },

    incrementAmountOfProduct(state, action: PayloadAction<IData>) {
      const productIncrement = state.cardsItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (productIncrement >= 0) {
        state.cardsItem[productIncrement].amount += 1;
      } else {
        const newProduct = {
          ...action.payload,
          amount: (action.payload.amount += 1),
        };
        state.cardsItem.push(newProduct);
      }
    },
    decrementAmountOfProduct(state, action: PayloadAction<IData>) {
      const productDecrement = state.cardsItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (productDecrement >= 0) {
        if (state.cardsItem[productDecrement].amount >= 1) {
          state.cardsItem[productDecrement].amount -= 1;
        }
      } else {
        if (action.payload.amount >= 1) {
          const newProduct = {
            ...action.payload,
            amount: (action.payload.amount -= 1),
          };
          state.cardsItem.push(newProduct);
        }
      }
    },
  },
});
export const {
  calculateTheTotalPurchase,
  incrementAmountOfProduct,
  decrementAmountOfProduct,
} = cart.actions;
export default cart.reducer;
