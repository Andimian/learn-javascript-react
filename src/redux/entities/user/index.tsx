import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers, TUser } from './thunks/get-users.ts';

const entityAdapter = createEntityAdapter<TUser>();

export const userSlice = createSlice({
	name: 'user',
	initialState: entityAdapter.getInitialState,
	reducers: {},
	extraReducers: (builder) => {
		// builder.addMatcher()) // можно проверить соответствует ли action по названию (типу) данному matcher-у
		builder
			.addCase(getUsers.fulfilled, (state, { payload }) => {
				// .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
				entityAdapter.setAll(state, payload);
			});
	},
});
