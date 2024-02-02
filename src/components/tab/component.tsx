import { Button } from '../button/component.tsx';
import { FC } from 'react';

type Props = {
	title: string,
	onClick: () => void,
	// className: string,
}

export const Tab: FC<Props> = ({title, onClick}) => {
	return (
		<Button onClick={onClick} title={title}/>
	);
};

