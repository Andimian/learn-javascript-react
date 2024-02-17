import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice }               from "./entities/restaurant";
import {  dishSlice } from './entities/dish';
import { reviewSlice } from './entities/review';
import { userSlice } from './entities/user';
import { cartSlice } from './ui/cart';
import { requestSlice } from './ui/request';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
	reducer: combineSlices(restaurantsSlice, reviewSlice, dishSlice, userSlice,  cartSlice, requestSlice),
})