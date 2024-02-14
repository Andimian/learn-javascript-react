import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorRestaurantIds } from '../../../redux/entities/restaurant/selectors.tsx';
import { getRestaurants } from '../../../redux/entities/restaurant/thunks/get-restaurants.ts';

export const RestaurantPage = () => {
	const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(getRestaurants())
	// }, []);
	const restaurantsIds = useSelector(selectorRestaurantIds);
	const [activeRestaurantId, setActiveRestaurantId] = useState<string>(restaurantsIds[0]);
	const activeId: string | undefined = restaurantsIds.find((id: string) => (id === activeRestaurantId)!);

	return (
		<div>
			{/*<RestaurantTabs onSelect={setActiveRestaurantId}/>*/}
			{/*{activeId && <Restaurant id={activeId} />}*/}
		</div>
	);
};
