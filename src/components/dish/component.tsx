import styles from "./style.module.scss";
import classNames from "classnames";
import { FC, } from 'react';

export type DishType = {
	id: string;
	name: string;
	price: number;
	ingredients: string[];
}

export const Dish: FC<DishType> = (props) => {
	return (
		<div className={classNames(styles.dish)}>
			<h3 className={classNames(styles.name)}>
				{props.name}
			</h3>
		</div>
	);
};
