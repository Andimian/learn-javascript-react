import { Menu } from './component.tsx';
import { useGetDishesByRestaurantIdQuery, } from '../../redux/services/api.ts';

export type MenuProps = {
	restaurantId: string,
};

export const MenuContainer = ({restaurantId}: MenuProps ) => {
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
