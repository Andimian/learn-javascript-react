import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { DishType } from '../../../components/dish/component.tsx';
import { fetchDish } from './thunks/fetch-dish.tsx';

/* Функция, которая генерирует набор готовых редукторов и селекторов для выполнения операций CRUD над нормализованной
структурой состояния, содержащей экземпляры объекта данных определенного типа. Эти функции редуктора могут передаваться
как редукторы в createReducer и createSlice. Их также можно использовать как «мутирующие» вспомогательные функции внутри
createReducer и createSlice. */
const entityAdapter = createEntityAdapter<DishType>();

export const dishSlice = createSlice({
	name: "dish",
	// По умолчанию getInitialState сделает так: { ids: [], entities: {} }
	initialState: entityAdapter.getInitialState(),
	reducers: {},
	/* Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу. Тут подключаем санку. Отличие экстра-редьюсеров
	от обычных в том, что здесь мы не создаем экщен-крейтор, экшены будут создаваться с помощью санки и мы типо говорим,
	 что нам надо обрабатывать экшены, которые не здесь были созданы, а были созданы санкой */
	extraReducers: (builder) => {
		// builder.addMatcher()) // можно проверить соответствует ли action по названию (типу) данному matcher-у
		builder
			.addCase(fetchDish.fulfilled, (state, { payload }) => {
			// .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
				entityAdapter.setAll(state, payload);
		});
	},
});