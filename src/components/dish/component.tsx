import styles from "./style.module.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDish, getDishes } from '../../redux/entities/dish/thunks/get-dish.tsx';
import { selectorDishById, selectorDishModule } from '../../redux/entities/dish/selectors.tsx';
import { RootState } from '../../redux';

export const Dish = ({dishId}: {dishId: string}) => {
	const dispatch = useDispatch();
	dispatch(getDish());
	// const productIds = useSelector(selectCartProductIds);
	// const test = useSelector(selectProductAmountById(state, dishId));
	// const dish = useSelector((state) => selectDishById(state, dishId));
	const dish = useSelector((state: RootState) => selectorDishById(state, dishId));

	// const amount = useSelector((state: RootState) => selectProductAmountById(state, dishId))
	const increment = () => {
		// if (amount < 5) dispatch(increment);
	}
	const decrement = () => {
		// if (amount > 0) dispatch(decrement)
	};
	// const dish = useSelector((state: RootState) => selectorDishById(state, dishId))
	// const dispatch = useDispatch();

	return (
		<div className={classNames(styles.dish)}>
			<h3 className={classNames(styles.name)}>
				{dish && dish.name}
			</h3>
			<div>
				{/*<Button disabled={amount === 0} onClick={() => decrement} className={classNames(styles.countBtn)} title='-'/>*/}
				{/*<span className={classNames(styles.count)}>{amount}</span>*/}
				{/*<Button disabled={amount === 5} onClick={increment} className={classNames(styles.countBtn)} title='+'/>*/}
			</div>
		</div>
	);
};
