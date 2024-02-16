import { RestaurantTabContainer } from '../restaurant-tab/component.tsx';

type Props = {
	onSelect: (id: string) => void,
	restaurantsIds: string[];
}

export const RestaurantTabs = ({restaurantsIds, onSelect }: Props) => {
	return (
		<div>
			{restaurantsIds.map((id) => (
				<RestaurantTabContainer
					key={id}
					restaurantId={id}
					onSelect={() => onSelect(id)}
				/>
			))}
		</div>
	);
};

