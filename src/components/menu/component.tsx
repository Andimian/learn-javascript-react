import { DishContainer, DishType } from '../dish/container.tsx';

export type MenuProps = {
	dishes: DishType[],
	restaurantId: string,
};

/** Все блюда ресторана */
export const Menu = ({dishes, restaurantId}: MenuProps ) => {

	return (
		<ul>
			{dishes.map((dish	) => (
				/* Тут передаем id, а не сущность потому что корзина нормально работает только с
				* redux Toolkit (соответственно там нужны id) */
				<li key={dish.id}><DishContainer dishId={dish.id}  restaurantId={restaurantId} /></li>
			))}
		</ul>
	)
};
