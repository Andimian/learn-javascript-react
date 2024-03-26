import { useParams } from 'react-router-dom';
import { useGetDishesByRestaurantIdQuery } from '../../redux/services/api.ts';
import { Menu } from './component.tsx';

export const MenuContainer = () => {
	let { restaurantId } = useParams();
	restaurantId = restaurantId ? restaurantId : '';
	const {data: dishes, isFetching} = useGetDishesByRestaurantIdQuery(restaurantId);

	if (isFetching) return <div>Loading...</div>;
	if (!dishes) return null;
	return (
		<>
			{isFetching
				? ('Loading...')
			: <Menu dishes={dishes} restaurantId={restaurantId}/>
			}
		</>
)
};
