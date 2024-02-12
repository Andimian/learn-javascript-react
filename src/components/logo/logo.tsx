import logo from '../../assets/img/logo.png';
import styles from './style.module.scss';

const Logo = () => {
	return (
		<div className={styles.root}>
			<img src={logo} alt=""/>
		</div>
	);
};

export default Logo;