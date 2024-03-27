import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { selectProductAmount } from '../../redux/ui/cart';
import { CartBtn } from './component.tsx';
import { FC } from 'react';

type Props = {
	onClick: () => void,
	className: string,
}

export const CartBtnContainer: FC<Props> = ({className, onClick}) => {
	const totalAmount = useSelector((state: RootState) =>
		selectProductAmount(state)
	);

	return (
		<CartBtn amount={totalAmount} className={className} onClick={onClick}/>
	);
}

export default CartBtnContainer;