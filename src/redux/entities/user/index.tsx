import {createSlice} from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../moks-data/normalized-mock";

type NormalizedRestaurant = {
	id: string;
	name: string;
}

type RestaurantEntities = {
	[id: string]: NormalizedRestaurant;
}

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		entities: normalizedUsers.reduce((accum: RestaurantEntities, user) => {
			accum[user.id] = user;
			return accum;
		}, {}),
		ids: normalizedUsers.map(({id}) => id),
	},
	reducers: {},
});
