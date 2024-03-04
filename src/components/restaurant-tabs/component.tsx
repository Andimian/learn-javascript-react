import { Tab } from '../tab/component.tsx';
import { IRestaurant } from '../../redux/services/api.ts';

type Props = {
	onSelect:  React.Dispatch<React.SetStateAction<string | null>>,
	restaurants: IRestaurant[],
}

export const RestaurantTabs = ({restaurants, onSelect }: Props) => {
	return (
		<div>
			{restaurants.map(({name, id}) => (
				<Tab
					key={id}
					title={name}
					onClick={() => onSelect(id)}
				/>
			))}
		</div>
	);
};

