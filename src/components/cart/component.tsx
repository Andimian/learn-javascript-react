import { FC } from 'react';
import styles from './style.module.scss';
import { DishContainer } from '../dish/container.tsx';

type props = {
	productIds: string[],
}
export const Cart: FC<props> = ({productIds}) => {

	return (
		<div className={styles.root}>
			{productIds.length
				? (productIds.map((dish) => (
					<DishContainer
						dish={dish}
				/>)))
				: "Empty"}
		</div>
	);
};

export class CartContainer {
}