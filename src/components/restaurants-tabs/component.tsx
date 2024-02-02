import { RestaurantsProps } from '../../types/types.tsx';
import { Tab } from '../tab/component.tsx';

type Props = {
	restaurants: RestaurantsProps,
	onSelect: (id: string) => void,
}

export const RestaurantTabs = ({restaurants, onSelect}: Props) => {
	return (
		<div>
			{restaurants.map(({name, id}) => (
				<Tab onClick={ () => onSelect(id)} key={id} title={name || 'название не передано'}></Tab>
			))}
		</div>
	);
};

