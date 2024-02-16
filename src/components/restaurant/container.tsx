import { FC, useContext } from 'react';
import { UserAuthContext } from '../../contexts/authContext.tsx';
import { useSelector } from 'react-redux';
import { selectorRestaurantById } from '../../redux/entities/restaurant/selectors.tsx';
import { RootState } from '../../redux';

import { Restaurant } from './component.tsx';

export type restaurantProps  = {
	id: string,
};

export const RestaurantContainer: FC<restaurantProps> = ({id}) => {
	const { user } = useContext(UserAuthContext);
	const restaurant = useSelector((state: RootState) => selectorRestaurantById(state, id));

	/* В контейнерах лучше делать такую проверку, так как велика вероятность того, что данные не пришли */
	if (!restaurant) {
		return null;
	}

	return (
		<Restaurant user={user} name={restaurant.name} menu={restaurant.menu}/>
	);
};

