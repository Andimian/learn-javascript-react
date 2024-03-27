import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { CartDishContainer } from '../../dish/cart-dish/container.tsx';
import { useGetDishByIdQuery } from '../../../redux/services/api.ts';

export const DishPage: FC = () => {
	let { dishId } = useParams();
	dishId = dishId ? dishId : '';
	const { data: dish } = useGetDishByIdQuery(dishId);

	if (!dish) return null;
	console.log(dish.ingredients);

	return (
		<>
			<CartDishContainer isClickable={false} dishId={dishId}/>
			<div>
				Цена ${dish.price}
			</div>
			<div>
				<div>Ингридиенты:</div>
				{dish.ingredients.map((item) => {
					return <div>{item}</div>;
				})}
			</div>
		</>

	);
};