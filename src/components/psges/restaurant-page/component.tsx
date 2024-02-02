import { RestaurantTabs } from '../../restaurants-tabs/component.tsx';
import { restaurants } from '../../../moks-data/mock.ts';
import { useState } from 'react';
import { Restaurant } from '../../restaurants/restaurant.tsx';
import { restaurantProps } from '../../../types/types.tsx';

export const RestaurantPage = () => {
	const [activeRestaurantId, setActiveRestaurantId] = useState<string>(restaurants[0].id);

	const activeRestaurant: restaurantProps | undefined = restaurants.find((rest: restaurantProps) => (rest.id === activeRestaurantId)!);
	// if (!activeRestaurant) throw new Error('activeRestaurant is undefined');

	return ( <div>
			<RestaurantTabs restaurants={restaurants} onSelect={setActiveRestaurantId}/>
			{activeRestaurant && <Restaurant {...activeRestaurant} />}
		</div>
	);
};
