import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchDish } from '../dish/thunks/fetch-dish.tsx';

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
	name: 'review',
	initialState: entityAdapter.getInitialState,
	reducers: {},
	extraReducers: (builder) => {
		// builder.addMatcher()) // можно проверить соответствует ли action по названию (типу) данному matcher-у
		builder
			.addCase(fetchDish.fulfilled, (state, { payload }) => {
				// .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
				entityAdapter.setAll(state, payload);
			});
	},
});
