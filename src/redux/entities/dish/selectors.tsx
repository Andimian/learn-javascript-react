import { RootState } from '../../index.tsx';

// Селектор самого слайса, принимает как минимум state
export const selectorDishModule = (state: RootState) => state.dish;

export const selectorDishIds = (state: RootState) => selectorDishModule(state).ids;

export const selectorDishById = (state: RootState, id: string) => selectorDishModule(state).entities[id];
