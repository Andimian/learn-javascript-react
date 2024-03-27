import { FC } from 'react';
import cart from '../../assets/img/cart.png';
import styles from './style.module.scss';

type Props = {
	amount: number,
	className: string,
	onClick: () => void,
}
export const CartBtn: FC<Props> = ({amount, className, onClick}) => {
	return (
		<button
			className={className}
			onClick={onClick}
		>
			<img src={cart} alt="Cart" className={styles.cart_img}></img>
			{!!amount && (
				<span className={styles.productCount}>
            {amount}
          </span>
			)}
		</button>
	)
};
