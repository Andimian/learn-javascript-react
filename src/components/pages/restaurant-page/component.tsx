import { RestaurantTabs } from '../../restaurants-tabs/component.tsx';
import { useState } from 'react';
import { Restaurant } from '../../restaurants/restaurant.tsx';
import { useSelector } from 'react-redux';
import { selectorRestaurantIds } from '../../../redux/entities/restaurant/selectors.tsx';

export const RestaurantPage = () => {
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
