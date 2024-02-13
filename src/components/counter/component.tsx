import { Button } from '../button/component.tsx';
import { increment, selectProductAmountById } from '../../redux/ui/cart';
import classNames from 'classnames';
import styles from '../dish/style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux';
import { useEffect } from 'react';
import { getDish } from '../../redux/entities/dish/thunks/get-dish.tsx';

type Props = {
	id: string,
}
export const Counter = ({id}: Props) => {
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		dispatch(getDish())
	}, []);
	const amount = useSelector((state: RootState) => selectProductAmountById(state, id))

	return (
		<div>
			<Button disabled={amount === 0} onClick={() => dispatch(increment)} className={classNames(styles.countBtn)} title='-'/>
			<span className={classNames(styles.count)}>{amount}</span>
			<Button disabled={amount === 5} onClick={() => dispatch(increment)} className={classNames(styles.countBtn)} title='+'/>
		</div>
	);
};