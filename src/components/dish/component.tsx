import styles from "./style.module.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from 'react-redux';
import { FC, useEffect } from 'react';
import { fetchDish, } from '../../redux/entities/dish/thunks/fetch-dish.tsx';
import { selectorDishById } from '../../redux/entities/dish/selectors.tsx';
import { decrement, increment, selectProductAmountById } from '../../redux/ui/cart';
import { AppDispatch, RootState } from '../../redux';
import { Button } from '../button/component.tsx';

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
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		dispatch(fetchDish())
	}, []);
	const dish: DishType = useSelector((state: RootState) => selectorDishById(state, dishId));
	const amount = useSelector((state: RootState) => selectProductAmountById(state, dishId))

	return (
		<div className={classNames(styles.dish)}>
			<h3 className={classNames(styles.name)}>
				{dish && dish.name}
			</h3>
			<div>
				<Button disabled={amount === 0} onClick={() => dispatch(decrement(dishId))} className={classNames(styles.countBtn)} title='-'/>
				<span className={classNames(styles.count)}>{amount}</span>
				<Button disabled={amount === 5} onClick={() => dispatch(increment(dishId))} className={classNames(styles.countBtn)} title='+'/>
			</div>
		</div>
	);
};
