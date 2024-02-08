import { Button } from '../button/component.tsx';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectorRestaurantById } from '../../redux/entities/restaurant/selectors.tsx';
import { RootState } from '../../redux';

type Props = {
	onClick: () => void,
	id: string,
}

export const Tab: FC<Props> = ({id, onClick}) => {
	const rest = useSelector((state: RootState) => selectorRestaurantById(state, id))
	return (
		<Button onClick={onClick} title={rest.name}/>
	);
};

