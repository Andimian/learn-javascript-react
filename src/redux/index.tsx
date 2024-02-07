import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { restaurantSlice }               from "./entities/restaurant";
import { dishSlice } from './entities/dish';
import { reviewSlice } from './entities/review';
import { userSlice } from './entities/user';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
	reducer: combineSlices(restaurantSlice, dishSlice, reviewSlice, userSlice),
})