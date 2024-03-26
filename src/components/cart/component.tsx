import { FC } from 'react';
import styles from './style.module.scss';
import { DishContainer } from '../dish/container.tsx';

type props = {
	// так возвращает Object.entries
	productIds: [string, Record<string, number>][];
};

export const Cart: FC<props> = ({productIds}) => {

	return (
		<div className={styles.root}>
			{productIds.length ? (
				productIds.map((restaurantIdWithDishes) =>
					Object.keys(restaurantIdWithDishes[1]).map((dishId) => {
						return (
							<DishContainer
								key={dishId}
								isClickable={true}
								restaurantId={restaurantIdWithDishes[0]}
								dishId={dishId}
							/>
						);
					})
				)
			) : (<span>Your cart is empty</span>)}
		</div>
	);
};
