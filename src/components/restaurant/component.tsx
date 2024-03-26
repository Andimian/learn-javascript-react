import styles from "./style.module.scss";
import classNames from "classnames";
import { FC } from 'react';
import { TUser } from '../../types.tsx';
import { NavLink, Outlet } from 'react-router-dom';

export type Trestaurant  = {
	name: string,
	menu: string[],
	user: TUser | null,
	id: string,
};

export const Restaurant: FC<Trestaurant> = (props) => {

	return (
		<div>
			<h2>Ресторан {props.name}</h2>
			<NavLink to={'menu'} className={classNames(styles.menuTitle)}>Меню</NavLink>
			<NavLink to={'reviews'} className={classNames(styles.menuTitle)}>Отзывы</NavLink>
			<Outlet />
		</div>
	);
};

