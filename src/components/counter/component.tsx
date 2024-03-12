import { Button } from '../button/component.tsx';
import classNames from 'classnames';
import styles from '../dish/style.module.scss';

type Props = {
	value: number,
	onChange: (arg: number) => void,
}

export const Counter = ({value, onChange}: Props) => {
	return (
		<div>
			<Button disabled={value === 0} onClick={() => onChange(value - 1)} className={classNames(styles.countBtn)} title='-'/>
			<span className={classNames(styles.count)}>{value}</span>
			<Button disabled={value === 15} onClick={() => onChange(value + 1)} className={classNames(styles.countBtn)} title='+'/>
		</div>
	);
};