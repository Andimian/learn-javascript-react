import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetDishByIdQuery } from '../../../redux/services/api.ts';

export const DishPage: FC = () => {
	const { dishId } = useParams();
	const { data: dish } = useGetDishByIdQuery(dishId!);

	if (!dish) {
		return null;
	}

	return (
		'Hello'
		// <DishContainer dishId={dishId} />
	);
};