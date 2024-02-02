import styles from "./style.module.scss";
import classNames from "classnames";

export const Header = () => {
	return (
		<header className={classNames(styles.header) }>
			<h1>Наши рестораны</h1>
		</header>
	)
}