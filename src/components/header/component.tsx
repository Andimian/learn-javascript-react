import styles from "./style.module.scss";
import classNames from "classnames";
import { Login } from '../login/component.tsx';
import { CartContainer } from '../cart/container.tsx';

export const Header = () => {
	return (
		<header className={classNames(styles.header) }>
			<h1>Наши рестораны</h1>
			<>
				<Login/>
				<CartContainer/>
			</>
		</header>
	)
}