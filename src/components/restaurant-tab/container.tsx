import { Tab } from '../tab/component.tsx';
import { useSelector } from 'react-redux';
import { selectorRestaurantById } from '../../redux/entities/restaurant/selectors.tsx';
import { RootState } from '../../redux';

type Props = {
	onSelect: () => void,
	restaurantId: string,
}

export const RestaurantTabContainer = ({ restaurantId, onSelect }: Props) => {
	const restaurant = useSelector((state: RootState) =>selectorRestaurantById(state, restaurantId));
	return (
		<Tab onClick={onSelect} title={restaurant.name}></Tab>
	);
};

