import { Tab } from '../tab/component.tsx';

type Props = {
	onSelect:  React.Dispatch<React.SetStateAction<string | null>>,
	restaurants: {
		id: string,
		name: string,
		description: string,
		img: string,
		menu: string[],
		reviews: string[],
	}[],
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

