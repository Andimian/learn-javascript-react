import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { restaurantSlice }               from "./entities/restaurant";

export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
	reducer: combineSlices(restaurantSlice),
})