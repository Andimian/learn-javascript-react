import { Header } from '../header/component.tsx';
import { ReactNode,  } from 'react';
import { Footer } from '../footer/footer.tsx';
import classNames from 'classnames';
import styles from "../layout/style.module.scss";

type Props = {
	children: ReactNode,
}

export const Layout = ({children}: Props) => {
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(getDish())
	// }, []);

	return (
		<div className={styles.parent}>
			<div className={classNames(styles.layout)}>
				<Header/>
				<div className={classNames(styles.container)}>{children}</div>
				<Footer/>
			</div>
			<div id="modal-container"></div>
		</div>
	)
}
