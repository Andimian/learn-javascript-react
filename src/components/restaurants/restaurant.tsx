import * as React from 'react';
import { restaurantProps } from '../../types/types.tsx';
import { Menu } from '../menu/component.tsx';
import { Reviews } from "../reviews/reviews.tsx";
import styles from "./style.module.scss";
import classNames from "classnames";

export const Restaurant: React.FC<restaurantProps> = (
	{id, name, menu, reviews}
) => {
	console.log(id);
	return (
		<div>
			<h2>Ресторан {name}</h2>
			<h3 className={classNames(styles.menuTitle)}>Меню:</h3>
			<Menu menu={menu}/>
			<h3>Отзывы:</h3>
			<Reviews reviews={reviews}/>
		</div>
	);
};

