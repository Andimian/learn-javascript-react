import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const initialState: Record<string, Record<string, number>> = {};
const initialState: Record<string, number> = {};

export interface SetAmountParams {
	// restaurantId: string;
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

	initialState: {
		dishId: number,
	}
	, то есть по
	* каждому ресторану у нас кусочек корзины и потом когда будем доставать - будем доставать кусок корзины по
	* конкретному ресторану (сначала достанем список id ресторанов, и на каждый из них отрисуем блок с блюдами
	* в корзине этого ресторана)*/
	initialState,
	reducers: {
		setAmount: (state, action: PayloadAction<SetAmountParams>) => {
			// const { restaurantId, dishId, amount } = action.payload;
			const { dishId, amount } = action.payload;
			if (!state.dishId) {
				state[dishId] = amount;
			}
			// state[restaurantId][dishId] = amount;
			// if (state[restaurantId][dishId] <= 0) {
			if (state.dishId <= 0) {
				delete state[dishId];
				// if (!Object.keys(state[restaurantId])?.length) {
				// 	delete state[restaurantId];
				// }
			}
		},
		clearCart: (state) => {
			Object.keys(state).forEach((key: string) => delete state[key]);
		},
	},
	selectors: {
		selectDishAmountById: (
			state,
			// restaurantId: string,
			dishId: string
		) => {
			// return state[restaurantId] && state[restaurantId][productId]
			// 	? state[restaurantId][productId]
			// 	: 0;
			return state[dishId]
				? state[dishId]
				: 0;
		},

		selectState: (state) => {
			return state;
		},

		// selectProductAmount: (state) => {
		// 	return Object.values(state).reduce(
		// 		(acc: number, dishesWithAmount: Record<string, number>) =>
		// 			acc +
		// 			Object.values(dishesWithAmount).reduce(
		// 				(acc, amount) => acc + amount,
		// 				0
		// 			),
		// 		0
		// 	);
		// },
		selectProductAmount: (state) => {
			return Object.values(state).reduce((acc: number, amount: number) => acc + amount, 0);
		},

		/* Получить все блюда из текущего стейта
		* Короче тут есть косяк с циклической перерисовкой */
		selectCartProductIds: (state) => Object.entries(state),

	},
});

export const {
	selectDishAmountById,
	selectProductAmount,
	selectCartProductIds,
	selectState,
} = cartSlice.selectors;
export const { setAmount, clearCart } = cartSlice.actions;
