import { RestaurantsProps } from '../../types/types.tsx';
import { Button } from '../button/component.tsx';
import { useState } from 'react';
import { Restaurant } from '../restaurants/restaurant.tsx';

export const Tabs = ({restaurants}: RestaurantsProps) => {
	const [activeTab, setActiveTab] = useState(restaurants[0].name)
	const fn = (name: string | undefined) => setActiveTab(name);
	return (
		<div>
			<div>
				{restaurants.map((item) => (
					<Button key={item.id} onClick={() => fn(item.name)}>
						{item.name}
					</Button>
				))}
			</div>
			<div>
				<Restaurant {...restaurants.find((restaurant) => (
					restaurant.name === activeTab
				))} />
			</div>
		</div>
	);
};

