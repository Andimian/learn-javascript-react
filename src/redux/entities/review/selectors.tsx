import { RootState } from "../../index.tsx";

// Селектор самого слайса, принимает как минимум state
export const selectorReviewModule = (state: RootState) => state.review;

export const selectorReviewIds = (state: RootState) => selectorReviewModule(state).ids;

export const selectorReviewById = (state: RootState, id: string) => selectorReviewModule(state).entities[id];