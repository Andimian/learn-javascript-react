import { Header } from '../header/component.tsx';
import { Footer } from '../footer/footer.tsx';
import classNames from 'classnames';
import styles from "../layout/style.module.scss";
import { Outlet } from 'react-router-dom';

export const Layout = () => {

	return (
		<div className={styles.parent}>
			<div className={classNames(styles.layout)}>
				<Header/>
				<div className={classNames(styles.container)}>
					<Outlet/>
				</div>
				<Footer/>
			</div>
			<div id="modal-container"></div>
		</div>
	)
}
