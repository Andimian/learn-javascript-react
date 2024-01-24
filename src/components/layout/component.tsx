import { Header } from '../header/component.tsx';
import React from 'react';
import { Footer } from '../footer/footer.tsx';

type Props = {
	children: React.ReactNode
}

export const Layout = ({children}: Props) => {
	return (
		<div>
			<Header/>
			<div>{children}</div>
			<Footer/>
		</div>
	)
}
