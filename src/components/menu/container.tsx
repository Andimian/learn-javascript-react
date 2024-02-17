import { useDispatch, useSelector } from 'react-redux';
import { Menu } from './component.tsx';
import { selectRestaurantMenuById } from '../../redux/entities/restaurant/selectors.tsx';
import { AppDispatch, RootState } from '../../redux';
import { useEffect, useState } from 'react';
import { getDishesByRestaurantId } from '../../redux/entities/dish/thunks/get-dishes-by-restaurant-id.tsx';
import { selectIsLoading } from '../../redux/ui/request';

export type MenuProps = {
	restaurantId: string,
};

export const MenuContainer = ({restaurantId}: MenuProps ) => {
	// Этот прикол для отображения загрузки
	const [requestId, setRequestId] = useState<string | null>(null);
	const isLoading = useSelector((state: RootState) => selectIsLoading(state, requestId));

	const dishIds = useSelector((state: RootState) => selectRestaurantMenuById(state, restaurantId))
	const dispatch = useDispatch<AppDispatch>();

	/* Тут прикол с зависимостями, нам для каждого ресторана надо грузить новое блюдо, поэтому укажем restaurantId */
	useEffect(() => {
		setRequestId(dispatch(getDishesByRestaurantId(restaurantId)).requestId)
	}, [restaurantId]);

	if (!dishIds.length) return null;

	return (
		<>
			{isLoading
				? ('Loading...')
			: <Menu dishIds={dishIds}/>
			}
		</>
)
};
