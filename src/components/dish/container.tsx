import { useDispatch, useSelector } from 'react-redux';
import { FC, useCallback, } from 'react';
import {  RootState } from '../../redux';
import { selectDishAmountById, setAmount } from '../../redux/ui/cart';
import { Dish } from './component.tsx';
import { useGetDishesByRestaurantIdQuery } from '../../redux/services/api.ts';

type Props = {
	dishId: string;
	restaurantId: string;
}

export type DishType = {
	id: string;
	name: string;
	price: number;
	ingredients: string[];
}
export const DishContainer: FC<Props> = ({restaurantId, dishId}) => {
	const amount = useSelector((state: RootState) => selectDishAmountById(state, restaurantId, dishId));
	const { data: dish } = useGetDishesByRestaurantIdQuery(restaurantId, {
		selectFromResult: (result) => ({
			...result,
			data: result.data?.find((dishItem) => dishId === dishItem.id),
		}),
	});

	const dispatch = useDispatch();

	const handleSetAmount = useCallback(
		(amount: number) =>{
			dispatch(setAmount({ dishId: dishId, amount, restaurantId }))
		}, [dishId, dispatch, restaurantId]
	);

	if (!dish) return null;
	return (
		<>
			<Dish dish={dish} amount={amount} setAmount={handleSetAmount}/>
		</>
	);
};
