import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Record<string, Record<string, number>> = {};

export interface SetAmountParams {
	restaurantId: string;
	dishId: string;
	amount: number;
}

export const cartSlice = createSlice({
	name: "cart",
	/* Храниться будет примерно так:
	initialState: {
		restaurantId: {
			dishId: number,
		},
	}
	, то есть по
	* каждому ресторану у нас кусочек корзины и потом когда будем доставать - будем доставать кусок корзины по
	* конкретному ресторану (сначала достанем список id ресторанов, и на каждый из них отрисуем блок с блюдами
	* в корзине этого ресторана)*/
	initialState,
	reducers: {
		setAmount: (state, action: PayloadAction<SetAmountParams>) => {
			const { restaurantId, dishId, amount } = action.payload;
			if (!state[restaurantId]) {
				state[restaurantId] = {};
			}
			state[restaurantId][dishId] = amount;
			if (state[restaurantId][dishId] <= 0) {
				delete state[restaurantId][dishId];
				if (!Object.keys(state[restaurantId])?.length) {
					delete state[restaurantId];
				}
			}
		},
		clearCart: (state) => {
			Object.keys(state).forEach((key: string) => delete state[key]);
		},
	},
	selectors: {
		selectProductAmountById: (
			state,
			restaurantId: string,
			productId: string,
			) => {
			return state[restaurantId] && state[restaurantId][productId]
				? state[restaurantId][productId]
				: 0;
		},
		selectProductAmount: (state) =>
			Object.values(state).reduce((acc, dishesWithAmount) => {
				return acc + Object.values(dishesWithAmount).reduce(
					(acc, amount) => acc + amount,
					0
				);
			}, 0),
		selectCartProductIds: (state) => Object.keys(state),
	},
});

export const {
	selectProductAmountById,
	selectProductAmount,
	selectCartProductIds,
} = cartSlice.selectors;
export const { setAmount } = cartSlice.actions;
