import { RestaurantTabContainer } from '../restaurant-tab/container.tsx';

type Props = {
	onSelect:  React.Dispatch<React.SetStateAction<string | null>>,
	restaurantsIds: string[],
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

