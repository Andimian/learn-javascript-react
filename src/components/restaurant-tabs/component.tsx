import { IRestaurant } from '../../types.tsx';
import { NavLink } from 'react-router-dom';
import { Tab } from '../restaurant-tab/component.tsx';

type Props = {
	restaurants: IRestaurant[],
}

export const RestaurantTabs = ({restaurants }: Props) => {
	return (
		<div>
			{restaurants.map((restaurant) => (
				<NavLink  key={restaurant.id} to={`/restaurants/${restaurant.id}`}>
					{
						({ isActive }) => (
						<Tab
							key={restaurant.id}
							restaurant={restaurant}
							isActive={isActive}
						/>
						)
					}
				</NavLink>
			))}
		</div>
	);
};

