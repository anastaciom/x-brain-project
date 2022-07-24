import { configureStore } from "@reduxjs/toolkit";
import decrementAmountOfProduct from "./cartReducer";
import incrementAmountOfProduct from "./cartReducer";
import calculateTheTotalPurchase from "./cartReducer";

const store = configureStore({
  reducer: {
    cart: calculateTheTotalPurchase,
    increment: incrementAmountOfProduct,
    decrement: decrementAmountOfProduct,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
