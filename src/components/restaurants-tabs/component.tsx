import { Tab } from '../tab/component.tsx';
import { useSelector } from 'react-redux';
import { selectorRestaurantIds } from '../../redux/entities/restaurant/selectors.tsx';

type Props = {
	onSelect: (id: string) => void,
}

export const RestaurantTabs = ({ onSelect }: Props) => {
	const restaurantsIds = useSelector(selectorRestaurantIds);

	return (
		<div>
			{restaurantsIds.map((id) => (
				<Tab onClick={ () => onSelect(id)} key={id} id={id}></Tab>
			))}
		</div>
	);
};

