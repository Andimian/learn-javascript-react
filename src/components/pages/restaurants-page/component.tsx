import { RestaurantTabsContainer } from '../../restaurant-tabs/container.tsx';
import { Outlet } from 'react-router-dom';

export const RestaurantsPage = () => {
	return (
		<div>
			<RestaurantTabsContainer/>
			<Outlet/>
		</div>
	);
};