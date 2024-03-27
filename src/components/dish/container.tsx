import { useDispatch, useSelector } from 'react-redux';
import { FC, useCallback, } from 'react';
import {  RootState } from '../../redux';
import { selectDishAmountById, setAmount } from '../../redux/ui/cart';
import { Dish } from './component.tsx';
import { useGetDishesByRestaurantIdQuery } from '../../redux/services/api.ts';

type Props = {
	dishId: string;
	restaurantId: string;
	isClickable: boolean;
}

export type DishType = {
	id: string;
	name: string;
	price: number;
	ingredients: string[];
}
export const DishContainer: FC<Props> = ({restaurantId, dishId, isClickable}) => {
	// const amount = useSelector((state: RootState) => selectDishAmountById(state, restaurantId, dishId));
	const amount = useSelector((state: RootState) => selectDishAmountById(state, dishId));

	/* Старая реализация. Суть в том, что в RTK query грузит "пачками" и вот тут мы загружали по ресторанам,
	* то якобы вот всего блюд может быть мега дохрена, а в одном рестсоране терпимо. Но  */
	const { data: dish } = useGetDishesByRestaurantIdQuery(restaurantId, {
		selectFromResult: (result) => ({
			...result,
			data: result.data?.find((dishItem) => dishId === dishItem.id),
		}),
	});

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
			<Dish dish={dish} amount={amount} isClickable={isClickable} setAmount={handleSetAmount}/>
		</>
	);
};
