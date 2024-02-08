import {createSlice} from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../moks-data/normalized-mock";

type Normalized = {
	id: string;
	name: string;
	price: number;
	ingredients: string[];
}
type Entities = {
	[id: string]: Normalized;
}
export const dishSlice = createSlice({
	name: 'dish',
	initialState: {
		entities: normalizedDishes.reduce((accum: Entities, dish) => {
			accum[dish.id] = dish;
			return accum;
		}, {}),
		ids: normalizedDishes.map(({id}) => id),
	},
	reducers: {},
});
