import { FC } from 'react';
import { RestaurantTabs } from './component.tsx';

type Props = {
	onSelect:  React.Dispatch<React.SetStateAction<string | null>>,
	restaurantsIds: string[],
}

export const RestaurantTabsContainer: FC<Props> =  (props) => {
	return (
		<div>
				<RestaurantTabs {...props} />
		</div>
	);
};

