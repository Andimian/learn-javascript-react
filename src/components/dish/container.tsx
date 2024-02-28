import { useDispatch, useSelector } from 'react-redux';
import { FC, useCallback, } from 'react';
import {  RootState } from '../../redux';
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
export const DishContainer: FC<Props> = ({dish}) => {
	const {id: dishId} = dish;
	const amount = useSelector((state: RootState) => selectProductAmountById(state, dishId));
	const dispatch = useDispatch();
	const handleSetAmount = useCallback(
		(amount) => dispatch(setAmount({dishId, amount})),
		[dishId, dispatch]
	);
	if (!dish) return null;
	return (
		<>
			<Dish dish={dish} amount={amount} setAmount={handleSetAmount}/>
		</>
	);
};
