import { useDispatch, useSelector } from 'react-redux';
import { FC, } from 'react';
import { selectorDishById } from '../../redux/entities/dish/selectors.tsx';
import {  RootState } from '../../redux';
import { Counter } from '../counter/component.tsx';
import { decrement, increment, selectProductAmountById } from '../../redux/ui/cart';
import { Dish } from './component.tsx';

type Props = {
	dishId: string,
}

export type DishType = {
	id: string;
	name: string;
	price: number;
	ingredients: string[];
}
export const DishContainer: FC<Props> = ({dishId}) => {
	const dispatch = useDispatch();
	const dish: DishType = useSelector((state: RootState) => selectorDishById(state, dishId));
	const amount = useSelector((state: RootState) => selectProductAmountById(state, dishId));

	if (!dish) return null;
	return (
		<>
			<Dish {...dish}/>
			<Counter
				increment={() => {
					dispatch(increment(dishId))
				}}
				decrement={() => {
					dispatch(decrement(dishId))
				}}
				value={amount}
			/>
		</>
	);
};
