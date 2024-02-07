import { RootState } from "../../index.tsx";

// Селектор самого слайса, принимает как минимум state
export const selectorUsertModule = (state: RootState) => state.user;

export const selectorUsertIds = (state: RootState) => selectorUsertModule(state).ids;

export const selectorUsertById = (state: RootState, id: string) => selectorUsertModule(state).entities[id];