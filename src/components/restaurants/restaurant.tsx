import * as React from 'react';
import { Menu } from '../menu/component.tsx';
import { TRestaurantProps } from '../../types/types.tsx';
import { Reviews } from "../reviews/reviews.tsx";

export const Restaurant: React.FC<TRestaurantProps> = ({name, menu, reviews}) => {
	console.log(menu);
	return (
		<div>
			<h2>Ресторан {name}</h2>
			<h3>Меню:</h3>
			{menu.map((menu) => (
				<Menu {...menu}/>
			))}

			<Reviews reviews={reviews}/>
		</div>
	);
};

