import { Button } from '../button/component.tsx';
import { FC } from 'react';

type Props = {
	onClick: () => void,
	title: string,
}

export const Tab: FC<Props> = ({onClick, title}) => {
	return (
		<Button onClick={onClick} title={title}/>
	);
};
