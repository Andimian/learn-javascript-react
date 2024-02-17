import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../../redux/ui/request';
import { getRestaurants } from '../../../redux/entities/restaurant/thunks/get-restaurants.ts';
import { RestaurantTabsContainer } from '../../restaurant-tabs/container.tsx';
import { selectorRestaurantIds } from '../../../redux/entities/restaurant/selectors.tsx';
import { RestaurantContainer } from '../../restaurant/container.tsx';
import { AppDispatch, RootState } from '../../../redux';

export const RestaurantPage = () => {
	const [activeRestaurantId, setActiveRestaurantId] = useState<string | null>(null);

	// Этот прикол для отображения загрузки
	const [requestId, setRequestId] = useState<string | null>(null);
	const isLoading = useSelector((state: RootState) => selectIsLoading(state, requestId));

	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		setRequestId(dispatch(getRestaurants()).requestId);
	}, []);
	const restaurantsIds = useSelector(selectorRestaurantIds)
	if (isLoading) return <div>...Loading</div>

	return (
		<div>
			<RestaurantTabsContainer
				onSelect={setActiveRestaurantId}
				restaurantsIds={restaurantsIds}
			/>

			{activeRestaurantId ? (
				<RestaurantContainer id={activeRestaurantId} />
			) : (
				'No active restaurant'
			)}
		</div>
	);
};
