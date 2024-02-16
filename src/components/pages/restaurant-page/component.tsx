import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorRestaurantIds } from '../../../redux/entities/restaurant/selectors.tsx';
import { getRestaurants } from '../../../redux/entities/restaurant/thunks/get-restaurants.ts';
import { RestaurantTabs } from '../../restaurant-tabs/component.tsx';
import { RestaurantContainer } from '../../restaurant/container.tsx';

export const RestaurantPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getRestaurants())
	}, []);
	const restaurantsIds = useSelector(selectorRestaurantIds);
	const [activeRestaurantId, setActiveRestaurantId] = useState<string>(restaurantsIds[0]);
	const activeId: string | undefined = restaurantsIds.find((id: string) => (id === activeRestaurantId)!);

	return (
		<div>
			<RestaurantTabs
				onSelect={setActiveRestaurantId}
				restaurantsIds={restaurantsIds}
			/>

			{activeId ? (
				<RestaurantContainer id={activeId} />
			) : (
				'No active restaurant'
			)}
		</div>
	);
};
