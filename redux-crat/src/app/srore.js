import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/products/productsSlice'
import cartSlice from "../features/cart/cartSlice";

export const store = configureStore({
    reducer:{
     product:productsReducer,
     cart:cartSlice
    }
})