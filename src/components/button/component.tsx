import classNames from 'classnames';
import styles from './style.module.scss';

export const disabled = {
	enabled: 'enabled',
	disabled: 'disabled',
}

type Props = {
	onClick: () => void,
	children?: string,
	disabled?: boolean,
	className?: string,
}
export const Button = ({onClick, children, className, disabled}: Props) => {
	return <button
		className={classNames(styles.btn, className, {
			[styles.disabled]: disabled === true,
			[styles.enabled]: disabled === false,
		})}
		onClick={onClick}
	>
		{children}
	</button>;
}
;

