import { useDispatch, useSelector } from 'react-redux';
import { FC, useCallback, } from 'react';
import {  RootState } from '../../redux';
import { Counter } from '../counter/component.tsx';
import { decrement, increment, selectProductAmountById, setAmount } from '../../redux/ui/cart';
import { Dish } from './component.tsx';

type Props = {
	dish: DishType,
}

export type DishType = {
	id: string;
	name: string;
	price: number;
	ingredients: string[];
}
export const DishContainer: FC<Props> = ({dish: {id}}) => {
	const amount = useSelector((state: RootState) => selectProductAmountById(state, id));
	const dispatch = useDispatch();
	const setAmountFn = useCallback(
		(amount) => dispatch(setAmount({dishId: id, amount})),
		[dishId, dispatch]
	);
	if (!dish) return null;
	return (
		<>
			<Dish dish={dish} amount={amount} setAmount={setAmount}/>
			<Counter
				increment={() => {
					dispatch(increment(dish.id))
				}}
				decrement={() => {
					dispatch(decrement(dish.id))
				}}
				value={amount}
			/>
		</>
	);
};
