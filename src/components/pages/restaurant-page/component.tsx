import { useState } from 'react';
import { RestaurantTabsContainer } from '../../restaurant-tabs/container.tsx';
import { RestaurantContainer } from '../../restaurant/container.tsx';

export const RestaurantPage = () => {
	const [activeRestaurantId, setActiveRestaurantId] = useState<string | null>(null);

	return (
		<div>
			<RestaurantTabsContainer onSelect={setActiveRestaurantId}/>

			{activeRestaurantId ? (
				<RestaurantContainer restaurantId={activeRestaurantId} />
			) : (
				'No active restaurant'
			)}
		</div>
	);
};
