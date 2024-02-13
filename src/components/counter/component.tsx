import { Button } from '../button/component.tsx';
import classNames from 'classnames';
import styles from '../dish/style.module.scss';

type Props = {
	value: number,
	increment: () => void,
	decrement:  () => void,
}

export const Counter = ({value, increment, decrement}: Props) => {
	return (
		<div>
			<Button disabled={value === 0} onClick={decrement} className={classNames(styles.countBtn)} title='-'/>
			<span className={classNames(styles.count)}>{value}</span>
			<Button disabled={value === 15} onClick={increment} className={classNames(styles.countBtn)} title='+'/>
		</div>
	);
};