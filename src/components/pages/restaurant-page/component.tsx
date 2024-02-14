import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorRestaurantIds } from '../../../redux/entities/restaurant/selectors.tsx';
import { getRestaurants } from '../../../redux/entities/restaurant/thunks/get-restaurants.ts';
import { RestaurantTabs } from '../../restaurants-tabs/component.tsx';
import { Restaurant } from '../../restaurants/restaurant.tsx';
import { getUsers } from '../../../redux/entities/user/thunks/get-users.ts';

export const RestaurantPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getRestaurants())
		dispatch(getUsers())
	}, []);
	const restaurantsIds = useSelector(selectorRestaurantIds);
	const [activeRestaurantId, setActiveRestaurantId] = useState<string>(restaurantsIds[0]);
	const activeId: string | undefined = restaurantsIds.find((id: string) => (id === activeRestaurantId)!);

	return (
		<div>
			<RestaurantTabs onSelect={setActiveRestaurantId}/>
			{activeId && <Restaurant id={activeId} />}
		</div>
	);
};
