import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId, TReview } from './thunks/get-reviews.ts';

const entityAdapter = createEntityAdapter<TReview>();

export const reviewSlice = createSlice({
	name: 'review',
	initialState: entityAdapter.getInitialState,
	reducers: {},
	extraReducers: (builder) => {
		// builder.addMatcher()) // можно проверить соответствует ли action по названию (типу) данному matcher-у
		builder
			.addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
				// .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
				entityAdapter.addMany(state, payload);
			});
	},
});
