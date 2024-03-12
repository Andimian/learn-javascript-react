import styles from "./style.module.scss";
import classNames from "classnames";
import { FC } from 'react';
import { Counter } from '../counter/component.tsx';

export type DishType = {
	id: string;
	name: string;
	price: number;
	ingredients: string[];
}

type Props = {
	dish: DishType,
	setAmount:  (amount: any) => {payload: any, type: "cart/setAmount"},
	amount: number,
}

export const Dish: FC<Props> = ({dish, amount,  setAmount}) => {

	return (
		<div className={classNames(styles.dish)}>
			<div className={classNames(styles.name)}>
				{dish.name}
			</div>
			<Counter
				value={amount}
				onChange={setAmount}
			/>
		</div>
	);
};
