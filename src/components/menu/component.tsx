import { Dish } from '../dish/component.tsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchDish } from '../../redux/entities/dish/thunks/fetch-dish.tsx';

export type MenuProps = {
	menu: string[],
};

export const Menu = ({menu}: MenuProps ) => {
	// const dispatch = useDispatch<AppDispatch>();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchDish())
	}, []);
	return (
		<ul>
			{menu.map((dishId	) => (
				<li key={dishId}><Dish dishId={dishId} /></li>
			))}
		</ul>
	)
};
