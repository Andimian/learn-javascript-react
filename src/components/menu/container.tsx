import { useDispatch, useSelector } from 'react-redux';
import { Menu } from './component.tsx';
import { selectRestaurantMenuById } from '../../redux/entities/restaurant/selectors.tsx';
import { RootState } from '../../redux';
import { useEffect } from 'react';
import { getDishesByRestaurantId } from '../../redux/entities/dish/thunks/get-dishes-by-restaurant-id.tsx';

export type MenuProps = {
	restaurantId: string,
};

export const MenuContainer = ({restaurantId}: MenuProps ) => {
	const dishIds = useSelector((state: RootState) => selectRestaurantMenuById(state, restaurantId))

	const dispatch = useDispatch();
	/* Тут прикол с зависимостями, нам для каждого ресторана надо грузить новое блюдо, поэтому укажем restaurantId */
	useEffect(dispatch(getDishesByRestaurantId(restaurantId)), [restaurantId]);
	return (
		<Menu dishIds={dishIds}/>
	)
};
