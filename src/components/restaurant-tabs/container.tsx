import { FC } from 'react';
import { RestaurantTabs } from './component.tsx';
import { useGetRestaurantsQuery } from '../../redux/services/api.ts';

export const RestaurantTabsContainer: FC =  () => {
	const {data: restaurants, isLoading} = useGetRestaurantsQuery(undefined);

	if (isLoading) return <div>Loading...</div>

	if (!restaurants) {
		return null;
	}

	return (
		<div>
				<RestaurantTabs restaurants={restaurants} />
		</div>
	);
};

