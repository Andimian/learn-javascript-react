import classNames from 'classnames';
import styles from './style.module.scss';

type Props = {
	onClick: () => void,
	title: string,
	children?: string,
	disabled?: boolean,
	className?: string,
}
export const Button = ({onClick, title, className, disabled}: Props) => {
	return <button
		className={classNames(styles.btn, className, {
			[styles.disabled]: disabled === true,
			[styles.enabled]: disabled === false,
		})}
		onClick={onClick}
	>
		{title}
	</button>;
}
;

