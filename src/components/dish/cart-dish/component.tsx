import styles from "../style.module.scss";
import classNames from "classnames";
import { FC } from 'react';
import { Counter } from '../../counter/component.tsx';
import { TDish } from '../../../types.tsx';
import { Link } from 'react-router-dom';

export type DishType = {
	id: string;
	name: string;
	price: number;
	ingredients: string[];
}

type Props = {
	dish: TDish,
	setAmount?:  (amount: number) => void,
	amount?: number,
	isClickable: boolean,
}

export const CartDish: FC<Props> = (
	{dish, isClickable, amount,  setAmount}
) => {
	if (!dish) {
		return null;
	}

	return (
		<div className={classNames(styles.dish)}>
			{isClickable ? (
				<Link to={`/dish/${dish.id}`}>
					{dish.name}
				</Link>
					) : (
				<div className={classNames(styles.name)}>
					{dish.name}
				</div>
			)
			}

			{amount != null && setAmount && (
				<Counter
					value={amount}
					onChange={setAmount}
				/>
			)}
		</div>
	);
};
