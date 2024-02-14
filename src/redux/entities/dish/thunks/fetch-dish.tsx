import { createAsyncThunk } from '@reduxjs/toolkit';
import { DishType } from '../../../../components/dish/component.tsx';
import { RootState } from '../../../index.tsx';

export const fetchDish = createAsyncThunk<DishType[], string, { state: RootState }>(
	'dish/fetchDish',
	async () => {
		const response = await fetch('http://localhost:3001/api/dishes', {});
		const result = await response.json();
		return result;
	},
	// {condition: (_, {getState}) => !selectorDishIds(getState(), ).length}
);
