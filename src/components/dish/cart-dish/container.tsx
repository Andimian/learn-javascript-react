import { useDispatch, useSelector } from 'react-redux';
import { FC, useCallback, } from 'react';
import { useGetDishByIdQuery } from '../../../redux/services/api.ts';
import { RootState } from '../../../redux';
import { selectDishAmountById, setAmount } from '../../../redux/ui/cart';
import { CartDish } from './component.tsx';

type Props = {
	dishId: string;
	isClickable: boolean;
}

export type DishType = {
	id: string;
	name: string;
	price: number;
	ingredients: string[];
}
export const CartDishContainer: FC<Props> = ({ dishId, isClickable}) => {
	const amount = useSelector((state: RootState) => selectDishAmountById(state, dishId));

	const { data: dish } = useGetDishByIdQuery(dishId);

	const dispatch = useDispatch();

	const handleSetAmount = useCallback(
		(amount: number) =>{
			// dispatch(setAmount({ dishId: dishId, amount, restaurantId }))
			dispatch(setAmount({ dishId: dishId, amount }))
		// }, [dishId, dispatch, restaurantId]
		}, [dishId, dispatch]
	);

	if (!dish) return null;

	return (
		<>
			<CartDish dish={dish} amount={amount} isClickable={isClickable} setAmount={handleSetAmount}/>
		</>
	);
};
