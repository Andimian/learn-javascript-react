import { Dish } from '../dish/component.tsx';

export type MenuProps = {
	menu: string[],
};

export const Menu = ({menu}: MenuProps ) => {
	return (
		<ul>
			{menu.map((dishId	) => (
				<li key={dishId}><Dish dishId={dishId} /></li>
			))}
		</ul>
	)
};

