import { Dish } from '../dish/component.tsx';
import { FC } from 'react';
import styles from './style.module.scss';

type props = {
	productIds: string[],
}
export const Cart: FC<props> = ({productIds}) => {
	return (
		<div className={styles.root}>
			{productIds.length
				? productIds.map((productId) => <Dish
					dishId={productId}
					key={productId}
				/>)
				: "Empty"}
		</div>
	);
};

export class CartContainer {
}