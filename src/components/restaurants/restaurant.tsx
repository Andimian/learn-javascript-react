import * as React from 'react';
import { TRestaurantProps } from './Restaurants.tsx';

export const Restaurant: React.FC<TRestaurantProps> = ({name, menu, reviews}) => {
	return (
		<div>
			<h2>Ресторан {name}</h2>
			<h3>Меню</h3>
			{menu.map((menu) => (
				<li>menu</li>
				))}
			<h3>Отзывы</h3>
			<ul>
				<li>{reviews[0].text}</li>
				<li>{reviews[1].text}</li>
			</ul>
		</div>
	);
};

