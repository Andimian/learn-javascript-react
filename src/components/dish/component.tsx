import styles from "./style.module.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from 'react-redux';
import { FC, } from 'react';
import { selectorDishById } from '../../redux/entities/dish/selectors.tsx';
import {  RootState } from '../../redux';
import { Counter } from '../counter/component.tsx';
import { decrement, increment, selectProductAmountById } from '../../redux/ui/cart';

type Props = {
	dishId: string,
}

export type DishType = {
	id: string;
	name: string;
	price: number;
	ingredients: string[];
}
export const Dish: FC<Props> = ({dishId}) => {
	const dish: DishType = useSelector((state: RootState) => selectorDishById(state, dishId));
	const amount = useSelector((state: RootState) => selectProductAmountById(state, dishId));
	const dispatch = useDispatch();

	return (
		<div className={classNames(styles.dish)}>
			<h3 className={classNames(styles.name)}>
				{dish && dish.name}
			</h3>
			<Counter
				increment={() => {
					dispatch(increment(dishId))
				}}
				decrement={() => {
					dispatch(decrement(dishId))
				}}
				value={amount}
			/>
		</div>
	);
};
