import { RootState } from "../../index.tsx";
import { selectorRestaurantById } from '../restaurant/selectors.tsx';

// Селектор самого слайса, принимает как минимум state
export const selectorReviewModule = (state: RootState) => state.review;

export const selectorReviewIds = (state: RootState) => selectorReviewModule(state).ids;

export const selectorReviewById = (state: RootState, id: string) => selectorReviewModule(state).entities[id];

export const selectRestaurantReviewsById = (state: RootState, id: string) =>
	selectorRestaurantById(state, id).reviews;
