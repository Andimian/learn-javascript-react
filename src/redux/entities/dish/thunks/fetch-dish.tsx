import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDish = createAsyncThunk(
	'dish/fetchDish',
	async () => {
		const response = await fetch('http://localhost:3001/api/dishes');
		const result = await response.json();
		return result;
	},
	// {condition: (_, {getState}) => !selectorDishById(getState()).length}
);
