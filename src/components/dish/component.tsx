import styles from "./style.module.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from 'react-redux';
import { FC, useEffect } from 'react';
import { getDish, } from '../../redux/entities/dish/thunks/get-dish.tsx';
import { selectorDishById } from '../../redux/entities/dish/selectors.tsx';
import { increment, selectProductAmountById } from '../../redux/ui/cart';
import { AppDispatch, RootState } from '../../redux';
import { Button } from '../button/component.tsx';
import { Counter } from '../counter/component.tsx';

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
	// const dish = useSelector((state: RootState) => selectorDishById(state, dishId));
	// const dish = useSelector((state: RootState) => selectorDishById(state, dishId))
	// const dispatch = useDispatch();

	return (
		<div className={classNames(styles.dish)}>
			<h3 className={classNames(styles.name)}>
				{dish && dish.name}
			</h3>
			<Counter id={dishId}/>
		</div>
	);
};
