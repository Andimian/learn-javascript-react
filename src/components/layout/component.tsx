import { Header } from '../header/component.tsx';
import { ReactNode } from 'react';
import { Footer } from '../footer/footer.tsx';
import classNames from 'classnames';
import styles from "../layout/style.module.scss";

type Props = {
	// children: React.ReactNode,
	children: ReactNode,
	className: string,
}

export const Layout = ({children}: Props) => {
	return (
		<div className={classNames(styles.layout)}>
			<Header/>
			<div className={classNames(styles.container)}>{children}</div>
			<Footer/>
		</div>
	)
}
