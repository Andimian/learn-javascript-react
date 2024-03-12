import { createSlice } from "@reduxjs/toolkit";

const initialState: Record<string, Record<string, number>> = {};

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
		increment: (state, { payload: {dishId, restaurantId} }) => {
			if (!state[restaurantId]) {
				state[restaurantId] = {};
			}

			state[restaurantId][dishId] = (state[restaurantId][dishId] || 0) + 1;
		},
		decrement: (state, { payload: {dishId, restaurantId} }) => {
			if (!state[restaurantId]) {
				state[restaurantId] = {};
			}

			state[restaurantId][dishId] = (state[restaurantId][dishId] || 0) - 1;
		},
		setAmount: (state, { payload: {dishId, restaurantId, amount} }) => {
			state[restaurantId][dishId] = amount;
			if (state[restaurantId][dishId] <= 0) {
				delete state[restaurantId][dishId];
			}
		},
	},
	selectors: {
		selectProductAmountById: (state, productId) => {
			return state[productId] || 0;
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
export const { increment, decrement, setAmount } = cartSlice.actions;
