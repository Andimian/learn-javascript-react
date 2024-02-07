import {createSlice} from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../moks-data/normalized-mock";

type Normalized = {
	id: string;
	userId: string;
	text: string;
	rating: number;
}
type Entities = {
	[id: string]: Normalized;
}
export const reviewSlice = createSlice({
	name: 'review',
	initialState: {
		entities: normalizedReviews.reduce((accum: Entities, review) => {
			accum[review.id] = review;
			return accum;
		}, {}),
		ids: normalizedReviews.map(({id}) => id),
	},
	reducers: {},
});
