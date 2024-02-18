import { DishContainer, DishType } from '../dish/container.tsx';

export type MenuProps = {
	dishes: DishType[],
};

export const Menu = ({dishes}: MenuProps ) => {
	return (
		<ul>
			{dishes.map((dish	) => (
				<li key={dish.id}><DishContainer dish={dish} /></li>
			))}
		</ul>
	)
};
