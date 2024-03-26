import logo from '../../assets/img/logo.png';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link to='/' className={styles.root}>
			<img src={logo} alt=""/>
		</Link>
	);
};

export default Logo;