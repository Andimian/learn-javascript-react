import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from './thunks/get-restaurants.ts';

export type TRestaurant = {
	id: string;
	name: string;
	menu: string[];
	reviews: string[];
}

const entityAdapter = createEntityAdapter<TRestaurant>();

export const restaurantsSlice = createSlice({
	name: 'restaurant',
	initialState: entityAdapter.getInitialState,
	reducers: {},
	extraReducers: (builder) => {
		// builder.addMatcher()) // можно проверить соответствует ли action по названию (типу) данному matcher-у
		builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
			entityAdapter.setAll(state, payload);
		});
	},
});
