import { RootState } from "../../index.tsx";

export const selectorRestaurantModule = (state: RootState) => state.restaurant;

export const selectorRestaurantIds = (state: RootState) => selectorRestaurantModule(state).ids;

export const selectorRestaurantById = (state: RootState, id: string) => selectorRestaurantModule(state).entities[id];

export const selectRestaurantMenuById = (state: RootState, id: string) =>
	selectorRestaurantById(state, id).menu;
