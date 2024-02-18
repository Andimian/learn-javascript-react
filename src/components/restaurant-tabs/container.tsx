import { FC } from 'react';
import { RestaurantTabs } from './component.tsx';
import { useGetRestaurantsQuery } from '../../redux/services/api.ts';

type Props = {
	onSelect:  React.Dispatch<React.SetStateAction<string | null>>,
}

export const RestaurantTabsContainer: FC<Props> =  (props) => {
	const {data: restaurants, isLoading} = useGetRestaurantsQuery();

	if (isLoading) return <div>Loading...</div>

	return (
		<div>
				<RestaurantTabs {...props} restaurants={restaurants} />
		</div>
	);
};

