import { FC, useContext } from 'react';
import { UserAuthContext } from '../../contexts/authContext.tsx';

import { Restaurant } from './component.tsx';
import { useGetRestaurantsQuery } from '../../redux/services/api.ts';

export type restaurantProps  = {
	restaurantId: string,
};

export const RestaurantContainer: FC<restaurantProps> = ({restaurantId}) => {
	const { user } = useContext(UserAuthContext);

	const { data: restaurant } = useGetRestaurantsQuery(undefined, {
		selectFromResult: (result) => {
			return ({
				...result,
				data: result.data?.find(({ id }) => id === restaurantId),
			})
		}
	});

	/* В контейнерах лучше делать такую проверку, так как велика вероятность того, что данные не пришли */
	if (!restaurant) {
		return null;
	}

	return (
		<Restaurant id={restaurant.id} user={user} name={restaurant.name} menu={restaurant.menu}/>
	);
};

