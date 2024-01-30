import * as React from 'react';
import { TRestaurantProps } from '../../types/types.tsx';
import { Menu } from '../menu/component.tsx';
import { Reviews } from "../reviews/reviews.tsx";

export const Restaurant: React.FC<TRestaurantProps> = ({name, menu, reviews}) => {
	return (
		<div>
			<h2>Ресторан {name}</h2>

			<Menu menu={menu}/>

			<Reviews reviews={reviews}/>
		</div>
	);
};

