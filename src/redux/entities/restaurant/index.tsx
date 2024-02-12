import {createSlice} from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../moks-data/normalized-mock";

type NormalizedRestaurant = {
	id: string;
	name: string;
	menu: string[];
	reviews: string[];
}
type RestaurantEntities = {
	[id: string]: NormalizedRestaurant;
}
export const restaurantsSlice = createSlice({
	name: 'restaurant',
	initialState: {
		entities: normalizedRestaurants.reduce((accum: RestaurantEntities, restaurant) => {
			accum[restaurant.id] = restaurant;
			return accum;
		}, {}),
		ids: normalizedRestaurants.map(({id}) => id),
	},
	reducers: {},
});
