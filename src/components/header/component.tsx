import styles from "./style.module.scss";
import classNames from "classnames";
import Logo from '../logo/logo.tsx';
import UserInfo from '../user-info/userInfo.tsx';

export const Header = () => {
	return (
		<header className={classNames(styles.header) }>
			<div className={styles.container}>
				<Logo/>
				<h1>Наши рестораны</h1>
				<UserInfo/>
			</div>
		</header>
	)
}