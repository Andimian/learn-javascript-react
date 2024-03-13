import classNames from 'classnames';
import styles from './style.module.scss';
import { ReactElement } from 'react';

type Props = {
	onClick: () => void,
	title: string,
	children?: ReactElement<any, any>[],
	disabled?: boolean,
	className?: string,
}
export const Button = ({onClick, title, className, disabled, children}: Props) => {
	return <button
		className={classNames(styles.btn, className, {
			[styles.disabled]: disabled === true,
			[styles.enabled]: disabled === false,
		})}
		onClick={onClick}
	>
		{title}{children}
	</button>;
}
;

