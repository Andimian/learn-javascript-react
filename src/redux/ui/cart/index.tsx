import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",

	/* В UI слайсах, в отличие от entities (где есть общепринятая структура закрепленная в документации), нет
	определенной структуры - можно использовать любую структуру. Тут будем использовать пустой объект и в него складывать
	id - это будет ключ, а значением будет количество продукта, который хотим сложить в корзину. */
	initialState: {},

	/* Что за редьюсеры - альтернативный вариант редьюсеров в обычном редаксе, только с более удобным форматом записи.
	 По итогу конструкция будет очень похожа на ту, которую передаем в useReducer, но сейчас писать будет проще. */
	reducers: {
		/* Это конструкция представляет собой action, возьмет ключ "increment" и значение name выше ("cart"), все это
		сложит - это будет type экшена. Значение - это логика, которая будет запускаться если этот action будет задиспатчен.
		Тип тут можно пропускать - он определяется с помощью внутренних механизмов */
		increment: (state, { payload: productId }) => {
			/* В случае с toolkit у нас уже тут в state копия состояния и мы спокойно можем его мутировать - здесь это
			разрешается. */
			state[productId] = (state[productId] || 0) + 1;
		},
		decrement: (state, { payload: productId }) => {
			state[productId] = (state[productId] || 0) - 1;

			if (state[productId] <= 0) {
				delete state[productId];
			}
		},
	},
	/* Тут пример как можно писать селекторы не в отдельном файле, а прямо здесь же. */
	selectors: {
		// Прикол в том, что в state попадаетя
		selectProductAmountById: (state, productId) => state[productId] || 0,
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
export const { increment, decrement } = cartSlice.actions;
