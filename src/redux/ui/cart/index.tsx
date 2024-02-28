import { createSlice } from "@reduxjs/toolkit";

// const initialState: Record<string, number> = {};
type test = {
	string: number;
}
const initialState: Record<string, test[]> = {};

export const cartSlice = createSlice({
	name: "cart",
	/* Храниться будет примерно так:
	initialState: {
		restaurantId: [
			dishId: number,
		],
	}
	, то есть по
	* каждому ресторану у нас кусочек корзины и потом когда будем доставать - будем доставать кусок корзины по
	* конкретному ресторану (сначала достанем список id ресторанов, и на каждый из них отрисуем блок с блюдами
	* в корзине этого ресторана)*/
	initialState,
	reducers: {
		increment: (state, { payload: {dishId, restaurantId} }) => {
			if (!state[restaurantId]) {
				state[restaurantId]= [];
			}
			if (!state[restaurantId][dishId]) {
				state[restaurantId].dishId= [];
			}
			state.restaurantId[dishId] = 1;
		},
		decrement: (state, { payload: productId }) => {
			// state[productId] = (state[productId] || 0) - 1;
			// if (state[productId] <= 0) {
			// 	delete state[productId];
			// }
		},
		setAmount: (state, { payload: {dishId, amount} }) => {
			// state[dishId] = amount;
			// if (state[dishId] <= 0) {
			// 	delete state[dishId];
			// }
		},
	},
	selectors: {
		selectProductAmountById: (state, productId) => {
			return state[productId] || 0;
		},
		selectProductAmount: (state) =>
			Object.values(state).reduce((acc, amount) => {
				return acc + amount;
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
