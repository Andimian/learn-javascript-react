import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchDish, } from './thunks/fetch-dish.tsx';
import { DishType } from '../../../components/dish/component.tsx';

// Без типизации не обратиться к полю при получении
const entityAdapter = createEntityAdapter<DishType>();

// export const dishSlice = createSlice({
// 	name: 'dish',
// 	initialState: entityAdapter.getInitialState,
// 	/* Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу. Тут подключаем санку. Отличие экстра-редьюсеров
// 	от обычных в том, что здесь мы не создаем экщен-крейтор, экшены будут создаваться с помощью санки и мы типо говорим,
// 	 что нам надо обрабатывать экшены, которые не здесь были созданы, а были созданы санкой */
// 	extraReducers: (builder) =>
// 		builder.addCase(fetchDish.fulfilled, (state, { payload }) => {
// 				entityAdapter.setAll(state, payload);
// 			}
// 		),
// });

export const dishSlice = createSlice({
	name: "dish",
	initialState: entityAdapter.getInitialState(),
	reducers: {},
	extraReducers: (builder) => {
		// builder.addMatcher()) // можно проверить соответствует ли action по названию (типу) данному matcher-у
		builder.addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
			entityAdapter.upsertMany(state, payload);
		});

	},
});