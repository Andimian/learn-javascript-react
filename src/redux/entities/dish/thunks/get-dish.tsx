import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const getDish = createAsyncThunk<Returned, ThunkArg, ThunkApiConfig>(
	'dish/getDish',
	async () => {
		const response = await fetch('http://localhost:3001/api/dishes');
		const result = await response.json();
		return result;
	},
	// {condition: (_, {getState}) => !selectorDishById(getState()).length}
);

// export const getDishes = createAsyncThunk(
// 	"dishes/getDishes",
// 	async() => {
// 		const response = await fetch("http://localhost:3001/api/dishes");
//
// 		const result = await response.json();
//
// 		return result;
// 	},
// 	// { condition: (_, { getState }) => !selectDishIds(getState())?.length }
// );