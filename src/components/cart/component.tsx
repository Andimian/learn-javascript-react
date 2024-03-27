import { FC } from 'react';
import styles from './style.module.scss';
import { CartDishContainer } from '../dish/cart-dish/container.tsx';

type props = {
	// так возвращает Object.entries
	dishes: Record<string, number>;
};

export const Cart: FC<props> = ({dishes}) => {
	return (
		<div className={styles.root}>
			{dishes ? (
				Object.entries(dishes).map((dish) => {
					return (
						<CartDishContainer
							key={dish[0]}
							isClickable={true}
							dishId={dish[0]}
						/>
					);
				})
			) : (<span>Your cart is empty</span>)}
		</div>
	);
};
