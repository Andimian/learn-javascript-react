import { MenuProps } from '../../types/types.tsx';
import { useState } from 'react';
import { Button } from '../button/component.tsx';
import styles from "./style.module.scss";
import classNames from "classnames";

export const Dish = ({name}: MenuProps) => {
	const [count, setCount] = useState(0);

	const increment = () => {
		if (count < 5) setCount((count) => ++ count);
	}
	const decrement = () => {
		if (count > 0) setCount((count) => -- count)
	}

	return (
		<div className={classNames(styles.dish)}>
			<h3 className={classNames(styles.name)}>
				{name}
			</h3>

			<div>
				<Button disabled={count === 0} onClick={decrement} className={classNames(styles.countBtn)} title='-'/>
				<span className={classNames(styles.count)}>{count}</span>
				<Button disabled={count === 5} onClick={increment} className={classNames(styles.countBtn)} title='+'/>
			</div>
		</div>
	);
};
